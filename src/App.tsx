import React, { useState, useEffect } from "react";
import {
  getCurrentWeather,
  getForecast,
  getWeatherIcon,
  kelvinToFahrenheit,
  type CurrentWeatherResponse,
  type ForecastResponse,
} from "./services/weatherApi";

interface ForecastDay {
  day: string;
  date: string;
  high: number;
  low: number;
  condition: string;
  icon: string;
}

interface CurrentWeather {
  location: string;
  temperature: number;
  condition: string;
  icon: string;
  humidity: number;
  windSpeed: number;
  feelsLike: number;
  description: string;
}

// Helper function to format date
function formatDate(date: Date): string {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[date.getMonth()]} ${date.getDate()}`;
}

// Helper function to get day name
function getDayName(date: Date, index: number): string {
  if (index === 0) return "Today";
  if (index === 1) return "Tomorrow";
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[date.getDay()];
}

// Transform API response to app format
function transformWeatherData(
  current: CurrentWeatherResponse,
  forecast: ForecastResponse
): { current: CurrentWeather; forecast: ForecastDay[] } {
  const currentWeather: CurrentWeather = {
    location: `${current.name}, ${current.sys.country}`,
    temperature: kelvinToFahrenheit(current.main.temp),
    condition: current.weather[0].main,
    icon: getWeatherIcon(current.weather[0].icon),
    humidity: current.main.humidity,
    windSpeed: Math.round(current.wind.speed * 2.237), // Convert m/s to mph
    feelsLike: kelvinToFahrenheit(current.main.feels_like),
    description: current.weather[0].description,
  };

  // Group forecast by day and get daily max/min
  const dailyForecast: Record<string, ForecastItem[]> = {};
  forecast.list.forEach((item) => {
    const date = new Date(item.dt * 1000);
    const dateKey = date.toDateString();
    if (!dailyForecast[dateKey]) {
      dailyForecast[dateKey] = [];
    }
    dailyForecast[dateKey].push(item);
  });

  // Convert to ForecastDay array (5 days)
  const forecastDays: ForecastDay[] = Object.keys(dailyForecast)
    .slice(0, 5)
    .map((dateKey, index) => {
      const dayItems = dailyForecast[dateKey];
      const date = new Date(dateKey);
      const maxTemp = Math.max(...dayItems.map((item) => kelvinToFahrenheit(item.main.temp_max)));
      const minTemp = Math.min(...dayItems.map((item) => kelvinToFahrenheit(item.main.temp_min)));
      const mainWeather = dayItems[Math.floor(dayItems.length / 2)].weather[0];

      return {
        day: getDayName(date, index),
        date: formatDate(date),
        high: maxTemp,
        low: minTemp,
        condition: mainWeather.main,
        icon: getWeatherIcon(mainWeather.icon),
      };
    });

  return {
    current: currentWeather,
    forecast: forecastDays,
  };
}

export function App() {
  const [city, setCity] = useState("San Francisco");
  const [searchInput, setSearchInput] = useState("San Francisco");
  const [weatherData, setWeatherData] = useState<{ current: CurrentWeather; forecast: ForecastDay[] } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeatherData = async (cityName: string) => {
    setLoading(true);
    setError(null);
    try {
      const [current, forecast] = await Promise.all([
        getCurrentWeather(cityName),
        getForecast(cityName),
      ]);
      const transformed = transformWeatherData(current, forecast);
      setWeatherData(transformed);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch weather data");
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setCity(searchInput.trim());
    }
  };

  if (loading && !weatherData) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#ffffff",
          borderRadius: "0 0 1rem 1rem",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "24px", marginBottom: "8px" }}>⏳</div>
          <div style={{ fontSize: "16px", color: "#6b7280" }}>Loading weather data...</div>
        </div>
      </div>
    );
  }

  if (error && !weatherData) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#ffffff",
          borderRadius: "0 0 1rem 1rem",
          padding: "24px",
        }}
      >
        <div style={{ fontSize: "24px", marginBottom: "8px" }}>⚠️</div>
        <div style={{ fontSize: "16px", color: "#dc2626", marginBottom: "16px", textAlign: "center" }}>
          {error}
        </div>
        <form onSubmit={handleSearch} style={{ display: "flex", gap: "8px", width: "100%", maxWidth: "400px" }}>
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Enter city name..."
            style={{
              flex: 1,
              padding: "8px 12px",
              fontSize: "14px",
              border: "1px solid #d1d5db",
              borderRadius: "6px",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "8px 16px",
              fontSize: "14px",
              fontWeight: "500",
              color: "#ffffff",
              backgroundColor: "#3b82f6",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Search
          </button>
        </form>
      </div>
    );
  }

  if (!weatherData) {
    return null;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        borderRadius: "0 0 1rem 1rem",
      }}
    >
      {/* Header */}
      <div
        style={{
          borderBottom: "1px solid rgba(17, 24, 39, 0.15)",
          padding: "16px",
        }}
      >
        <form onSubmit={handleSearch} style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search for a city..."
            style={{
              flex: 1,
              padding: "8px 12px",
              fontSize: "14px",
              border: "1px solid #d1d5db",
              borderRadius: "6px",
            }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: "8px 16px",
              fontSize: "14px",
              fontWeight: "500",
              color: "#ffffff",
              backgroundColor: loading ? "#9ca3af" : "#3b82f6",
              border: "none",
              borderRadius: "6px",
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Loading..." : "Search"}
          </button>
        </form>
        {error && (
          <div
            style={{
              padding: "8px 12px",
              backgroundColor: "#fef2f2",
              border: "1px solid #fecaca",
              borderRadius: "6px",
              color: "#dc2626",
              fontSize: "14px",
              marginTop: "8px",
            }}
          >
            {error}
          </div>
        )}
      </div>

      {/* Content */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          overflowX: "hidden",
          padding: "16px",
        }}
      >
        {/* Current Weather */}
        <div
          style={{
            borderBottom: "1px solid rgba(17, 24, 39, 0.15)",
            paddingBottom: "16px",
            marginBottom: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: 1, minWidth: "200px" }}>
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#111827",
                  margin: "0 0 8px 0",
                }}
              >
                {weatherData.current.location}
              </h2>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "8px",
                }}
              >
                <span style={{ fontSize: "48px" }}>{weatherData.current.icon}</span>
                <div>
                  <div
                    style={{
                      fontSize: "48px",
                      fontWeight: "600",
                      color: "#111827",
                      lineHeight: 1,
                    }}
                  >
                    {weatherData.current.temperature}°
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      color: "#6b7280",
                      textTransform: "capitalize",
                    }}
                  >
                    {weatherData.current.condition}
                  </div>
                </div>
              </div>
              <p
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
                  margin: "8px 0 0 0",
                  textTransform: "capitalize",
                }}
              >
                {weatherData.current.description}
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                minWidth: "150px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(17, 24, 39, 0.1)",
                }}
              >
                <span style={{ fontSize: "14px", color: "#6b7280" }}>Feels like</span>
                <span style={{ fontSize: "14px", fontWeight: "500", color: "#111827" }}>
                  {weatherData.current.feelsLike}°
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(17, 24, 39, 0.1)",
                }}
              >
                <span style={{ fontSize: "14px", color: "#6b7280" }}>Humidity</span>
                <span style={{ fontSize: "14px", fontWeight: "500", color: "#111827" }}>
                  {weatherData.current.humidity}%
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "8px 0",
                }}
              >
                <span style={{ fontSize: "14px", color: "#6b7280" }}>Wind</span>
                <span style={{ fontSize: "14px", fontWeight: "500", color: "#111827" }}>
                  {weatherData.current.windSpeed} mph
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Forecast */}
        <div>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#111827",
              margin: "0 0 12px 0",
            }}
          >
            5-Day Forecast
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {weatherData.forecast.map((day, index) => (
              <div
                key={index}
                style={{
                  padding: "12px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  transition: "background-color 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(31, 41, 55, 0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <div
                  style={{
                    minWidth: "100px",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#111827",
                  }}
                >
                  {day.day}
                </div>
                <div
                  style={{
                    minWidth: "60px",
                    fontSize: "12px",
                    color: "#6b7280",
                  }}
                >
                  {day.date}
                </div>
                <div
                  style={{
                    fontSize: "24px",
                    minWidth: "40px",
                    textAlign: "center",
                  }}
                >
                  {day.icon}
                </div>
                <div
                  style={{
                    flex: 1,
                    fontSize: "14px",
                    color: "#6b7280",
                    textTransform: "capitalize",
                  }}
                >
                  {day.condition}
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "center",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  <span style={{ color: "#111827" }}>{day.high}°</span>
                  <span style={{ color: "#9ca3af" }}>{day.low}°</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
