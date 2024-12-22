import React from "react";
import PropTypes from "prop-types";
import "../styles/ProgressBar.css";

const ProgressBar = ({ currentStep }) => {
  return (
    <div className="progress-bar">
      <div className={`step ${currentStep === 1 ? "active" : ""}`}>Step 1</div>
      <div className={`step ${currentStep === 2 ? "active" : ""}`}>Step 2</div>
    </div>
  );
};

ProgressBar.propTypes = {
  currentStep: PropTypes.number.isRequired,
};

export default ProgressBar;
