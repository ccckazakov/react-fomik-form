import React from 'react';
import Button from '@material-ui/core/Button';
import useFormStyles from '../hooks/useFormStyles';

const StepFour = ({ onBack, onSubmit }) => {
  const classes = useFormStyles();

  return (
    <div className={classes.form}>
      <div className={classes.fieldsArea}>
        <h1>You selected Option 3</h1>
      </div>

      <div className={classes.buttonsArea}>
        <Button name="back" variant="contained" onClick={onBack}>
          Back
        </Button>
        <Button name="next" type="submit" variant="contained" color="secondary" onClick={onSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default StepFour;
