import React from 'react';
import { pathOr } from 'ramda';
import { Formik, Form } from 'formik';
import useFormStyles from '../hooks/useFormStyles';

const StepFive = ({ onNext, onBack, currentStep, allStepsData }) => {
  const classes = useFormStyles();
  const sumValue = pathOr('', [currentStep, 'sumValue'])(allStepsData);

  return (
    <Formik initialValues={{ sumValue }} onSubmit={onNext}>
      {({ values, errors, handleChange }) => {
        return (
          <Form className={classes.form}>
            <div className={classes.fieldsArea}>
              <div>What is 1 + 1?</div>
              <input
                className={classes.field}
                name="sumValue"
                type="text"
                value={values.sumValue}
                onChange={handleChange}
              />
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

export default StepFive;