import {
  ToolDecorator as Tool,
  ExecutionContext,
  z
} from "@nitrostack/core";

import { AlertService } from "./alert.service.js";

export class AlertTools {

  private alertService = new AlertService();

  @Tool({
    name: "get_alerts",
    description: "Retrieve current farm alerts.",
    inputSchema: z.object({})
  })
  async getAlerts(
    input: {},
    ctx: ExecutionContext
  ) {

    ctx.logger.info("Fetching alerts");

    return await this.alertService.getAlerts();

  }

}