import React from 'react';
import { Formik, Form } from 'formik';

const StepThree = ({ onNext, onBack, currentStep, allStepsData }) => {

  let checkOne = false, checkTwo = false, checkThree = false;
  if (allStepsData[currentStep] && allStepsData[currentStep]['checkOne']) checkOne = true;
  if (allStepsData[currentStep] && allStepsData[currentStep]['checkTwo']) checkTwo = true;
  if (allStepsData[currentStep] && allStepsData[currentStep]['checkThree']) checkThree = true;

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

export default StepThree;