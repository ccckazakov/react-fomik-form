import React from 'react';
import Button from '@material-ui/core/Button';
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
        <Button name="next" type="submit" variant="contained" color="primary" onClick={onNext}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default StepOne;
