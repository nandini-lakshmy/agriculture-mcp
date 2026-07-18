import API_BASE_URL from "./api";

export const getSensorData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/sensors`);

    if (!response.ok) {
      throw new Error("Failed to fetch sensor data");
    }

    return await response.json();
  } catch (error) {
    console.error(error);

    // Dummy sensor data
    return [
      {
        id: 1,
        name: "Soil Moisture",
        value: "34%",
        status: "Normal",
      },
      {
        id: 2,
        name: "Temperature",
        value: "29°C",
        status: "Good",
      },
      {
        id: 3,
        name: "Humidity",
        value: "71%",
        status: "Good",
      },
    ];
  }
};