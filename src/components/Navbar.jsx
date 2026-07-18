import "./Navbar.css";

import {
  FaLeaf,
  FaCloudSun,
  FaChartLine,
  FaBell,
  FaMapMarkedAlt,
  FaRobot,
  FaUserCircle
} from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">

        <FaLeaf className="logo-icon" />

        <div>
          <h2>AgriMCP</h2>
          <span>Smart Farming Dashboard</span>
        </div>

      </div>

      <nav className="nav-links">

        <a href="#">
          <FaChartLine />
          Dashboard
        </a>

        <a href="#">
          <FaMapMarkedAlt />
          Farm Map
        </a>

        <a href="#">
          <FaCloudSun />
          Weather
        </a>

        <a href="#">
          <FaRobot />
          AI Assistant
        </a>

        <a href="#">
          <FaBell />
          Alerts
        </a>

      </nav>

      <div className="right-section">

        <div className="status">

          <span className="dot"></span>

          System Online

        </div>

        <div className="user">

          <FaUserCircle />

          <span>Farmer</span>

        </div>

      </div>

    </header>
  );
}

export default Navbar;