import React from 'react';
import useFormStyles from '../hooks/useFormStyles';

const StepSix = ({ onBack, onSubmit }) => {
  const classes = useFormStyles();

  return (
    <div className={classes.form}>
      <div className={classes.fieldsArea}>
        <h1>End of Decision Tree</h1>
      </div>

      <div className={classes.buttonsArea}>
        <button name="back" variant="contained" onClick={onBack}>
          Back
        </button>
        <div />
        <button name="next" type="submit" variant="contained" color="secondary" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default StepSix;
