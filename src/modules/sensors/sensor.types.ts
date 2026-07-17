export interface SensorData {
  id: number;
  plotId: string;
 soilMoisture: number;
  temperature: number;
  humidity: number;
  healthStatus: string;
  sensorStatus: string;
  lastUpdated: string;
  source: string;
}