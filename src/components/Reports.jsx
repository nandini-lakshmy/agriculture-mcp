import "./Reports.css";
import {
  FaChartLine,
  FaArrowTrendUp,
  FaCalendarDays,
} from "react-icons/fa6";

export default function Reports() {
  return (
    <div className="reportsCard">

      {/* Header */}

      <div className="reportsHeader">

        <div>
          <h3>Weekly Analytics</h3>
          <p>Farm performance this week</p>
        </div>

        <div className="reportBadge">
          <FaCalendarDays />
          This Week
        </div>

      </div>

      {/* Chart */}

      <div className="chartContainer">

        <svg
          className="lineChart"
          viewBox="0 0 600 220"
          preserveAspectRatio="none"
        >

          {/* Grid */}

          <line x1="0" y1="40" x2="600" y2="40" className="grid" />
          <line x1="0" y1="90" x2="600" y2="90" className="grid" />
          <line x1="0" y1="140" x2="600" y2="140" className="grid" />
          <line x1="0" y1="190" x2="600" y2="190" className="grid" />

          {/* Area */}

          <path
            d="
            M40 170
            L120 145
            L200 150
            L280 105
            L360 120
            L440 75
            L520 45
            L520 190
            L40 190
            Z"
            className="areaFill"
          />

          {/* Line */}

          <path
            d="
            M40 170
            L120 145
            L200 150
            L280 105
            L360 120
            L440 75
            L520 45"
            className="chartLine"
          />

          {/* Points */}

          <circle cx="40" cy="170" r="6" className="point" />
          <circle cx="120" cy="145" r="6" className="point" />
          <circle cx="200" cy="150" r="6" className="point" />
          <circle cx="280" cy="105" r="6" className="point" />
          <circle cx="360" cy="120" r="6" className="point" />
          <circle cx="440" cy="75" r="6" className="point" />
          <circle cx="520" cy="45" r="6" className="point" />

        </svg>

        <div className="days">

          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>

        </div>

      </div>

      {/* Footer */}

      <div className="reportsFooter">

        <div className="reportStat">

          <FaChartLine />

          <div>

            <small>Growth</small>

            <strong>+18%</strong>

          </div>

        </div>

        <div className="reportStat">

          <FaArrowTrendUp />

          <div>

            <small>Yield</small>

            <strong>Excellent</strong>

          </div>

        </div>

      </div>

    </div>
  );
}