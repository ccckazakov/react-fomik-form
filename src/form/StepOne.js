import React from 'react';

const StepOne = ({ onNext }) => {

  return (
    <div>
      <div>
        <h1>Click "Continue" to Proceed</h1>
      </div>

      <div>
        <div />
        <button name="next" type="submit" onClick={onNext}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default StepOne;
