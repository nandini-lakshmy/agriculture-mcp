import "./Alerts.css";
import {
  FaExclamationTriangle,
  FaTint,
  FaThermometerHalf,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const alerts = [
  {
    id: 1,
    icon: <FaExclamationTriangle />,
    title: "Low Soil Moisture",
    message: "Irrigation recommended within 6 hours.",
    time: "Now",
    color: "warning",
  },
  {
    id: 2,
    icon: <FaTint />,
    title: "Water Tank",
    message: "Water level is sufficient for 3 days.",
    time: "Today",
    color: "info",
  },
  {
    id: 3,
    icon: <FaThermometerHalf />,
    title: "Temperature",
    message: "Optimal conditions maintained.",
    time: "Live",
    color: "temperature",
  },
  {
    id: 4,
    icon: <FaCheckCircle />,
    title: "System Status",
    message: "All devices are operating normally.",
    time: "Online",
    color: "success",
  },
];

export default function Alerts() {
  return (
    <div className="alertsCard">
      <div className="alertsHeader">
        <div>
          <h3>Recent Alerts</h3>
          <p>Latest notifications from your farm</p>
        </div>

        <button className="viewAllBtn">
          View All
          <FaArrowRight />
        </button>
      </div>

      <div className="alertsList">
        {alerts.map((alert) => (
          <div className="alertItem" key={alert.id}>
            <div className={`alertIcon ${alert.color}`}>
              {alert.icon}
            </div>

            <div className="alertContent">
              <h4>{alert.title}</h4>
              <p>{alert.message}</p>
            </div>

            <span className="alertTime">
              {alert.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}