import React from 'react';
import { pathOr } from 'ramda';
import { Formik, Form } from 'formik';
import Button from '@material-ui/core/Button';
import useFormStyles from '../hooks/useFormStyles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';

const StepThree = ({ onNext, onBack, currentStep, allStepsData }) => {
  const classes = useFormStyles();
  const checkOne = pathOr('', [currentStep, 'checkOne'])(allStepsData);
  const checkTwo = pathOr('', [currentStep, 'checkTwo'])(allStepsData);
  const checkThree = pathOr('', [currentStep, 'checkThree'])(allStepsData);

  return (
    <Formik initialValues={{ checkOne, checkTwo, checkThree }} onSubmit={onNext}>
      {({ values, errors, handleChange }) => {
        return (
          <Form className={classes.form}>
            <div className={classes.fieldsArea}>
              <FormLabel component="legend">Choose Option 1, 2, 3</FormLabel>
              <FormControlLabel
                control={
                  <Checkbox
                    name="checkOne"
                    checked={values.checkOne}
                    onChange={handleChange}
                    value="checkOne"
                    color="primary"
                  />
                }
                label="Option 1"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="checkTwo"
                    checked={values.checkTwo}
                    onChange={handleChange}
                    value="checkTwo"
                    color="primary"
                  />
                }
                label="Option 2"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="checkThree"
                    checked={values.checkThree}
                    onChange={handleChange}
                    value="checkThree"
                    color="primary"
                  />
                }
                label="Option 3"
              />
            </div>
            <div className={classes.buttonsArea}>
              <Button name="back" variant="contained" onClick={onBack}>
                Back
              </Button>
              <Button name="next" type="submit" variant="contained" color="primary">
                Next
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default StepThree;