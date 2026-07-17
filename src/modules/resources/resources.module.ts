import { Module } from "@nitrostack/core";
import { ResourcesService } from "./resources.service.js";

@Module({
  name: "resources",
  description: "Knowledge base resources",
  providers: [ResourcesService],
  exports: [ResourcesService]
})
export class ResourcesModule {}