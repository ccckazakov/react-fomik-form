import React from 'react';
import Button from '@material-ui/core/Button';
import useFormStyles from '../hooks/useFormStyles';

const StepSix = ({ onSubmit }) => {
  const classes = useFormStyles();

  return (
    <div className={classes.form}>
      <div className={classes.fieldsArea}>
        <h1>End of Decision Tree</h1>
      </div>

      <div className={classes.buttonsArea}>
        <div />
        <Button name="next" type="submit" variant="contained" color="secondary" onClick={onSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default StepSix;
