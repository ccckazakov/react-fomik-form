import React from 'react';

const StepFour = ({ onBack, onSubmit }) => {

  return (
    <div>
      <div>
        <h1>You selected Option 3</h1>
      </div>

      <div>
        <button name="back" onClick={onBack}>
          Back
        </button>
        <button name="next" type="submit" color="primary">
          Submit
        </button>
      </div>
    </div>
  );
};

export default StepFour;
