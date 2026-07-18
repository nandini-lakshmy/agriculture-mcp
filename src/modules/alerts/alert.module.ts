import { Module } from "@nitrostack/core";
import { AlertTools } from "./alert.tools.js";
import { AlertService } from "./alert.service.js";

@Module({
  name: "alerts",
  description: "Farm Alerts Module",
  controllers: [AlertTools],
  providers: [AlertService]
})
export class AlertModule {}