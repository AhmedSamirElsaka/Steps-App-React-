import { useState } from "react";
import Steps from "./Steps";
import Message from "./Message";
import Button from "./Button";
import "./index.css";
function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };
  // setSteps((s) => s + 1);
  return (
    <div>
      <Steps currentStep={currentStep} />
      <Message currentStep={currentStep} />
      <div className="buttons">
        <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
          <span>👈</span> Previous
        </Button>

        <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
          Next <span>👉</span>
          <span>🤓</span>
        </Button>
      </div>
    </div>
  );
}

export default App;
