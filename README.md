
# Smart Agriculture MCP Agent

AI-powered MCP server that recommends crops and generates fertilizer/irrigation guidance from live soil and weather data.

## Open Innovation Track Justification
Our project is submitted under the Open Innovation track because agricultural resource management represents a unique intersection of biology, environmental science, and hyper-local data that does not fit neatly into the other five tracks. While it utilizes sensor data (similar to IoT), the end goal is not industrial automation, but providing actionable, biological guidance to farmers regarding crop health, soil pH balancing, and weather risk mitigation. 

## Core Features
* **Real-time Dashboard:** User interface displaying live widgets for Temperature, Humidity, Soil Moisture, pH, NPK, Weather, and Alerts.
* **Sensor Simulation:** Generates and processes live, simulated agricultural values for testing.
* **MCP Weather Tool:** Integrates with the OpenWeather API to pull hyper-local forecasts.
* **MCP Soil Tool:** Analyzes soil conditions against a custom crop database.
* **AI Knowledge Layer:** Uses specialized Prompts (Crop Advisor, Fertilizer Advisor, Risk Analysis) and Resources (Crop Database, Soil Info, Irrigation Guidelines) to generate final recommendations.
* * **Automated Alerting System:** Real-time hazard warnings triggered by sudden shifts in sensor data or extreme weather forecasts.
* **Farm Mapping & Reporting:** Generates comprehensive spatial layouts and historical operational reports for farm management.

## System Architecture & Data Flow
Our system operates on a seamless flow from the UI down to the MCP primitives:

1. **Dashboard:** Farmer inputs data / views widgets.
2. **Sensor Data:** Simulated values (Moisture, NPK, pH) are gathered.
3. **MCP Server:** Acts as the central brain and routing handler.
4. **Tools & APIs:** Weather Tool (OpenWeather API) and Soil Tool process the inputs.
5. **Resources & Prompts:** The AI cross-references inputs with the Crop Database and Fertilizer guidelines.
6. **Final Recommendation:** AI generates a specific agricultural action plan.
7. **Dashboard Output:** Results and Risk Alerts are displayed to the farmer.

## Future Hardware Integration
This software architecture is designed to eventually replace the simulated data with live feeds from physical ESP32 and Arduino microcontrollers connected to real-world soil sensors in the field.
#system architecture

## 🏗️ System Architecture

<p align="center">
  <img src="architecture.png" width="400">
</p>

---
## 🔄 System Workflow

<p align="center">
  <img src="workflow.png" width="300">
</p>

## ⚙️ Backend Module Architecture
Our MCP Server (`agrimcp-server v1.0.0`) is built using a highly scalable, feature-driven modular architecture leveraging the `@nitrostack/core` framework. The root application bootstraps the following independent modules:

* **`WeatherModule`**: Interfaces with external meteorological APIs.
* **`SensorModule`**: Manages the ingestion and validation of simulated hardware telemetry.
* **`AgricultureModule` & `ResourcesModule`**: Serve as the static knowledge base for crop and soil data.
* **`RecommendationModule`**: The core AI logic engine that routes contextual prompts to the LLM.
* **`AlertModule` & `ReportModule`**: Generates real-time hazard warnings and historical farm reports.
* **`FarmMapModule`**: Handles spatial data regarding crop placement and soil variations.

The system also includes a built-in `SystemHealthCheck` provider to ensure continuous uptime during critical farming operations.
## 📋 Documentation

- [Testing Checklist](docs/testing-checklist.md)

## 🛠️ Technology Stack

| Category | Technology |
|----------|------------|
| Frontend | React, TypeScript, Tailwind CSS |
| Backend | Node.js&Nitrostack |
| MCP Framework | Model Context Protocol (MCP) SDK |
| Weather Data | OpenWeather API |
| Data Source | Custom Crop & Soil Knowledge Base |
| Version Control | Git & GitHub |

## 👥 Team

| Member | Responsibility |
|---------|----------------|
| Haridev | Frontend Dashboard Development |
| Devadevan | MCP Server & Backend Development |
| Nandini | AI Resources & Prompt Engineering |
| Aditya | Documentation, Testing & Presentation |

## 🚀 Future Scope

Our long-term vision is to transform the Smart Agriculture MCP Agent into a nationwide AI-powered agricultural advisory platform. Future enhancements include:

- 🇮🇳 **Integration with the Government of India Agricultural Ecosystem:** Collaborate with the Ministry of Agriculture & Farmers Welfare and related government platforms to provide farmers with authenticated recommendations, scheme information, and region-specific agricultural advisories.

- 🌾 **Integration with Real IoT Devices:** Replace simulated sensor data with live data from IoT-based soil moisture, pH, NPK, and environmental sensors deployed in farms.

- 📱 **Mobile Application for Farmers:** Develop Android and iOS applications with multilingual support for easier accessibility in rural areas.

- 🛰️ **Satellite & Remote Sensing Integration:** Utilize satellite imagery and remote sensing data to monitor crop health, detect drought stress, and estimate yields.

- 🤖 **Advanced AI Advisory:** Expand the AI to provide pest and disease detection, crop rotation planning, seasonal forecasting, and personalized farming strategies.

- 🌐 **Offline & Low-Connectivity Support:** Enable the platform to function in rural areas with limited internet access through offline caching and periodic synchronization.

- 📊 **Farmer Analytics Dashboard:** Provide historical crop performance, weather trends, irrigation history, and productivity insights to support long-term decision-making.

- 🏛️ **Digital Agriculture Ecosystem:** Build a unified platform connecting farmers, agricultural experts, government agencies, research institutions, and agri-tech service providers for data-driven sustainable farming.
