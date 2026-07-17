import { Module } from "@nitrostack/core";
import { SensorTools } from "./sensor.tools.js";
import { SensorService } from "./sensor.service.js";

@Module({
  name: "sensors",
  description: "Farm Sensor Module",
  controllers: [SensorTools],
  providers: [SensorService]
})
export class SensorModule {}