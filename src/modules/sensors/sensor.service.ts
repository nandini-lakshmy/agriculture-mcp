import { SensorData } from "./sensor.types.js";

export class SensorService {

  async getSensors(): Promise<SensorData[]> {

    return [

      {
        id: 1,
        plotId: "A",
        soilMoisture: 72,
        temperature: 28,
        humidity: 65,
        healthStatus: "Healthy",
        sensorStatus: "Online",
        lastUpdated: new Date().toISOString(),
        source: "Sensor Network"
      },

      {
        id: 2,
        plotId: "B",
        soilMoisture: 42,
        temperature: 31,
        humidity: 58,
        healthStatus: "Needs Irrigation",
        sensorStatus: "Online",
        lastUpdated: new Date().toISOString(),
        source: "Sensor Network"
      }

    ];

  }

}