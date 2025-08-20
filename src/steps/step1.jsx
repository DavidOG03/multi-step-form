import React from "react";
import "../sass/main.scss";

function StepOne() {
  return (
    <div className="step step-one">
      <h1 className="step-title">Personal info</h1>
      <p className="step-description">
        Please provide your name, email address, and phone number.
      </p>
      <fieldset className="step-fieldset">
        <label htmlFor="name">
          <span>Name</span>
          <input
            type="text"
            placeholder="e.g. Stephen King"
            id="name"
            required
          />
        </label>
        <label htmlFor="email">
          <span>Email Address</span>
          <input
            type="email"
            id="email"
            required
            placeholder="e.g. stephenking@lorem.com"
          />
        </label>
        <label htmlFor="phone">
          <span>Phone Number</span>
          <input
            type="tel"
            id="tel"
            placeholder="e.g. +1 234 567 890"
            required
          />
        </label>
      </fieldset>
    </div>
  );
}

export default StepOne;
