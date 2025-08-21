import "./sass/main.scss";
import React, { useState } from "react";
import StepOne from "./steps/step1";
import StepTwo from "./steps/step2";
import StepThree from "./steps/step3";
import StepFour from "./steps/step4";
import ThankYou from "./steps/thankYou";

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

const App = () => {
  const [step, setStep] = useState(1);
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("arcade");
  const [isAddOn, setIsAddOn] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    telephone: "",
  });
  const [isError, setError] = useState([" ", " ", " "]);

  const handleGoBack = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleNextStep = () => {
    setStep((prevStep) => Math.min(prevStep + 1, 5));
  };

  const handleInputChange = (e) => {
    if (formData.username === "") {
      setError((prev) => {
        const newErrors = [...prev];
        newErrors[0] = "Username is required";
        return newErrors;
      });
    }
    if (formData.email === "") {
      setError((prev) => {
        const newErrors = [...prev];
        newErrors[1] = "Email is required";
        return newErrors;
      });
    }
    if (formData.telephone === "") {
      setError((prev) => {
        const newErrors = [...prev];
        newErrors[2] = "Telephone is required";
        return newErrors;
      });
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="step-indicators">
          <div className="step-indicator">
            <button
              onClick={() => setStep(1)}
              className={`step-indicator-btn ${step === 1 ? "active" : ""}`}
            >
              1
            </button>
            <div className="step-indicator-label ">
              <span>Step 1</span>
              <span>Your Info</span>
            </div>
          </div>
          <div className="step-indicator">
            <button
              onClick={() => setStep(2)}
              className={`step-indicator-btn ${step === 2 ? "active" : ""}`}
            >
              2
            </button>
            <div className="step-indicator-label ">
              <span>Step 2</span>
              <span>Select Plan</span>
            </div>
          </div>
          <div className="step-indicator">
            <button
              onClick={() => setStep(3)}
              className={`step-indicator-btn ${step === 3 ? "active" : ""}`}
            >
              3
            </button>
            <div className="step-indicator-label">
              <span>Step 3</span>
              <span>Add-Ons</span>
            </div>
          </div>
          <div className="step-indicator">
            <button
              onClick={() => setStep(4)}
              className={`step-indicator-btn ${step >= 4 ? "active" : ""}`}
            >
              4
            </button>
            <div className="step-indicator-label ">
              <span>Step 4</span>
              <span>Summary</span>
            </div>
          </div>
        </div>
      </header>
      <main className="app-main">
        {step === 1 && (
          <StepOne
            isError={isError}
            setError={setError}
            handleInputChange={(e) => handleInputChange}
            formData={formData}
          />
        )}
        {step === 2 && (
          <StepTwo
            yearly={isYearly}
            setIsYearly={setIsYearly}
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
          />
        )}
        {step === 3 && (
          <StepThree
            addOns={addOns}
            yearly={isYearly}
            isAddOn={isAddOn}
            setIsAddOn={setIsAddOn}
          />
        )}
        {step === 4 && (
          <StepFour
            addOns={addOns}
            yearly={isYearly}
            selectedPlan={selectedPlan}
            isAddOn={isAddOn}
            setStep={setStep}
          />
        )}
        {step === 5 && <ThankYou />}
      </main>

      {step !== 5 && (
        <footer className="app-footer">
          <button
            className={`btn go-back ${step === 1 ? "disabled" : ""}`}
            onClick={handleGoBack}
          >
            Go Back
          </button>

          <button
            className={`btn next ${step === 4 ? "confirm" : ""}`}
            onClick={handleNextStep}
          >
            {step === 4 ? "Confirm" : "Next Step"}
          </button>
        </footer>
      )}
    </div>
  );
};

export default App;
