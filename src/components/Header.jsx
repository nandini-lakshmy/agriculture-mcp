import "./Header.css";
import {
  FaBell,
  FaSearch,
  FaCloudSun,
  FaChevronDown,
} from "react-icons/fa";

export default function Header() {
  return (
    <header className="header">

      {/* Left */}

      <div className="headerLeft">

        <div>
          <h1>Dashboard</h1>
          <p>Welcome back! Here's your farm overview.</p>
        </div>

      </div>

      {/* Right */}

      <div className="headerRight">

        {/* Search */}

        <div className="searchBox">

          <FaSearch />

          <input
            type="text"
            placeholder="Search..."
          />

        </div>

        {/* Weather */}

        <div className="weatherWidget">

          <FaCloudSun />

          <div>

            <strong>28°C</strong>

            <span>Sunny</span>

          </div>

        </div>

        {/* Notification */}

        <button className="notificationBtn">

          <FaBell />

          <span className="notificationDot"></span>

        </button>

        {/* Profile */}

        <div className="profile">

          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="profile"
          />

          <div>

            <strong>Hari Dev</strong>

            <span>Administrator</span>

          </div>

          <FaChevronDown />

        </div>

      </div>

    </header>
  );
}