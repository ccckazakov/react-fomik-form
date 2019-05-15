import React from 'react';
import { pathOr, isEmpty } from 'ramda';
import { Formik, Form } from 'formik';
import useFormStyles from '../hooks/useFormStyles';

const StepTwo = ({ onNext, onBack, currentStep, allStepsData }) => {
  const classes = useFormStyles();
  const optionValue = pathOr('', [currentStep, 'optionValue'])(allStepsData);

  return (
    <Formik initialValues={{ optionValue }} onSubmit={onNext} validate={validator}>
      {({ values, errors, handleChange }) => {
        return (
          <Form className={classes.form}>
            <div className={classes.fieldsArea}>
              <div>Choose Option A or B</div>
              <div>
                <input
                  type="radio"
                  name="optionValue"
                  value="optionA"
                  checked={values.optionValue === "optionA"}
                  onChange={handleChange}
                />Option A <br />
                <input
                  type="radio"
                  name="optionValue"
                  value="optionB"
                  checked={values.optionValue === "optionB"}
                  onChange={handleChange}
                />Option B <br />
              </div>
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

export default StepTwo;

export const validator = values => {
  let errors = {};
  
  if (isEmpty(values.optionValue)) {
    errors.optionValue = 'This is required. Please select Option A or B.';
  }
  return errors;
};