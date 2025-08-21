import React, { useState } from "react";
import "../sass/main.scss";
import { motion } from "framer-motion";

function StepThree({ addOns, yearly, isAddOn, setIsAddOn }) {
  // const [isAddOn, setIsActive] = useState([]);
  const initial = {
    opacity: 0,
    scale: 0.8,
    transform: "translateX(-50%), translateY(-50%)",
  };
  const animate = {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: "easeInOut",
      type: "spring",
      stiffness: 100,
      // damping: 30,
      // delay: child * 0.1,
    },
  };

  const toggleAddOn = (addOn) => {
    setIsAddOn((prev) =>
      prev.includes(addOn)
        ? prev.filter((item) => item !== addOn)
        : [...prev, addOn]
    );
  };

  return (
    <motion.div
      className="step step-three"
      initial={initial}
      whileInView={animate}
    >
      <h1 className="step-title">Pick Add-Ons</h1>
      <p className="step-description">
        Add-Ons help enhance your gaming experience
      </p>
      <div className="add-ons">
        {addOns.map((addon) => (
          <button
            key={addon.key}
            className={`add-on ${addon.key} ${
              isAddOn.includes(addon.key) ? "active" : ""
            }`}
            onClick={() => toggleAddOn(addon.key)}
            type="button"
          >
            <label
              className={`checkbox-label ${
                isAddOn.includes(addon.key) ? "active" : ""
              }`}
              onChange={() => toggleAddOn(addon.key)}
            >
              <input
                type="checkbox"
                checked={isAddOn.includes(addon.key)}
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
    </motion.div>
  );
}

export default StepThree;
