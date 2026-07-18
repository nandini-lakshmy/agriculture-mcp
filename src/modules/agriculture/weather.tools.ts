import { ToolDecorator as Tool, ExecutionContext, z } from "@nitrostack/core";

import { WeatherService } from "../weather/weather.service";
import { RecommendationService } from "../recommendation/recommendation.service";

export class WeatherTools {
  private weatherService = new WeatherService();
  private recommendationService = new RecommendationService();

  @Tool({
    name: "get_weather",
    description: "Get live weather information for a location.",
    inputSchema: z.object({
      location: z.string().describe("City name")
    })
  })
  async getWeather(input: any, ctx: ExecutionContext) {
    ctx.logger.info(`Fetching weather for ${input.location}`);

    return await this.weatherService.getWeather(input.location);
  }

  @Tool({
    name: "crop_recommendation",
    description:
      "Analyze weather and soil conditions and generate crop recommendations.",
    inputSchema: z.object({
      crop: z.string().describe("Crop name")
    })
  })
  async cropRecommendation(input: any, ctx: ExecutionContext) {
    ctx.logger.info(`Generating recommendation for ${input.crop}`);

    return await this.recommendationService.generateRecommendation(
      input.crop
    );
  }
}