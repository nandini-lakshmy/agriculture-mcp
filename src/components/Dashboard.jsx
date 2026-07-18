import "./Dashboard.css";

import KPICards from "./KPICards";
import FieldHealth from "./FieldHealth";
import Weather from "./Weather";
import Recommendation from "./Recommendation";
import Alerts from "./Alerts";
import Reports from "./Reports";
import SensorStatus from "./SensorStatus";

export default function Dashboard() {
  return (
    <div className="dashboard">

      {/* KPI Cards */}
      <section className="kpiSection">
        <KPICards />
      </section>

      {/* Main Content */}
      <section className="mainGrid">

        {/* Left Side */}
        <div className="leftColumn">

          <div className="farmCard">
            <FieldHealth />
          </div>

          <div className="bottomCards">

            <div className="alertsCardWrapper">
              <Alerts />
            </div>

            <div className="reportsCardWrapper">
              <Reports />
            </div>

            <div className="sensorCardWrapper">
              <SensorStatus />
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="rightColumn">

          <div className="weatherCardWrapper">
            <Weather />
          </div>

          <div className="recommendationCardWrapper">
            <Recommendation />
          </div>

        </div>

      </section>

    </div>
  );
}