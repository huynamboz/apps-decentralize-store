import React, { useState } from "react";

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

const mockWeatherData: Record<string, { current: CurrentWeather; forecast: ForecastDay[] }> = {
  "San Francisco, CA": {
    current: {
      location: "San Francisco, CA",
      temperature: 72,
      condition: "Partly Cloudy",
      icon: "⛅",
      humidity: 65,
      windSpeed: 12,
      feelsLike: 70,
      description: "Partly cloudy with a chance of afternoon showers",
    },
    forecast: [
      {
        day: "Today",
        date: "Dec 15",
        high: 72,
        low: 58,
        condition: "Partly Cloudy",
        icon: "⛅",
      },
      {
        day: "Tomorrow",
        date: "Dec 16",
        high: 68,
        low: 55,
        condition: "Sunny",
        icon: "☀️",
      },
      {
        day: "Monday",
        date: "Dec 17",
        high: 65,
        low: 52,
        condition: "Rainy",
        icon: "🌧️",
      },
      {
        day: "Tuesday",
        date: "Dec 18",
        high: 70,
        low: 56,
        condition: "Cloudy",
        icon: "☁️",
      },
      {
        day: "Wednesday",
        date: "Dec 19",
        high: 73,
        low: 59,
        condition: "Sunny",
        icon: "☀️",
      },
    ],
  },
  "New York, NY": {
    current: {
      location: "New York, NY",
      temperature: 45,
      condition: "Cloudy",
      icon: "☁️",
      humidity: 78,
      windSpeed: 15,
      feelsLike: 42,
      description: "Cloudy skies with light winds",
    },
    forecast: [
      {
        day: "Today",
        date: "Dec 15",
        high: 45,
        low: 32,
        condition: "Cloudy",
        icon: "☁️",
      },
      {
        day: "Tomorrow",
        date: "Dec 16",
        high: 42,
        low: 30,
        condition: "Snow",
        icon: "❄️",
      },
      {
        day: "Monday",
        date: "Dec 17",
        high: 38,
        low: 28,
        condition: "Snow",
        icon: "❄️",
      },
      {
        day: "Tuesday",
        date: "Dec 18",
        high: 40,
        low: 30,
        condition: "Cloudy",
        icon: "☁️",
      },
      {
        day: "Wednesday",
        date: "Dec 19",
        high: 43,
        low: 32,
        condition: "Partly Cloudy",
        icon: "⛅",
      },
    ],
  },
  "Los Angeles, CA": {
    current: {
      location: "Los Angeles, CA",
      temperature: 78,
      condition: "Sunny",
      icon: "☀️",
      humidity: 45,
      windSpeed: 8,
      feelsLike: 76,
      description: "Clear skies and sunny throughout the day",
    },
    forecast: [
      {
        day: "Today",
        date: "Dec 15",
        high: 78,
        low: 62,
        condition: "Sunny",
        icon: "☀️",
      },
      {
        day: "Tomorrow",
        date: "Dec 16",
        high: 80,
        low: 64,
        condition: "Sunny",
        icon: "☀️",
      },
      {
        day: "Monday",
        date: "Dec 17",
        high: 75,
        low: 60,
        condition: "Partly Cloudy",
        icon: "⛅",
      },
      {
        day: "Tuesday",
        date: "Dec 18",
        high: 77,
        low: 61,
        condition: "Sunny",
        icon: "☀️",
      },
      {
        day: "Wednesday",
        date: "Dec 19",
        high: 79,
        low: 63,
        condition: "Sunny",
        icon: "☀️",
      },
    ],
  },
  "Chicago, IL": {
    current: {
      location: "Chicago, IL",
      temperature: 35,
      condition: "Snow",
      icon: "❄️",
      humidity: 85,
      windSpeed: 20,
      feelsLike: 25,
      description: "Heavy snow with strong winds",
    },
    forecast: [
      {
        day: "Today",
        date: "Dec 15",
        high: 35,
        low: 22,
        condition: "Snow",
        icon: "❄️",
      },
      {
        day: "Tomorrow",
        date: "Dec 16",
        high: 28,
        low: 18,
        condition: "Snow",
        icon: "❄️",
      },
      {
        day: "Monday",
        date: "Dec 17",
        high: 32,
        low: 20,
        condition: "Cloudy",
        icon: "☁️",
      },
      {
        day: "Tuesday",
        date: "Dec 18",
        high: 30,
        low: 19,
        condition: "Snow",
        icon: "❄️",
      },
      {
        day: "Wednesday",
        date: "Dec 19",
        high: 33,
        low: 21,
        condition: "Partly Cloudy",
        icon: "⛅",
      },
    ],
  },
  "Miami, FL": {
    current: {
      location: "Miami, FL",
      temperature: 82,
      condition: "Sunny",
      icon: "☀️",
      humidity: 70,
      windSpeed: 10,
      feelsLike: 85,
      description: "Hot and humid with clear skies",
    },
    forecast: [
      {
        day: "Today",
        date: "Dec 15",
        high: 82,
        low: 72,
        condition: "Sunny",
        icon: "☀️",
      },
      {
        day: "Tomorrow",
        date: "Dec 16",
        high: 84,
        low: 74,
        condition: "Partly Cloudy",
        icon: "⛅",
      },
      {
        day: "Monday",
        date: "Dec 17",
        high: 83,
        low: 73,
        condition: "Sunny",
        icon: "☀️",
      },
      {
        day: "Tuesday",
        date: "Dec 18",
        high: 85,
        low: 75,
        condition: "Sunny",
        icon: "☀️",
      },
      {
        day: "Wednesday",
        date: "Dec 19",
        high: 84,
        low: 74,
        condition: "Partly Cloudy",
        icon: "⛅",
      },
    ],
  },
};

export function App() {
  const locations = Object.keys(mockWeatherData);
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const weatherData = mockWeatherData[selectedLocation];

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
  };

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
        <div
          style={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "#111827",
            }}
          >
            Location:
          </span>
          {locations.map((location) => (
            <button
              key={location}
              onClick={() => handleLocationChange(location)}
              style={{
                padding: "6px 12px",
                fontSize: "14px",
                fontWeight: "500",
                color: selectedLocation === location ? "#ffffff" : "#3b82f6",
                backgroundColor:
                  selectedLocation === location ? "#3b82f6" : "transparent",
                border: "1px solid #3b82f6",
                borderRadius: "6px",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                if (selectedLocation !== location) {
                  e.currentTarget.style.backgroundColor = "rgba(59, 130, 246, 0.1)";
                }
              }}
              onMouseLeave={(e) => {
                if (selectedLocation !== location) {
                  e.currentTarget.style.backgroundColor = "transparent";
                }
              }}
            >
              {location.split(",")[0]}
            </button>
          ))}
        </div>
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
