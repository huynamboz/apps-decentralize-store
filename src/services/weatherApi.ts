// Open-Meteo API service
// Free weather API - no API key required
// Documentation: https://open-meteo.com/en/docs

import axios from 'axios';

const BASE_URL = 'https://api.open-meteo.com/v1/forecast';

// Create axios instance for weather API
const weatherApiClient = axios.create({
  baseURL: 'https://api.open-meteo.com/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface OpenMeteoResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: {
    time: string;
    temperature_2m: string;
    relativehumidity_2m?: string;
    weathercode?: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    relativehumidity_2m?: number[];
    weathercode?: number[];
  };
  daily_units?: {
    time: string;
    weathercode: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
  };
  daily?: {
    time: string[];
    weathercode: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
}

// Weather code to condition mapping (WMO Weather interpretation codes)
// https://open-meteo.com/en/docs
export function getWeatherCondition(weatherCode: number): string {
  if (weatherCode === 0) return 'Clear sky';
  if (weatherCode === 1 || weatherCode === 2 || weatherCode === 3) return 'Partly cloudy';
  if (weatherCode === 45 || weatherCode === 48) return 'Foggy';
  if (weatherCode === 51 || weatherCode === 53 || weatherCode === 55) return 'Drizzle';
  if (weatherCode === 56 || weatherCode === 57) return 'Freezing drizzle';
  if (weatherCode === 61 || weatherCode === 63 || weatherCode === 65) return 'Rain';
  if (weatherCode === 66 || weatherCode === 67) return 'Freezing rain';
  if (weatherCode === 71 || weatherCode === 73 || weatherCode === 75) return 'Snow';
  if (weatherCode === 77) return 'Snow grains';
  if (weatherCode === 80 || weatherCode === 81 || weatherCode === 82) return 'Rain showers';
  if (weatherCode === 85 || weatherCode === 86) return 'Snow showers';
  if (weatherCode === 95) return 'Thunderstorm';
  if (weatherCode === 96 || weatherCode === 99) return 'Thunderstorm with hail';
  return 'Unknown';
}

// Weather code to emoji icon
export function getWeatherIcon(weatherCode: number): string {
  if (weatherCode === 0) return '☀️'; // Clear sky
  if (weatherCode === 1 || weatherCode === 2 || weatherCode === 3) return '⛅'; // Partly cloudy
  if (weatherCode === 45 || weatherCode === 48) return '🌫️'; // Foggy
  if (weatherCode >= 51 && weatherCode <= 57) return '🌦️'; // Drizzle
  if (weatherCode >= 61 && weatherCode <= 67) return '🌧️'; // Rain
  if (weatherCode >= 71 && weatherCode <= 77) return '❄️'; // Snow
  if (weatherCode >= 80 && weatherCode <= 82) return '🌦️'; // Rain showers
  if (weatherCode >= 85 && weatherCode <= 86) return '❄️'; // Snow showers
  if (weatherCode >= 95 && weatherCode <= 99) return '⛈️'; // Thunderstorm
  return '☀️';
}

// Convert Celsius to Fahrenheit
export function celsiusToFahrenheit(celsius: number): number {
  return Math.round((celsius * 9) / 5 + 32);
}

// Get current weather and forecast
// Using fixed coordinates for demo (Berlin, Germany)
export async function getWeatherData(): Promise<OpenMeteoResponse> {
  // Fixed coordinates: Berlin, Germany (52.52, 13.41)
  const latitude = 52.52;
  const longitude = 13.41;

  try {
    const response = await weatherApiClient.get<OpenMeteoResponse>('/forecast', {
      params: {
        latitude,
        longitude,
        hourly: 'temperature_2m,relativehumidity_2m,weathercode',
        daily: 'weathercode,temperature_2m_max,temperature_2m_min',
        timezone: 'auto',
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to fetch weather data: ${error.message}`);
    }
    throw error;
  }
}
