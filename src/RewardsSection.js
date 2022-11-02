import React from "react";
import RoundedButton from "./RoundedButton";
import "./RewardsSection.css";

function RewardsSection() {
  return (
    <div className="rewards-section">
        <img src="/res/rewards.webp" alt="" className="rewards-section__img" />
      <div className="rewards-section__info">
        <h1>A new way to earn sips and trips</h1>
        <p>
          Now you can link your Starbucks® Rewards + Delta SkyMiles® accounts to
          get:
        </p>
        <ul>
          <li>150 Stars + 500 miles when you link before 12/31</li>
          <li>Double Stars on Delta travel days</li>
          <li>
            1 mile per $1 spent at Starbucks (excludes taxes and gratuities)*
          </li>
        </ul>
        <button>Link accounts</button>
      </div>
    </div>
  );
}

export default RewardsSection;
