import {
  ToolDecorator as Tool,
  ExecutionContext,
  z
} from "@nitrostack/core";

import { RecommendationService } from "./recommendation.service.js";

export class RecommendationTools {
  private recommendationService = new RecommendationService();

  @Tool({
    name: "get_crop_info",
    description: "Get detailed information about a crop.",
    inputSchema: z.object({
      crop: z.string().describe("Crop name")
    })
  })
  async getCropInfo(
    input: { crop: string },
    ctx: ExecutionContext
  ) {
    ctx.logger.info(
      `Fetching crop information for ${input.crop}`
    );

    const crop =
      this.recommendationService.getCrop(input.crop);

    if (!crop) {
      return {
        content: [
          {
            type: "text",
            text: `Crop '${input.crop}' not found.`
          }
        ]
      };
    }

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(crop, null, 2)
        }
      ]
    };
  }

  @Tool({
    name: "generate_recommendation",
    description: "Generate farming recommendations for a crop.",
    inputSchema: z.object({
      crop: z.string().describe("Crop name")
    })
  })
  async generateRecommendation(
    input: { crop: string },
    ctx: ExecutionContext
  ) {
    ctx.logger.info(
      `Generating recommendation for ${input.crop}`
    );

    const recommendation =
      await this.recommendationService.generateRecommendation(
        input.crop
      );

    if (!recommendation) {
      return {
        content: [
          {
            type: "text",
            text: `Crop '${input.crop}' not found.`
          }
        ]
      };
    }

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(
            recommendation,
            null,
            2
          )
        }
      ]
    };
  }
}