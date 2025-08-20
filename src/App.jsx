import "./sass/main.scss";
import React, { useState } from "react";
import StepOne from "./steps/step1";
import StepTwo from "./steps/step2";
import StepThree from "./steps/step3";
import StepFour from "./steps/step4";

const App = () => {
  const [step, setStep] = useState(1);
  const [isYearly, setIsYearly] = useState(false);

  const handleGoBack = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleNextStep = () => {
    setStep((prevStep) => Math.min(prevStep + 1, 4));
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="step-indicators">
          <button
            onClick={() => setStep(1)}
            className={`step-indicator ${step === 1 ? "active" : ""}`}
          >
            1
          </button>
          <button
            onClick={() => setStep(2)}
            className={`step-indicator ${step === 2 ? "active" : ""}`}
          >
            2
          </button>
          <button
            onClick={() => setStep(3)}
            className={`step-indicator ${step === 3 ? "active" : ""}`}
          >
            3
          </button>
          <button
            onClick={() => setStep(4)}
            className={`step-indicator ${step === 4 ? "active" : ""}`}
          >
            4
          </button>
        </div>
      </header>
      <main className="app-main">
        {step === 1 && <StepOne />}
        {step === 2 && <StepTwo yearly={isYearly} setIsYearly={setIsYearly} />}
        {step === 3 && <StepThree yearly={isYearly} />}
        {step === 4 && <StepFour yearly={isYearly} />}
      </main>
      <footer className="app-footer">
        <button
          className={`btn go-back ${step === 1 ? "disabled" : ""}`}
          onClick={handleGoBack}
        >
          Go Back
        </button>

        <button
          className={`btn next ${step === 4 ? "disabled" : ""}`}
          onClick={handleNextStep}
        >
          Next Step
        </button>
      </footer>
    </div>
  );
};

export default App;
