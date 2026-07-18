import "./Weather.css";
import {
  FaSun,
  FaWind,
  FaTint,
  FaCloudRain,
  FaTemperatureHigh,
} from "react-icons/fa";

export default function Weather() {
  return (
    <div className="weatherCard">

      <div className="weatherHeader">
        <div>
          <h3>Weather</h3>
          <p>Current Conditions</p>
        </div>

        <span className="liveBadge">LIVE</span>
      </div>

      <div className="weatherMain">

        <div className="weatherIcon">
          <FaSun />
        </div>

        <div className="temperatureBlock">
          <h1>28°C</h1>
          <span>Sunny</span>
        </div>

      </div>

      <div className="weatherGrid">

        <div className="weatherItem">
          <FaWind />
          <div>
            <h4>Wind</h4>
            <span>12 km/h</span>
          </div>
        </div>

        <div className="weatherItem">
          <FaTint />
          <div>
            <h4>Humidity</h4>
            <span>68%</span>
          </div>
        </div>

        <div className="weatherItem">
          <FaCloudRain />
          <div>
            <h4>Rain</h4>
            <span>10%</span>
          </div>
        </div>

        <div className="weatherItem">
          <FaTemperatureHigh />
          <div>
            <h4>Feels Like</h4>
            <span>30°C</span>
          </div>
        </div>

      </div>

    </div>
  );
}