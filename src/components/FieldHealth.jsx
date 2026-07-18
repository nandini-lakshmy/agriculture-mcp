import "./FieldHealth.css";
import {
  FaMapMarkedAlt,
  FaSeedling,
  FaTint,
  FaThermometerHalf,
} from "react-icons/fa";

export default function FieldHealth() {
  return (
    <div className="fieldHealth">

      <div className="fieldHeader">
        <div>
          <h3>Farm Overview</h3>
          <p>Live monitoring of your agricultural field</p>
        </div>

        <button className="viewMapBtn">
          <FaMapMarkedAlt />
          View Map
        </button>
      </div>

      <div className="mapContainer">

        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200"
          alt="Farm"
        />

        <div className="marker marker1"></div>
        <div className="marker marker2"></div>
        <div className="marker marker3"></div>

      </div>

      <div className="farmStats">

        <div className="farmStat">
          <FaSeedling />
          <div>
            <h4>Crop Health</h4>
            <span>96%</span>
          </div>
        </div>

        <div className="farmStat">
          <FaTint />
          <div>
            <h4>Soil Moisture</h4>
            <span>74%</span>
          </div>
        </div>

        <div className="farmStat">
          <FaThermometerHalf />
          <div>
            <h4>Temperature</h4>
            <span>28°C</span>
          </div>
        </div>

      </div>

    </div>
  );
}