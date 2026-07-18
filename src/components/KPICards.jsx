import "./KPICards.css";
import {
  FaLeaf,
  FaDroplet,
  FaTemperatureHigh,
  FaMicrochip,
  FaArrowTrendUp,
} from "react-icons/fa6";

const kpis = [
  {
    id: 1,
    title: "Crop Health",
    value: "96%",
    change: "+2.4%",
    icon: <FaLeaf />,
    color: "green",
  },
  {
    id: 2,
    title: "Soil Moisture",
    value: "74%",
    change: "+4.8%",
    icon: <FaDroplet />,
    color: "blue",
  },
  {
    id: 3,
    title: "Temperature",
    value: "28°C",
    change: "-1.2%",
    icon: <FaTemperatureHigh />,
    color: "orange",
  },
  {
    id: 4,
    title: "Sensors Online",
    value: "12",
    change: "100%",
    icon: <FaMicrochip />,
    color: "purple",
  },
];

export default function KPICards() {
  return (
    <div className="kpiGrid">
      {kpis.map((card) => (
        <div className="kpiCard" key={card.id}>
          <div className="kpiTop">
            <div className={`kpiIcon ${card.color}`}>
              {card.icon}
            </div>

            <div className="trendBadge">
              <FaArrowTrendUp />
              <span>{card.change}</span>
            </div>
          </div>

          <div className="kpiContent">
            <h2>{card.value}</h2>
            <p>{card.title}</p>
          </div>

          <div className="progressBar">
            <div
              className={`progressFill ${card.color}`}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}