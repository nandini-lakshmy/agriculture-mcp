export interface Alert {
  id: number;
  type: "warning" | "info" | "critical";
  message: string;
  timestamp: string;
  source: string;
}