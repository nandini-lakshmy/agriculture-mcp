import { FarmMap } from "./farmmap.types.js";

export class FarmMapService {

  async getFarmMap(): Promise<FarmMap> {

    return {

      fieldId: "Field-1",

      boundary: [
        [9.0886, 76.4917],
        [9.0888, 76.4923],
        [9.0881, 76.4925],
        [9.0880, 76.4918]
      ],

      plots: [

        {
          plotId: "A",

          cropName: "Rice",

          marker: {
            latitude: 9.08865,
            longitude: 76.49210
          },

          soilMoisture: 72,
          temperature: 28,
          humidity: 65,

          healthStatus: "Healthy",
          sensorStatus: "Online"
        },

        {
          plotId: "B",

          cropName: "Wheat",

          marker: {
            latitude: 9.08825,
            longitude: 76.49220
          },

          soilMoisture: 42,
          temperature: 31,
          humidity: 58,

          healthStatus: "Needs Irrigation",
          sensorStatus: "Online"
        }

      ],

      source: "AgriMCP"

    };

  }

}