import { Module } from "@nitrostack/core";
import { WeatherTools } from "./weather.tools.js";
import { WeatherService } from "./weather.service.js";

@Module({
  name: "weather",
  description: "Weather services for AgriMCP",
  controllers: [WeatherTools],
  providers: [WeatherService]
})
export class WeatherModule {}