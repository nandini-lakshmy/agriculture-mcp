import {
  ToolDecorator as Tool,
  ExecutionContext,
  z
} from "@nitrostack/core";

import { SensorService } from "./sensor.service.js";

export class SensorTools {

  private sensorService = new SensorService();

  @Tool({
    name: "get_sensors",
    description: "Get all farm sensor readings.",
    inputSchema: z.object({})
  })
  async getSensors(
    input: {},
    ctx: ExecutionContext
  ) {

    ctx.logger.info("Fetching sensor data");

    return await this.sensorService.getSensors();

  }
}