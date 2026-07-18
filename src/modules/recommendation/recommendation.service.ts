import * as fs from "fs";
import * as path from "path";

import { WeatherService } from "../weather/weather.service.js";

export class RecommendationService {
  private cropDatabase: Record<string, any>;
  private fertilizerGuide: any;
  private soilHealth: any;
  private recommendationRules: any;

  private weatherService = new WeatherService();

  constructor() {
    const cropPath = path.join(
      process.cwd(),
      "src",
      "resources",
      "crop_database.json"
    );

    const fertilizerPath = path.join(
      process.cwd(),
      "src",
      "resources",
      "fertilizer_guide.json"
    );

    const soilHealthPath = path.join(
      process.cwd(),
      "src",
      "resources",
      "soil_health.json"
    );

    const rulesPath = path.join(
      process.cwd(),
      "src",
      "resources",
      "recommendation_rules.json"
    );

    this.cropDatabase = JSON.parse(
      fs.readFileSync(cropPath, "utf8")
    );

    this.fertilizerGuide = JSON.parse(
      fs.readFileSync(fertilizerPath, "utf8")
    );

    this.soilHealth = JSON.parse(
      fs.readFileSync(soilHealthPath, "utf8")
    );

    this.recommendationRules = JSON.parse(
      fs.readFileSync(rulesPath, "utf8")
    );
  }

  getCrop(cropName: string) {
    return this.cropDatabase[cropName.toLowerCase()] ?? null;
  }

  getFertilizers() {
    return this.fertilizerGuide;
  }

  getSoilHealth() {
    return this.soilHealth;
  }

  getRules() {
    return this.recommendationRules;
  }

  /**
   * Simulated IoT sensor
   */
  /**
 * Simulated IoT Sensor
 */
private getSensorData(weather: any) {

  const temperature =
    Math.round(
      weather.temperature +
      (Math.random() * 4 - 2)
    );

  const humidity =
    Math.max(
      40,
      Math.min(
        100,
        Math.round(
          weather.humidity +
          (Math.random() * 10 - 5)
        )
      )
    );

  let soilMoisture =
    humidity - 15 +
    Math.floor(Math.random() * 10);

  soilMoisture = Math.max(
    30,
    Math.min(95, soilMoisture)
  );

  return {

    soilMoisture,

    temperature,

    humidity,

    healthStatus: "Healthy",

    sensorStatus: "Online"
  };
}

  /**
   * Moisture requirement
   */
  private getMoistureThreshold(level: string) {
    switch (level?.toLowerCase()) {
      case "high":
        return 65;

      case "medium":
        return 50;

      case "low":
        return 35;

      default:
        return 50;
    }
  }

  /**
   * Weather Intelligence
   */
  private buildWeatherAdvice(description: string) {
    const desc = description.toLowerCase();

    if (desc.includes("rain")) {
      return {
        condition: "Rain",
        advice:
          "Rain is expected. Avoid unnecessary irrigation."
      };
    }

    if (
      desc.includes("cloud") ||
      desc.includes("overcast")
    ) {
      return {
        condition: "Cloudy",
        advice:
          "Cloudy weather expected. Monitor soil moisture before irrigating."
      };
    }

    if (
      desc.includes("clear") ||
      desc.includes("sun")
    ) {
      return {
        condition: "Sunny",
        advice:
          "Sunny conditions expected. Irrigation may be required."
      };
    }

    return {
      condition: "Unknown",
      advice:
        "Monitor local weather before irrigation."
    };
  }

