import {
  ToolDecorator as Tool,
  ExecutionContext,
  z
} from "@nitrostack/core";

import { ReportService } from "./report.service.js";

export class ReportTools {

  private reportService = new ReportService();

  @Tool({
    name: "get_reports",
    description: "Retrieve farm reports.",
    inputSchema: z.object({})
  })
  async getReports(
    input: {},
    ctx: ExecutionContext
  ) {

    ctx.logger.info("Fetching reports");

    return await this.reportService.getReports();

  }

}