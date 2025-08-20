import React, { useState } from "react";
import "../sass/main.scss";

const addOns = [
  {
    key: "online",
    name: "Online Services",
    description: "Access to multiplayer games",
    priceMonthly: "+$1/mo",
    priceYearly: "+$10/yr",
  },
  {
    key: "storage",
    name: "Larger Storage",
    description: "Extra 1 TB of cloud save",
    priceMonthly: "+$2/mo",
    priceYearly: "+$20/yr",
  },
  {
    key: "customize",
    name: "Customizable Profile",
    description: "Custom theme on your profile",
    priceMonthly: "+$2/mo",
    priceYearly: "+$20/yr",
  },
];

function StepThree({ yearly }) {
  const [isActive, setIsActive] = useState([]);

  const toggleAddOn = (addOn) => {
    setIsActive((prev) =>
      prev.includes(addOn)
        ? prev.filter((item) => item !== addOn)
        : [...prev, addOn]
    );
  };

  return (
    <div className="step step-three">
      <h1 className="step-title">Pick Add-Ons</h1>
      <p className="step-description">
        Add-Ons help enhance your gaming experience
      </p>
      <div className="add-ons">
        {addOns.map((addon) => (
          <button
            key={addon.key}
            className={`add-on ${addon.key} ${
              isActive.includes(addon.key) ? "active" : ""
            }`}
            onClick={() => toggleAddOn(addon.key)}
            type="button"
          >
            <label
              className={`checkbox-label ${
                isActive.includes(addon.key) ? "active" : ""
              }`}
              onChange={() => toggleAddOn(addon.key)}
            >
              <input
                type="checkbox"
                checked={isActive.includes(addon.key)}
                readOnly
              />
            </label>
            <div className="add-on-details">
              <span className="add-on-name">{addon.name}</span>
              <span className="add-on-description">{addon.description}</span>
            </div>
            <span className="add-on-price">
              {yearly ? addon.priceYearly : addon.priceMonthly}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default StepThree;
