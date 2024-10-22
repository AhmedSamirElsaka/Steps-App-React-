import React from "react";

export default function Message({ currentStep }) {
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  return (
    <div className="message">
      step {currentStep}: {messages[currentStep - 1]}
    </div>
  );
}
