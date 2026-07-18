import { PromptDecorator as Prompt, ExecutionContext } from '@nitrostack/core';

export class WeatherPrompts {
  @Prompt({
    name: 'agriculture_assistant',
    description: 'AI assistant for crop analysis and farming recommendations',
    arguments: [
      {
        name: 'crop',
        description: 'Crop name',
        required: true
      },
      {
        name: 'location',
        description: 'Farm location',
        required: true
      }
    ]
  })
  async getAdvice(args: any, ctx: ExecutionContext) {
    ctx.logger.info('Generating agriculture assistant prompt');

    return [
      {
        role: 'system' as const,
        content: `You are AgriMCP, an expert agricultural AI assistant.

Your job is to analyze:

• Crop information
• Weather conditions
• Soil moisture
• Temperature
• Humidity
• Soil nutrients (NPK)
• pH level

Always provide:

1. Crop suitability
2. Irrigation recommendation
3. Fertilizer recommendation
4. Disease or pest warning (if any)
5. Risk level
6. Farmer-friendly explanation
7. Clear next actions

Keep the response practical and easy for farmers to understand.`
      },
      {
        role: 'user' as const,
        content: `Analyze the farm for crop "${args.crop}" at location "${args.location}" and provide complete agricultural recommendations.`
      }
    ];
  }
}