  /**
 * Crop suitability score
 */
private calculateSuitability(
  crop: any,
  sensor: any,
  weather: any
) {
  const moistureLimit =
    this.getMoistureThreshold(
      crop.water_requirement
    );

  let temperatureScore = 25;
  let moistureScore = 25;
  let humidityScore = 25;
  let weatherScore = 25;

  // --------------------
  // Temperature
  // --------------------

  if (
    sensor.temperature <
    crop.temperature_celsius.min
  ) {
    const diff =
      crop.temperature_celsius.min -
      sensor.temperature;

    temperatureScore -= Math.min(
      20,
      diff * 2
    );
  }

  if (
    sensor.temperature >
    crop.temperature_celsius.max
  ) {
    const diff =
      sensor.temperature -
      crop.temperature_celsius.max;

    temperatureScore -= Math.min(
      20,
      diff * 2
    );
  }

  // --------------------
  // Soil Moisture
  // --------------------

  if (
    sensor.soilMoisture <
    moistureLimit
  ) {
    const diff =
      moistureLimit -
      sensor.soilMoisture;

    moistureScore -= Math.min(
      20,
      diff
    );
  }

  // --------------------
  // Humidity
  // --------------------

  if (
    sensor.humidity > 80
  ) {
    humidityScore -= Math.min(
      15,
      sensor.humidity - 80
    );
  }

  // --------------------
  // Weather
  // --------------------

  const desc =
    weather.description.toLowerCase();

  if (
    desc.includes("storm")
  ) {
    weatherScore = 10;
  }
  else if (
    desc.includes("rain")
  ) {
    weatherScore = 18;
  }
  else if (
    desc.includes("cloud")
  ) {
    weatherScore = 22;
  }

  temperatureScore = Math.max(
    0,
    temperatureScore
  );

  moistureScore = Math.max(
    0,
    moistureScore
  );

  humidityScore = Math.max(
    0,
    humidityScore
  );

  weatherScore = Math.max(
    0,
    weatherScore
  );

  const total =
    temperatureScore +
    moistureScore +
    humidityScore +
    weatherScore;

  let level = "Excellent";

  if (total < 90)
    level = "Good";

  if (total < 75)
    level = "Average";

  if (total < 60)
    level = "Poor";

  return {
    score: Math.round(total),

    level,

    breakdown: {
      temperatureScore:
        Math.round(
          temperatureScore
        ),

      moistureScore:
        Math.round(
          moistureScore
        ),

      humidityScore:
        Math.round(
          humidityScore
        ),

      weatherScore:
        Math.round(
          weatherScore
        ),

      total:
        Math.round(total)
    }
  };
}


  /**
   * Priority
   */
  private calculatePriority(score: number) {
    if (score >= 90) return "Low";

    if (score >= 70) return "Medium";

    return "High";
  }

  /**
   * Confidence
   */
  private calculateConfidence(score: number) {
    return Math.max(
      60,
      Math.min(98, score)
    );
  } 

    /**
   * Disease Prediction
   */
  private predictDiseaseRisk(
    crop: any,
    sensor: any
  ) {
    let risk = "Low";
    let confidence = 60;
    let reason =
      "Environmental conditions are currently favourable.";

    if (
      sensor.humidity > 80 &&
      sensor.temperature > 28
    ) {
      risk = "High";
      confidence = 92;
      reason =
        "High humidity and warm temperature favour fungal disease development.";
    } else if (
      sensor.humidity > 70
    ) {
      risk = "Medium";
      confidence = 78;
      reason =
        "Elevated humidity may increase disease occurrence.";
    }

    return {
      risk,
      confidence,
      reason,
      possibleDiseases:
        crop.common_diseases ?? []
    };
  }

  /**
   * Farm Health
   */
  private calculateFarmHealth(
    suitabilityScore: number,
    diseaseRisk: string
  ) {
    let score = suitabilityScore;

    if (diseaseRisk === "Medium") {
      score -= 5;
    }

    if (diseaseRisk === "High") {
      score -= 10;
    }

    if (score < 0) score = 0;

    let status = "Healthy";

    if (score < 85)
      status = "Needs Attention";

    if (score < 65)
      status = "Critical";

    return {
      score,
      status
    };
  }

  /**
   * Fertilizer Intelligence
   */
  private buildFertilizerRecommendations(
    fertilizers: any[]
  ) {
    return fertilizers.map((f) => ({
      name: f.fertilizer_name,
      type: f.type,
      nutrients: f.nutrient_content,
      bestStage:
        f.best_application_stage,
      benefits: f.benefits,
      precautions:
        f.precautions,
      organicAlternative:
        f.organic_alternative
    }));
  }

  /**
 * Smart Irrigation Advice
 */
private buildIrrigationAdvice(
  moisture: number,
  limit: number,
  irrigation: string
) {

  const deficit = limit - moisture;

  if (deficit <= 0) {
    return {
      recommendation:
        `Continue ${irrigation}. Soil moisture is optimal.`,
      increase: "0%",
      urgency: "Low"
    };
  }

  if (deficit <= 5) {
    return {
      recommendation:
        `Slightly increase irrigation using ${irrigation}.`,
      increase: "5%",
      urgency: "Low"
    };
  }

  if (deficit <= 15) {
    return {
      recommendation:
        `Increase irrigation using ${irrigation}.`,
      increase: "10-15%",
      urgency: "Medium"
    };
  }

  return {
    recommendation:
      `Immediate irrigation is recommended using ${irrigation}.`,
    increase: "20-30%",
    urgency: "High"
  };
}

/**
 * Smart Fertilizer Advice
 */
private buildFertilizerAdvice(
  fertilizers: any[],
  sensor: any,
  weather: any
) {

  return fertilizers.map((f) => {

    let recommendation =
      "Suitable for application.";

    const desc =
      weather.description.toLowerCase();

    if (
      sensor.soilMoisture < 50
    ) {
      recommendation =
        "Apply after irrigation for better nutrient absorption.";
    }

    if (
      desc.includes("rain")
    ) {
      recommendation =
        "Delay application until rainfall ends.";
    }

    if (
      sensor.humidity > 85
    ) {
      recommendation =
        "Avoid foliar spraying during high humidity.";
    }

    return {

      name: f.name,

      type: f.type,

      recommendation,

      bestStage:
        f.bestStage,

      nutrients:
        f.nutrients,

      benefits:
        f.benefits
    };
  });

}


