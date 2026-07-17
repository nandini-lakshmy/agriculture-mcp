export interface WeatherData {
  city: string;
  country: string;

  temperature: number;
  feelsLike: number;

  humidity: number;
  pressure: number;

  windSpeed: number;

  description: string;
  condition: string;
}