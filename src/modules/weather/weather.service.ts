import axios from "axios";
import { WeatherData } from "./weather.types.js";

export class WeatherService {
  private readonly apiKey = process.env.OPENWEATHER_API_KEY;
  private readonly baseUrl = "https://api.openweathermap.org/data/2.5/weather";

  async getWeather(city: string): Promise<WeatherData> {
    if (!this.apiKey) {
      throw new Error("OPENWEATHER_API_KEY is missing in .env");
    }

    const response = await axios.get(this.baseUrl, {
      params: {
        q: city,
        appid: this.apiKey,
        units: "metric"
      }
    });

    const data = response.data;

    return {
      city: data.name,
      country: data.sys.country,

      temperature: data.main.temp,
      feelsLike: data.main.feels_like,

      humidity: data.main.humidity,
      pressure: data.main.pressure,

      windSpeed: data.wind.speed,

      description: data.weather[0].description,
      condition: data.weather[0].main
    };
  }
}