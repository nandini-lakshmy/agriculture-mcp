import {
  ToolDecorator as Tool,
  ExecutionContext,
  z
} from "@nitrostack/core";

import { WeatherService } from "./weather.service.js";

export class WeatherTools {
  private weatherService = new WeatherService();

  @Tool({
    name: "get_weather",
    description: "Get current weather information for a city.",
    inputSchema: z.object({
      city: z.string().describe("City name")
    })
  })
  async getWeather(
    input: { city: string },
    ctx: ExecutionContext
  ) {
    ctx.logger.info(`Fetching weather for ${input.city}`);

    const weather = await this.weatherService.getWeather(input.city);

    return weather;
  }
}