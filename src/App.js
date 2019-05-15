import React from 'react';

import MultiStepForm from './components/MultiStepForm';
import StepOne from './form/StepOne';
import StepTwo from './form/StepTwo';
import StepThree from './form/StepThree';
import StepFour from './form/StepFour';
import StepFive from './form/StepFive';
import StepSix from './form/StepSix';

const App = () => {
  return (
    <div style={{width: '50%', margin: '50px auto'}}>
      <MultiStepForm>
        <StepOne    label="Step 1" />
        <StepTwo    label="Step 2" />
        <StepThree  label="Step 3" />
        <StepFour   label="Step 4" />
        <StepFive   label="Step 5" />
        <StepSix    label="Step 6" />
      </MultiStepForm>
    </div>
  );
};

export default App;