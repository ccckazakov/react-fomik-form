import React from 'react';
import useFormStyles from '../hooks/useFormStyles';

const StepOne = ({ onNext }) => {
  const classes = useFormStyles();

  return (
    <div className={classes.form}>
      <div className={classes.fieldsArea}>
        <h1>Click "Continue" to Proceed</h1>
      </div>

      <div className={classes.buttonsArea}>
        <div />
        <button name="next" type="submit" color="primary" onClick={onNext}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default StepOne;
