import "./Dashboard.css";

import KPICards from "./KPICards";
import FieldHealth from "./FieldHealth";
import Weather from "./Weather";
import Recommendation from "./Recommendation";
import Alerts from "./Alerts";
import Reports from "./Reports";
import SensorStatus from "./SensorStatus";
import AIAssistant from "./AIAssistant";

export default function Dashboard() {
  return (
    <div className="dashboard">

      {/* KPI Cards */}
      <section className="kpiSection">
        <KPICards />
      </section>

      {/* Main Dashboard */}
      <section className="mainGrid">

        {/* Left Column */}
        <div className="leftColumn">

          {/* Field Health */}
          <div className="farmCard">
            <FieldHealth />
          </div>

          {/* Bottom Cards */}
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

        {/* Right Column */}
        <div className="rightColumn">

          {/* Weather */}
          <div className="weatherCardWrapper">
            <Weather />
          </div>

          {/* Recommendation */}
          <div className="recommendationCardWrapper">
            <Recommendation />
          </div>

          {/* AI Assistant */}
          <div className="assistantCardWrapper">
            <AIAssistant />
          </div>

        </div>

      </section>

    </div>
  );
}