import "./Sidebar.css";

import {
  FaHome,
  FaMapMarkedAlt,
  FaCloudSun,
  FaRobot,
  FaMicrochip,
  FaBell,
  FaChartBar,
  FaCog,
  FaSeedling,
  FaChevronDown,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="sidebar">

      {/* ---------- Logo ---------- */}

      <div className="logo">

        <div className="logoIcon">
          <FaSeedling size={18} />
        </div>

        <div className="logoText">
          <h2>AgriMCP</h2>
          <p>Smart Agriculture</p>
        </div>

      </div>

      {/* ---------- Menu ---------- */}

      <nav className="menu">

        <div className="menuItem active">
          <FaHome />
          <span>Dashboard</span>
        </div>

        <div className="menuItem">
          <FaMapMarkedAlt />
          <span>Farm Map</span>
        </div>

        <div className="menuItem">
          <FaCloudSun />
          <span>Weather</span>
        </div>

        <div className="menuItem">
          <FaRobot />
          <span>AI Assistant</span>
        </div>

        <div className="menuItem">
          <FaMicrochip />
          <span>Sensors</span>
        </div>

        <div className="menuItem">
          <FaBell />
          <span>Alerts</span>
        </div>

        <div className="menuItem">
          <FaChartBar />
          <span>Reports</span>
        </div>

        <div className="menuItem">
          <FaCog />
          <span>Settings</span>
        </div>

      </nav>

      {/* ---------- AI Card ---------- */}

      <div className="assistantCard">

        <div className="robotCircle">
          <FaRobot />
        </div>

        <h3>AI Assistant</h3>

        <p>
          Ask anything about
          <br />
          your crops.
        </p>

        <button>Start Chat</button>

      </div>

      {/* ---------- Profile ---------- */}

      <div className="profile">

        <img
          src="https://i.pravatar.cc/100?img=12"
          alt="profile"
        />

        <div className="profileInfo">

          <h4>Haridev</h4>

          <span>Administrator</span>

        </div>

        <FaChevronDown className="arrow" />

      </div>

    </aside>
  );
}