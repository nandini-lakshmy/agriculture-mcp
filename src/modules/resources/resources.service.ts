import fs from "fs";
import path from "path";

export class ResourcesService {

    private load(file: string) {
        const filePath = path.join(process.cwd(), "src", "resources", file);
        return JSON.parse(fs.readFileSync(filePath, "utf8"));
    }

    getCropDatabase() {
        return this.load("crop_database.json");
    }

    getFertilizerGuide() {
        return this.load("fertilizer_guide.json");
    }

    getSoilHealth() {
        return this.load("soil_health.json");
    }

    getRecommendationRules() {
        return this.load("recommendation_rules.json");
    }

}