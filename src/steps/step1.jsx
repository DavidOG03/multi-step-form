import React, { useState } from "react";
import "../sass/main.scss";
import { motion } from "framer-motion";
function StepOne({
  isError,
  setError,
  handleInputChange,
  formData,
  setStep,
  handleNextStep,
}) {
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
    <motion.form
      className="step step-one"
      onSubmit={handleNextStep}
      initial={initial}
      whileInView={animate}
    >
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
            className={`input ${isError[0] ? "error" : ""}`}
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
            className={`input ${isError[1] ? "error" : ""}`}
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
            name="telephone"
            value={formData.telephone}
            placeholder="e.g. +1 234 567 890"
            required
            onChange={handleInputChange}
            className={`input ${isError[2] ? "error" : ""}`}
          />
        </label>
      </fieldset>
    </motion.form>
  );
}

export default StepOne;
