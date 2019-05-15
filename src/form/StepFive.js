import React from 'react';
import { Formik, Form } from 'formik';

const StepFive = ({ onNext, onBack, currentStep, allStepsData }) => {
  
  let sumValue = '';
  if (allStepsData[currentStep] && allStepsData[currentStep]['sumValue']) sumValue = allStepsData[currentStep]['sumValue'];

  return (
    <Formik initialValues={{ sumValue }} onSubmit={onNext}>
      {({ values, errors, handleChange }) => {
        return (
          <Form>
            <div>
              <div>What is 1 + 1?</div>
              <input
                name="sumValue"
                type="text"
                value={values.sumValue}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <button name="back" onClick={onBack}>
                Back
              </button>
              <button name="next" type="submit" color="primary">
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