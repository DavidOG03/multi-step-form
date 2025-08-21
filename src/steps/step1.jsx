import React, { useState } from "react";
import "../sass/main.scss";

function StepOne({ isError, setError, handleInputChange, formData }) {
  return (
    <div className="step step-one">
      <h1 className="step-title">Personal info</h1>
      <p className="step-description">
        Please provide your name, email address, and phone number.
      </p>
      <fieldset className="step-fieldset">
        <label htmlFor="name">
          <div className="input-header">
            <span>Name</span>
            {isError[0] && <span>{isError[0]}</span>}
          </div>
          <input
            type="text"
            placeholder="e.g. Stephen King"
            id="name"
            name="username"
            value={formData.username}
            required
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="email">
          <div className="input-header">
            <span>Email Address</span>
            {isError[1] && <span>{isError[1]}</span>}
          </div>

          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            required
            placeholder="e.g. stephenking@lorem.com"
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="phone">
          <div className="input-header">
            <span>Phone Number</span>
            {isError[2] && <span>{isError[2]}</span>}
          </div>

          <input
            type="tel"
            id="tel"
            name="tel"
            value={formData.telephone}
            placeholder="e.g. +1 234 567 890"
            required
            onChange={handleInputChange}
          />
        </label>
      </fieldset>
    </div>
  );
}

export default StepOne;
