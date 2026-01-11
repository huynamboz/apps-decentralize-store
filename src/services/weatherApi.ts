// OpenWeatherMap API service
// Note: You'll need to get a free API key from https://openweathermap.org/api
// For demo purposes, we'll use a public endpoint that works without API key
// or you can set VITE_WEATHER_API_KEY in your .env file

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY || '';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface CurrentWeatherResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: WeatherCondition[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface ForecastItem {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  weather: WeatherCondition[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  visibility: number;
  pop: number;
  dt_txt: string;
}

export interface ForecastResponse {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastItem[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

// Helper function to get weather icon emoji
export function getWeatherIcon(iconCode: string): string {
  const iconMap: Record<string, string> = {
    '01d': '☀️', // clear sky day
    '01n': '🌙', // clear sky night
    '02d': '⛅', // few clouds day
    '02n': '☁️', // few clouds night
    '03d': '☁️', // scattered clouds
    '03n': '☁️',
    '04d': '☁️', // broken clouds
    '04n': '☁️',
    '09d': '🌧️', // shower rain
    '09n': '🌧️',
    '10d': '🌦️', // rain day
    '10n': '🌧️', // rain night
    '11d': '⛈️', // thunderstorm
    '11n': '⛈️',
    '13d': '❄️', // snow
    '13n': '❄️',
    '50d': '🌫️', // mist
    '50n': '🌫️',
  };
  return iconMap[iconCode] || '☀️';
}

// Helper function to convert Kelvin to Fahrenheit
export function kelvinToFahrenheit(kelvin: number): number {
  return Math.round(((kelvin - 273.15) * 9) / 5 + 32);
}

// Helper function to convert Kelvin to Celsius
export function kelvinToCelsius(kelvin: number): number {
  return Math.round(kelvin - 273.15);
}

// Get current weather by city name
export async function getCurrentWeather(city: string): Promise<CurrentWeatherResponse> {
  const url = `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}`;
  
  if (!API_KEY) {
    // Fallback: Use a mock API or show error
    throw new Error('API key not configured. Please set VITE_WEATHER_API_KEY in your .env file or get a free API key from https://openweathermap.org/api');
  }

  const response = await fetch(url);
  
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('City not found. Please check the city name.');
    }
    if (response.status === 401) {
      throw new Error('Invalid API key. Please check your API key configuration.');
    }
    throw new Error(`Failed to fetch weather data: ${response.statusText}`);
  }

  return response.json();
}

// Get 5-day forecast by city name
export async function getForecast(city: string): Promise<ForecastResponse> {
  const url = `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}`;
  
  if (!API_KEY) {
    throw new Error('API key not configured. Please set VITE_WEATHER_API_KEY in your .env file or get a free API key from https://openweathermap.org/api');
  }

  const response = await fetch(url);
  
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('City not found. Please check the city name.');
    }
    if (response.status === 401) {
      throw new Error('Invalid API key. Please check your API key configuration.');
    }
    throw new Error(`Failed to fetch forecast data: ${response.statusText}`);
  }

  return response.json();
}

// Get weather icon URL from OpenWeatherMap
export function getWeatherIconUrl(iconCode: string): string {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}
