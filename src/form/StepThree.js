import React from 'react';
import { pathOr } from 'ramda';
import { Formik, Form } from 'formik';
import useFormStyles from '../hooks/useFormStyles';

const StepThree = ({ onNext, onBack, currentStep, allStepsData }) => {
  const classes = useFormStyles();
  const checkOne = pathOr('', [currentStep, 'checkOne'])(allStepsData);
  const checkTwo = pathOr('', [currentStep, 'checkTwo'])(allStepsData);
  const checkThree = pathOr('', [currentStep, 'checkThree'])(allStepsData);

  return (
    <Formik initialValues={{ checkOne, checkTwo, checkThree }} onSubmit={onNext}>
      {({ values, errors, handleChange }) => {
        return (
          <Form>
            <div>
              <div>Choose Option 1, 2, 3</div>
              <input type="checkbox" name="checkOne" checked={values.checkOne} onChange={handleChange}/>Option 1<br />
              <input type="checkbox" name="checkTwo" checked={values.checkTwo} onChange={handleChange}/>Option 2<br />
              <input type="checkbox" name="checkThree" checked={values.checkThree} onChange={handleChange}/>Option 3<br />
            </div>
            <div className={classes.buttonsArea}>
              <button name="back" variant="contained" onClick={onBack}>
                Back
              </button>
              <button name="next" type="submit" variant="contained" color="primary">
                Next
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default StepThree;