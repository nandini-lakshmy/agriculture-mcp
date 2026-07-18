import "./Recommendation.css";
import {
  FaRobot,
  FaLeaf,
  FaArrowTrendUp,
  FaCircleCheck,
} from "react-icons/fa6";

export default function Recommendation() {
  return (
    <div className="recommendationCard">

      {/* Header */}
      <div className="recommendationHeader">
        <div className="headerLeft">
          <div className="aiIcon">
            <FaRobot />
          </div>

          <div>
            <h3>AI Recommendation</h3>
            <p>Smart farming insights</p>
          </div>
        </div>

        <span className="statusBadge">
          Active
        </span>
      </div>

      {/* Health Score */}
      <div className="healthScore">

        <div className="scoreCircle">
          <span>96%</span>
        </div>

        <div className="scoreText">
          <h4>Crop Health Score</h4>
          <p>Excellent growing conditions detected.</p>
        </div>

      </div>

      {/* Recommendation */}
      <div className="recommendationBox">

        <div className="recommendationTitle">
          <FaLeaf />
          <span>Today's Recommendation</span>
        </div>

        <p>
          Soil moisture is within the optimal range.
          Irrigation is not required today.
          Continue monitoring weather conditions and
          inspect the northern section for minor pest activity.
        </p>

      </div>

      {/* Bottom Stats */}

      <div className="recommendationFooter">

        <div className="footerItem">
          <FaArrowTrendUp />
          <div>
            <span className="label">Priority</span>
            <strong>Low</strong>
          </div>
        </div>

        <div className="footerItem">
          <FaCircleCheck />
          <div>
            <span className="label">Status</span>
            <strong>Healthy</strong>
          </div>
        </div>

      </div>

    </div>
  );
}