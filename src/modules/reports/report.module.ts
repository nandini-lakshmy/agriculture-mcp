import { Module } from "@nitrostack/core";
import { ReportTools } from "./report.tools.js";
import { ReportService } from "./report.service.js";

@Module({
  name: "reports",
  description: "Farm Reports Module",
  controllers: [ReportTools],
  providers: [ReportService]
})
export class ReportModule {}