import React, { useState, useEffect } from "react";
import {
  getWeatherData,
  getWeatherIcon,
  getWeatherCondition,
  celsiusToFahrenheit,
  type OpenMeteoResponse,
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
function transformWeatherData(data: OpenMeteoResponse): { current: CurrentWeather; forecast: ForecastDay[] } {
  // Get current weather from hourly data (first hour = current)
  const currentHourIndex = 0;
  const currentTemp = data.hourly.temperature_2m[currentHourIndex];
  const currentHumidity = data.hourly.relativehumidity_2m?.[currentHourIndex] || 0;
  const currentWeatherCode = data.hourly.weathercode?.[currentHourIndex] || 0;

  const currentWeather: CurrentWeather = {
    location: `Berlin, Germany (${data.latitude.toFixed(2)}, ${data.longitude.toFixed(2)})`,
    temperature: celsiusToFahrenheit(currentTemp),
    condition: getWeatherCondition(currentWeatherCode),
    icon: getWeatherIcon(currentWeatherCode),
    humidity: currentHumidity,
    feelsLike: celsiusToFahrenheit(currentTemp), // Open-Meteo doesn't provide feels_like, using same temp
    description: getWeatherCondition(currentWeatherCode).toLowerCase(),
  };

  // Get forecast from daily data
  const forecastDays: ForecastDay[] = (data.daily?.time || []).slice(0, 5).map((dateStr, index) => {
    const date = new Date(dateStr);
    const weatherCode = data.daily?.weathercode?.[index] || 0;
    const maxTemp = data.daily?.temperature_2m_max?.[index] || 0;
    const minTemp = data.daily?.temperature_2m_min?.[index] || 0;

    return {
      day: getDayName(date, index),
      date: formatDate(date),
      high: celsiusToFahrenheit(maxTemp),
      low: celsiusToFahrenheit(minTemp),
      condition: getWeatherCondition(weatherCode),
      icon: getWeatherIcon(weatherCode),
    };
  });

  return {
    current: currentWeather,
    forecast: forecastDays,
  };
}

export function App() {
  const [weatherData, setWeatherData] = useState<{ current: CurrentWeather; forecast: ForecastDay[] } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getWeatherData();
        const transformed = transformWeatherData(data);
        setWeatherData(transformed);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch weather data");
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
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

  if (error) {
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
        <div style={{ fontSize: "16px", color: "#dc2626", textAlign: "center" }}>
          {error}
        </div>
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
