import { Module } from "@nitrostack/core";
import { FarmMapTools } from "./farmmap.tools.js";
import { FarmMapService } from "./farmmap.service.js";

@Module({
  name: "farmmap",
  description: "Farm Map Module",
  controllers: [FarmMapTools],
  providers: [FarmMapService]
})
export class FarmMapModule {}