  /**
 * AI Summary
 */
private buildAISummary(
  crop: any,
  priority: string,
  suitability: any,
  diseaseRisk: any,
  irrigation: any
) {

  let summary =
    `${crop.crop_name} currently has a suitability score of ${suitability.score}/100. `;

  summary +=
    `Overall crop health is ${suitability.level.toLowerCase()}. `;

  if (
    priority === "High"
  ) {
    summary +=
      "Immediate corrective actions are recommended. ";
  }
  else if (
    priority === "Medium"
  ) {
    summary +=
      "Regular monitoring is recommended. ";
  }

  summary +=
    irrigation.recommendation + " ";

  if (
    diseaseRisk.risk !== "Low"
  ) {
    summary +=
      `Disease risk is ${diseaseRisk.risk.toLowerCase()}. `;
  }

  summary +=
    "Continue monitoring weather and field conditions.";

  return summary;
}


  /**
   * Risk Analysis
   */
  private buildRisks(
    sensor: any,
    moistureLimit: number
  ) {
    const risks: any[] = [];

    if (
      sensor.soilMoisture <
      moistureLimit
    ) {
      risks.push({
        name: "Low Soil Moisture",
        severity: "Medium"
      });
    }

    if (
      sensor.humidity > 80
    ) {
      risks.push({
        name: "High Humidity",
        severity: "High"
      });
    }

    if (
      sensor.temperature > 35
    ) {
      risks.push({
        name: "High Temperature",
        severity: "High"
      });
    }

    return risks;
  }

  /**
   * Recommended Actions
   */
  private buildNextActions(
    sensor: any,
    moistureLimit: number,
    diseaseRisk: any
  ) {
    const actions: string[] = [];

    if (
      sensor.soilMoisture <
      moistureLimit
    ) {
      actions.push(
        "Increase irrigation"
      );
    }

    if (
      diseaseRisk.risk === "High"
    ) {
      actions.push(
        "Inspect crops for fungal infection"
      );
    }

    actions.push(
      "Apply fertilizer at the recommended growth stage"
    );

    actions.push(
      "Inspect the field within the next 48 hours"
    );

    return actions;
  }

