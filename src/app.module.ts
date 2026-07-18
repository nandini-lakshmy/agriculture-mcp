import { McpApp, Module, ConfigModule } from '@nitrostack/core';
import { AgricultureModule } from './modules/agriculture/agriculture.module.js';
import { SystemHealthCheck } from './health/system.health.js';
import { WeatherModule } from "./modules/weather/weather.module.js";
import { ResourcesModule } from "./modules/resources/resources.module.js";
import { RecommendationModule } from "./modules/recommendation/recommendation.module.js";
import { SensorModule } from "./modules/sensors/sensor.module.js";
import { AlertModule } from "./modules/alerts/alert.module.js";
import { ReportModule } from "./modules/reports/report.module.js";
import { FarmMapModule } from "./modules/farmmap/farmmap.module.js";

/**
 * Root Application Module
 * 
 * This is the main module that bootstraps the MCP server.
 * It registers all feature modules and health checks.
 */
@McpApp({
  module: AppModule,
  server: {
    name: 'agrimcp-server',
    version: '1.0.0'
  },
  logging: {
    level: 'info'
  }
})
@Module({
  name: 'app',
  description: 'Root application module',
  imports: [
    ConfigModule.forRoot(),
    WeatherModule,
    AgricultureModule,
    ResourcesModule,
    RecommendationModule,
    SensorModule,
    AlertModule,
    ReportModule,
    FarmMapModule
  ],
  providers: [
    // Health Checks
    SystemHealthCheck,
  ]
})
export class AppModule {}

