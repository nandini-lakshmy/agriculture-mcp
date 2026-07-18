import {
  ToolDecorator as Tool,
  ExecutionContext,
  z
} from "@nitrostack/core";

import { FarmMapService } from "./farmmap.service.js";

export class FarmMapTools {

  private farmMapService = new FarmMapService();

  @Tool({
    name: "get_farm_map",
    description: "Retrieve farm boundary and plot information.",
    inputSchema: z.object({})
  })
  async getFarmMap(
    input: {},
    ctx: ExecutionContext
  ) {

    ctx.logger.info("Fetching farm map");

    return await this.farmMapService.getFarmMap();

  }

}