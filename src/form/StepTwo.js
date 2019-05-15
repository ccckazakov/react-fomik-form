import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';

const StepTwo = ({ onNext, onBack, currentStep, allStepsData }) => {
  
  let optionValue = '';
  if (allStepsData[currentStep] && allStepsData[currentStep]['optionValue']) optionValue = allStepsData[currentStep]['optionValue']

  return (
    <Formik initialValues={{ optionValue }} onSubmit={onNext} validate={validator}>
      {({ values, errors, handleChange }) => {
        return (
          <Form>
            <div>
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
              <ErrorMessage name="optionValue" />
            </div>
            <div>
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
  
  if (values.optionValue === '') {
    errors.optionValue = 'This is required. Please select Option A or B.';
  }
  return errors;
};