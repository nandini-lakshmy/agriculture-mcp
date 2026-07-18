import { ResourceDecorator as Resource, ExecutionContext } from "@nitrostack/core";

export class WeatherResources {
  @Resource({
    uri: "weather://current",
    name: "Current Weather",
    description: "Provides the latest weather information for agricultural analysis.",
    mimeType: "application/json"
  })
  async getCurrentWeather(uri: string, ctx: ExecutionContext) {
    ctx.logger.info("Providing weather resource");

    return {
      contents: [
        {
          uri,
          mimeType: "application/json",
          text: JSON.stringify(
            {
              description:
                "Live weather data is retrieved through the get_weather tool.",
              fields: [
                "temperature",
                "humidity",
                "rainfall",
                "windSpeed",
                "condition"
              ]
            },
            null,
            2
          )
        }
      ]
    };
  }
}