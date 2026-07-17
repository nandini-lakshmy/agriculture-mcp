import * as fs from "fs";
import * as path from "path";

export class RecommendationService {
  private cropDatabase: Record<string, any>;
  private fertilizerGuide: any;
  private soilHealth: any;
  private recommendationRules: any;

  constructor() {
    // Crop Database
    const cropPath = path.join(
      process.cwd(),
      "src",
      "resources",
      "crop_database.json"
    );

    // Fertilizer Guide
    const fertilizerPath = path.join(
      process.cwd(),
      "src",
      "resources",
      "fertilizer_guide.json"
    );

    // Soil Health
    const soilHealthPath = path.join(
      process.cwd(),
      "src",
      "resources",
      "soil_health.json"
    );

    // Recommendation Rules
    const rulesPath = path.join(
      process.cwd(),
      "src",
      "resources",
      "recommendation_rules.json"
    );

    // Load JSON files
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

  /**
   * Get crop information
   */
  getCrop(cropName: string) {
    return this.cropDatabase[cropName.toLowerCase()] || null;
  }

  /**
   * Get fertilizer guide
   */
  getFertilizers() {
    return this.fertilizerGuide;
  }

  /**
   * Get soil health information
   */
  getSoilHealth() {
    return this.soilHealth;
  }

  /**
   * Get recommendation rules
   */
  getRules() {
    return this.recommendationRules;
  }

  /**
   * Generate AI recommendation
   */
  generateRecommendation(cropName: string) {
    const cropKey = cropName.toLowerCase();

    const crop = this.cropDatabase[cropKey];

    const rules =
      this.recommendationRules.crop_rules?.[cropKey];

    if (!crop || !rules) {
      return null;
    }

    const fertilizers = [];

    for (const fertilizer of rules.primary_fertilizers) {
      const key = fertilizer
        .toLowerCase()
        .replace(/\s+/g, "_");

      if (this.fertilizerGuide[key]) {
        fertilizers.push(this.fertilizerGuide[key]);
      }
    }

    return {
      cropName: crop.crop_name,
      scientificName: crop.scientific_name,
      description: crop.description,
      category: crop.category,

      recommendedSoils: rules.preferred_soil,

      irrigation: rules.recommended_irrigation,

      fertilizers,

      source: "AgriMCP AI Engine"
    };
  }
}