  /**
   * Generate AI Recommendation
   */
async generateRecommendation(cropName: string) {
  const cropKey = cropName.toLowerCase(); 

  const crop =
    this.cropDatabase[cropKey];

  if (!crop) {
    return null;
  }

  const rules =
    this.recommendationRules
      .crop_rules?.[cropKey];

  const defaultRules = {
    preferred_soil:
      crop.soil_type ?? [],
    recommended_irrigation:
      crop.best_irrigation ??
      "Standard Irrigation",
    primary_fertilizers:
      crop.recommended_fertilizers ??
      []
  };

  const activeRules =
    rules ?? defaultRules;

  // Live Weather

  const weather =
    await this.weatherService.getWeather(
      "Kochi"
    );

  // Simulated Sensors

  const sensor =
  this.getSensorData(weather);

  // Weather Intelligence

  const weatherInfo =
    this.buildWeatherAdvice(
      weather.description
    );

  // Moisture Requirement

  const moistureLimit =
    this.getMoistureThreshold(
      crop.water_requirement
    );

  // Fertilizer Mapping

  const fertilizers = [];

  for (const fertilizer of activeRules.primary_fertilizers) {
    const key = fertilizer
      .toLowerCase()
      .replace(/\s+/g, "_")
      .replace(/[()]/g, "");

    if (this.fertilizerGuide[key]) {
      fertilizers.push(
        this.fertilizerGuide[key]
      );
    }
  }

  const fertilizerAdvice =
    this.buildFertilizerRecommendations(
      fertilizers
    );

  const smartFertilizers =
  this.buildFertilizerAdvice(
    fertilizerAdvice,
    sensor,
    weather
  );

  // AI Analysis

  const suitability =
    this.calculateSuitability(
      crop,
      sensor,
      weather
    );

  const diseaseRisk =
    this.predictDiseaseRisk(
      crop,
      sensor
    );

  const priority =
    this.calculatePriority(
      suitability.score
    );

  const confidence =
    this.calculateConfidence(
      suitability.score
    );

  const farmHealth =
    this.calculateFarmHealth(
      suitability.score,
      diseaseRisk.risk
    );

  const irrigationAdvice =
  this.buildIrrigationAdvice(
      sensor.soilMoisture,
      moistureLimit,
      activeRules.recommended_irrigation
    );

  const aiSummary =
  this.buildAISummary(
    crop,
    priority,
    suitability,
    diseaseRisk,
    irrigationAdvice
  );

  const risks =
    this.buildRisks(
      sensor,
      moistureLimit
    );

  const nextActions =
    this.buildNextActions(
      sensor,
      moistureLimit,
      diseaseRisk
    );

  // Explainable AI

  const reasons: string[] = [];

  if (
    sensor.soilMoisture <
    moistureLimit
  ) {
    reasons.push(
      `${crop.crop_name} requires ${crop.water_requirement.toLowerCase()} water availability.`
    );

    reasons.push(
      `Current soil moisture is ${sensor.soilMoisture}% while the recommended minimum is ${moistureLimit}%.`
    );
  } else {
    reasons.push(
      `Soil moisture is within the recommended range for ${crop.crop_name}.`
    );
  }

  if (
    sensor.temperature <
      crop.temperature_celsius.min ||
    sensor.temperature >
      crop.temperature_celsius.max
  ) {
    reasons.push(
      `Current temperature (${sensor.temperature}°C) is outside the ideal range (${crop.temperature_celsius.min}-${crop.temperature_celsius.max}°C).`
    );
  } else {
    reasons.push(
      "Temperature is within the ideal range."
    );
  }

  if (
    sensor.humidity > 80
  ) {
    reasons.push(
      `Humidity (${sensor.humidity}%) is high and may increase disease occurrence.`
    );
  } else {
    reasons.push(
      "Humidity is within acceptable limits."
    );
  }

  reasons.push(
    weatherInfo.advice
  );

  let message =
    `${crop.crop_name} is growing under acceptable field conditions.`;

  if (
    priority === "High"
  ) {
    message =
      `${crop.crop_name} requires immediate attention.`;
  } else if (
    priority === "Medium"
  ) {
    message =
      `${crop.crop_name} requires regular monitoring.`;
  }
    return {
    plotId: "A",

    cropName: crop.crop_name,

    scientificName:
      crop.scientific_name,

    description:
      crop.description,

    category:
      crop.category,

    recommendedCrop:
      crop.crop_name,

    priority,

    confidence,

    message,

    suitabilityScore:
      suitability.score,

    suitabilityLevel:
      suitability.level,

    suitabilityBreakdown:
      suitability.breakdown,

    sensor,

    weather,

    weatherAdvice: {
  condition:
    weatherInfo.condition,

  recommendation:
    weatherInfo.advice,

  currentWeather:
    weather.description,

  temperature:
    weather.temperature,

  humidity:
    weather.humidity
},

irrigationAdvice: {

  method:
    activeRules.recommended_irrigation,

  recommendation:
    irrigationAdvice.recommendation,

  increase:
    irrigationAdvice.increase,

  urgency:
    irrigationAdvice.urgency
},
    recommendedSoils:
      activeRules.preferred_soil,

    irrigation:
      activeRules.recommended_irrigation,

    fertilizers:
    smartFertilizers,

    diseaseRisk,

    farmHealth,

    risks,

    nextActions,

    aiSummary,

    reasons,

    npkRequirement:
      crop.npk_requirement,

    waterRequirement:
      crop.water_requirement,

    harvestTimeDays:
      crop.harvest_time_days,

    expectedYield:
      crop.expected_yield,

    farmerTips:
      crop.common_problems,

    commonDiseases:
      crop.common_diseases,

    commonPests:
      crop.common_pests,

    suitableStates:
      crop.suitable_states,

    overallRecommendation: {

  status:
    priority === "High"
      ? "Needs Attention"
      : priority === "Medium"
      ? "Monitor"
      : "Healthy",

  emoji:
    priority === "High"
      ? "🟠"
      : priority === "Medium"
      ? "🟡"
      : "🟢",

  score:
    farmHealth.score,

  reason:
    reasons[0]
},

    decisionSummary: {
      moisture:
        sensor.soilMoisture <
        moistureLimit
          ? "Below Recommended"
          : "Optimal",

      temperature:
        sensor.temperature <
          crop.temperature_celsius.min ||
        sensor.temperature >
          crop.temperature_celsius.max
          ? "Outside Ideal Range"
          : "Ideal",

      humidity:
        sensor.humidity > 80
          ? "High"
          : "Normal",

      weather:
        weatherInfo.condition,

      finalDecision:
        priority,

      confidence
    },

    source:
      "AgriMCP AI Engine v3"
  };
}
}