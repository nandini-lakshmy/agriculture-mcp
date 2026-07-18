export interface Plot {

  plotId: string;
  cropName: string;

  marker: {
    latitude: number;
    longitude: number;
  };

  soilMoisture: number;
  temperature: number;
  humidity: number;

  healthStatus: string;
  sensorStatus: string;

}

export interface FarmMap {

  fieldId: string;

  boundary: number[][];

  plots: Plot[];

  source: string;

}