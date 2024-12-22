import React from 'react';
import ProgressBar from './ProgressBar';
import '../styles/Step1Form.css';

const Step1Form = ({ setActiveStep }) => {
  return (
    <div className="form-container">
      <h2>Student Feedback Form</h2>
      <ProgressBar step={1} />
      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Branch</label>
          <select>
            <option>Select Branch</option>
          </select>
        </div>

         <div className="form-group">
          <label>Class</label>
          <select>
            <option>Select Class</option>
          </select>
        </div>

         <div className="form-group">
          <label>Division</label>
          <select>
            <option>Select Divison</option>
          </select>
 </div>
            <div className="form-group">
          <label>Roll No.</label>
          <input type="text" />
       
        </div>
        <button className="next-btn" onClick={() => setActiveStep(2)}>Next</button>
      </form>
    </div>
  );
};

export default Step1Form;
