import React, { useState } from "react";
import "../sass/main.scss";

function StepTwo({ yearly, setIsYearly }) {
  const [isActive, setIsActive] = useState("arcade");

  return (
    <div className="step step-two">
      <h1 className="step-title">Select your plan</h1>
      <p className="step-description">
        You have the option of monthly or yearly billing.
      </p>
      <div className="plans">
        <button
          className={`plan monthly-button ${
            isActive === "arcade" ? "active" : ""
          }`}
          onClick={() => setIsActive("arcade")}
        >
          <img src="/images/icon-arcade.svg" alt="Arcade Icon" />
          <div className="plan-details">
            <span className="plan-name">Arcade</span>
            <span className="price">{yearly ? "$90/yr" : "$9/mo"}</span>
            {yearly && <span className="free-months">2 month free</span>}
          </div>
        </button>
        <button
          className={`plan yearly-button ${
            isActive === "advanced" ? "active" : ""
          }`}
          onClick={() => setIsActive("advanced")}
        >
          <img src="/images/icon-advanced.svg" alt="Advanced Icon" />
          <div className="plan-details">
            <span className="plan-name">Advanced</span>
            <span className="price">{yearly ? "$120/yr" : "$12/mo"}</span>
            {yearly && <span className="free-months">2 month free</span>}
          </div>
        </button>

        <button
          className={`plan pro-button ${isActive === "pro" ? "active" : ""}`}
          onClick={() => setIsActive("pro")}
        >
          <img src="/images/icon-pro.svg" alt="Pro Icon" />
          <div className="plan-details">
            <span className="plan-name"> Pro</span>
            <span className="price">{yearly ? "$150/yr" : "$15/mo"}</span>
            {yearly && <span className="free-months">2 month free</span>}
          </div>
        </button>
      </div>
      <div className="toggle-plan">
        <span className={`toggle-label ${!yearly ? "active" : ""}`}>
          Monthly
        </span>
        <div className="toggle">
          <div
            className={`toggle-indicator ${yearly ? "active" : ""}`}
            onClick={() => {
              setIsYearly(!yearly);
            }}
          ></div>
        </div>
        <span className={`toggle-label ${yearly ? "active" : ""}`}>Yearly</span>
      </div>
    </div>
  );
}

export default StepTwo;
