import "./SensorStatus.css";
import {
  FaWifi,
  FaTint,
  FaThermometerHalf,
  FaCamera,
  FaMicrochip,
  FaCheckCircle,
} from "react-icons/fa";

const sensors = [
  {
    id: 1,
    icon: <FaTint />,
    name: "Soil Moisture",
    value: "74%",
    status: "Online",
  },
  {
    id: 2,
    icon: <FaThermometerHalf />,
    name: "Temperature",
    value: "28°C",
    status: "Online",
  },
  {
    id: 3,
    icon: <FaCamera />,
    name: "AI Camera",
    value: "Active",
    status: "Online",
  },
  {
    id: 4,
    icon: <FaMicrochip />,
    name: "AI Node",
    value: "Connected",
    status: "Healthy",
  },
];

export default function SensorStatus() {
  return (
    <div className="sensorCard">

      <div className="sensorHeader">

        <div>
          <h3>Sensor Status</h3>
          <p>Real-time monitoring</p>
        </div>

        <div className="sensorLive">
          <FaWifi />
          Live
        </div>

      </div>

      <div className="sensorList">

        {sensors.map((sensor) => (
          <div className="sensorItem" key={sensor.id}>

            <div className="sensorIcon">
              {sensor.icon}
            </div>

            <div className="sensorInfo">
              <h4>{sensor.name}</h4>
              <span>{sensor.value}</span>
            </div>

            <div className="sensorStatus">
              <FaCheckCircle />
              {sensor.status}
            </div>

          </div>
        ))}

      </div>

      <div className="sensorFooter">

        <div className="footerBox">
          <strong>4</strong>
          <span>Devices</span>
        </div>

        <div className="footerBox">
          <strong>100%</strong>
          <span>Online</span>
        </div>

      </div>

    </div>
  );
}