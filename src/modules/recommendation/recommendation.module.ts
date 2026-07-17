import { Module } from "@nitrostack/core";
import { RecommendationTools } from "./recommendation.tools.js";
import { RecommendationService } from "./recommendation.service.js";

@Module({
  name: "recommendation",
  description: "AI Recommendation Engine",
  controllers: [RecommendationTools],
  providers: [RecommendationService]
})
export class RecommendationModule {}