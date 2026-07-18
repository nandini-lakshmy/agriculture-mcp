import "./AIAssistant.css";
import { useState } from "react";
import { FaRobot, FaPaperPlane } from "react-icons/fa";
import ChatMessage from "./ChatMessage";
import Loader from "./Loader";

export default function AIAssistant() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hello! I am your AI Farm Assistant. Ask me anything about weather, irrigation, crops, pests, or soil health.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const getAIResponse = (question) => {
    const text = question.toLowerCase();

    if (text.includes("weather")) {
      return "🌦 Today's forecast is Sunny, 31°C. No rainfall expected. A good day for irrigation.";
    }

    if (text.includes("water") || text.includes("irrigation")) {
      return "💧 Soil moisture is slightly low (68%). It is recommended to irrigate your crops this evening.";
    }

    if (text.includes("soil")) {
      return "🌱 Soil moisture is normal and soil temperature is 27°C. Current conditions are suitable for healthy crop growth.";
    }

    if (text.includes("crop")) {
      return "🌾 Crop Health Score: 92%. No major diseases detected. Continue regular monitoring.";
    }

    if (text.includes("pest") || text.includes("insect")) {
      return "🐛 No pest activity detected from recent sensor data. Continue monitoring during nighttime.";
    }

    if (text.includes("sensor")) {
      return "📡 All 8 IoT sensors are online and transmitting data successfully.";
    }

    if (text.includes("alert")) {
      return "🚨 Two active alerts: Low soil moisture and Water tank level below 30%.";
    }

    if (text.includes("fertilizer")) {
      return "🌿 Nitrogen-rich fertilizer is recommended this week based on crop growth.";
    }

    return "🤖 I understand your question. Backend integration is under development. This response is generated for the project demonstration.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    const question = input;

    setInput("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: getAIResponse(question),
        },
      ]);
    }, 1000);
  };

  const quickQuestion = (question) => {
    setInput(question);
  };

  return (
    <div className="assistantCard">
      <div className="assistantHeader">
        <FaRobot />
        <h3>AI Farm Assistant</h3>
      </div>

      <div className="chatWindow">
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            sender={msg.sender}
            text={msg.text}
          />
        ))}

        {loading && <Loader />}
      </div>

      <div className="suggestions">
        <button onClick={() => quickQuestion("Weather")}>
          🌦 Weather
        </button>

        <button onClick={() => quickQuestion("Crop Health")}>
          🌾 Crop Health
        </button>

        <button onClick={() => quickQuestion("Soil Status")}>
          🌱 Soil
        </button>

        <button onClick={() => quickQuestion("Irrigation")}>
          💧 Irrigation
        </button>

        <button onClick={() => quickQuestion("Sensors")}>
          📡 Sensors
        </button>

        <button onClick={() => quickQuestion("Alerts")}>
          🚨 Alerts
        </button>
      </div>

      <div className="chatInput">
        <input
          type="text"
          placeholder="Ask anything about your farm..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
        />

        <button onClick={sendMessage}>
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
}