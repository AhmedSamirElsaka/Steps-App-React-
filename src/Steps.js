import React, { useState } from "react";
import "./index.css";
export default function Steps({ currentStep }) {
  return (
    <div className="steps">
      <div className="numbers">
        <div className={currentStep >= 1 ? "active" : ""}>1</div>
        <div className={currentStep >= 2 ? "active" : ""}>1</div>
        <div className={currentStep >= 3 ? "active" : ""}>1</div>
      </div>
    </div>
  );
}
