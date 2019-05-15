import React from 'react';
import useFormStyles from '../hooks/useFormStyles';

const StepFour = ({ onBack, onSubmit }) => {
  const classes = useFormStyles();

  return (
    <div className={classes.form}>
      <div className={classes.fieldsArea}>
        <h1>You selected Option 3</h1>
      </div>

      <div className={classes.buttonsArea}>
        <button name="back" variant="contained" onClick={onBack}>
          Back
        </button>
        <button name="next" type="submit" variant="contained" color="primary">
          Submit
        </button>
      </div>
    </div>
  );
};

export default StepFour;
