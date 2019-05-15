import React from 'react';

const StepSix = ({ onBack, onSubmit }) => {

  return (
    <div>
      <div>
        <h1>End of Decision Tree</h1>
      </div>

      <div>
        <button name="back" onClick={onBack}>
          Back
        </button>
        <button name="next" type="submit" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default StepSix;
