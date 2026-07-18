import API_BASE_URL from "./api";

export const getWeather = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/weather`);

    if (!response.ok) {
      throw new Error("Failed to fetch weather");
    }

    return await response.json();
  } catch (error) {
    console.error(error);

    // Dummy data
    return {
      temperature: "29°C",
      humidity: "72%",
      wind: "8 km/h",
      condition: "Sunny",
    };
  }
};