import { Report } from "./report.types.js";

export class ReportService {

  async getReports(): Promise<Report[]> {

    return [

      {
        id: 1,
        title: "Weekly Crop Report",
        date: "2026-07-17",
        summary: "Overall crop health is good. Plot B requires irrigation.",
        source: "AgriMCP AI Engine"
      },

      {
        id: 2,
        title: "Weather Impact Report",
        date: "2026-07-17",
        summary: "Cloudy weather expected with moderate humidity.",
        source: "OpenWeather"
      }

    ];

  }

}