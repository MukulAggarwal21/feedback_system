import React from 'react';
import ProgressBar from './ProgressBar';
import '../styles/FormStep2.css';

const Step2 = ({ setActiveStep }) => {
  return (
    <div className="form-container">
      <h2>Step 2 Feedback</h2>
      <ProgressBar step={2} />
      <form>
        <div className="form-group">
          <label>Feedback</label>
          <textarea  className='textcase' rows="5"></textarea>
        </div>
        <button className="prev-btn" onClick={() => setActiveStep(1)}>Previous</button>
        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Step2;
