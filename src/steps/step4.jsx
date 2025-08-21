import React from "react";
import { motion } from "framer-motion";

const StepFour = ({ addOns, yearly, selectedPlan, isAddOn, setStep }) => {
  const planPrices = {
    arcade: yearly ? "$90/yr" : "$9/mo",
    advanced: yearly ? "$120/yr" : "$12/mo",
    pro: yearly ? "$150/yr" : "$15/mo",
  };

  const selectedAddOns = addOns.filter((addon) => isAddOn.includes(addon.key));

  // to extract number from price string
  const getPriceValue = (priceStr) => {
    // to match numbers in the string
    const match = priceStr.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  };

  // to get plan price
  const planPrice = getPriceValue(planPrices[selectedPlan]);

  // to get total add-ons price
  const addOnsTotal = selectedAddOns.reduce(
    (acc, addOn) =>
      acc + getPriceValue(yearly ? addOn.priceYearly : addOn.priceMonthly),
    0
  );

  // to calculate total
  const total = planPrice + addOnsTotal;

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

  return (
    <motion.div
      className="step step-four"
      initial={initial}
      whileInView={animate}
    >
      <h1 className="step-title">Finishing Up</h1>
      <p className="step-description">
        Double-check everything looks OK before confirming.
      </p>
      <div className="summary">
        <div className="summary-item">
          <div className="plan-details">
            <span className="plan-name">
              {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} (
              {yearly ? "Yearly" : "Monthly"})
            </span>{" "}
            <span className="change" onClick={() => setStep(2)}>
              Change
            </span>
          </div>
          <span className="plan-price">{planPrices[selectedPlan]}</span>
        </div>
        <div className="plan-add-ons">
          {isAddOn.length === 0
            ? "No Add-Ons Selected"
            : selectedAddOns.map((addOn) => (
                <div className="plan-add-on" key={addOn.key}>
                  <span className="plan-add-on-name">{addOn.name}</span>
                  <span className="plan-add-on-price">
                    {yearly ? addOn.priceYearly : addOn.priceMonthly}
                  </span>
                </div>
              ))}
        </div>
      </div>
      <div className="total">
        <span className="total-label">
          Total (per {yearly ? "year" : "month"})
        </span>
        <span className="total-price">
          {yearly ? `$${total}/yr` : `$${total}/mo`}
        </span>
      </div>
    </motion.div>
  );
};

export default StepFour;
