import { Module } from '@nitrostack/core';
import { WeatherTools } from './weather.tools.js';

@Module({
  name: 'weather',
  description: 'Weather services for AgriMCP',
  controllers: [WeatherTools]
})
export class WeatherModule {}