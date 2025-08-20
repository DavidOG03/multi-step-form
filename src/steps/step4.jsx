import React from "react";

const StepFour = () => {
  return (
    <div className="step step-four">
      <h1 className="step-title">Finishing Up</h1>
      <p className="step-description">
        Double-check everything looks OK before confirming.
      </p>
      <div className="summary">
        <div className="summary-item">
          <div className="plan-details">
            <span className="plan-name">Arcade (monthly)</span>{" "}
            <span className="change">Change</span>
          </div>
          <span className="plan-price">$9/mo</span>
        </div>
        <div className="plan-add-ons">
          <span className="plan-add-on-name">Online Service</span>
          <span className="plan-add-on-price">+$1/mo</span>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
