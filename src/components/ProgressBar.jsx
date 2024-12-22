

import React from 'react';
import '../styles/ProgressBar.css';

const ProgressBar = ({ step }) => {
  return (
    <div className="progress-bar">
      <div className={`step ${step >= 1 ? 'active' : ''}`}>1</div>
      <div className={`line ${step >= 2 ? 'active' : ''}`}></div>
      <div className={`step ${step >= 2 ? 'active' : ''}`}>2</div>
    </div>
  );
};

export default ProgressBar;
