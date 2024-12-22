import React from "react";
import PropTypes from "prop-types";
import "../styles/Form.css";

const Step2Review = ({ goToPreviousStep }) => {
  return (
    <div className="step-2">
      <h2>Thank you for providing your details!</h2>
      <p>Please review your information and proceed.</p>
      <div className="form-buttons">
        <button
          type="button"
          className="btn previous"
          onClick={goToPreviousStep}
        >
          Previous
        </button>
        <button type="button" className="btn next">
          Submit
        </button>
      </div>
    </div>
  );
};

Step2Review.propTypes = {
  goToPreviousStep: PropTypes.func.isRequired,
};

export default Step2Review;
