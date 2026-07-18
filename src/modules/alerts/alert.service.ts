import { Alert } from "./alert.types.js";

export class AlertService {

  async getAlerts(): Promise<Alert[]> {

    return [

      {
        id: 1,
        type: "warning",
        message: "Low soil moisture detected in Plot B.",
        timestamp: new Date().toISOString(),
        source: "AgriMCP AI Engine"
      },

      {
        id: 2,
        type: "info",
        message: "Rain expected within the next 24 hours.",
        timestamp: new Date().toISOString(),
        source: "OpenWeather"
      }

    ];

  }

}