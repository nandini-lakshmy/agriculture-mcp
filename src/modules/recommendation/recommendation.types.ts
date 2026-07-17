export interface Recommendation {
  plotId: string;
  cropName: string;
  priority: string;
  message: string;
  confidence: number;
  reasons: string[];
  source: string;
}