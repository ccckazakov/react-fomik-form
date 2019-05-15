import React, { useReducer, useCallback, cloneElement } from 'react';
const initialState = {
  currentStep: 1,
  allStepsData: {},
  steps: [1, ],
};

// get the next step
const getNextStep = (currentStep, payload) => {
  if (currentStep === 2 && payload.optionValue === "optionB") return 6;
  if (currentStep === 3 && !payload.checkThree && (payload.checkOne || payload.checkTwo)) return 5;
  return currentStep + 1;
}

// save the form data to 'allStepsdata' and handle the next step
export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'next': {
      const { currentStep, allStepsData, steps } = state;
      const currentStepData = allStepsData[currentStep] || {};

      let newAllStepsData = {};
      if (currentStepData !== payload) {
        for (let i = 2; i < currentStep; i++) {
          if (i === 4 || i === 6) continue;
          newAllStepsData[i] = allStepsData[i];
        }
      } else {
        newAllStepsData = allStepsData;
      }
      newAllStepsData[currentStep] = payload;

      const nextStep = getNextStep(currentStep, payload);
      steps.push(nextStep);

      return {
        steps,
        allStepsData: newAllStepsData,
        currentStep: nextStep
      };
    }
    case 'back':
      const { allStepsData, steps } = state;

      steps.pop();
      const beforeStep = steps[steps.length - 1];
      
      return {
        steps,
        allStepsData,
        currentStep: beforeStep,
      };
    default:
      return state;
  }
};

const MultiStepForm = ({ children, showFlow }) => {
  const [formState, dispatch] = useReducer(reducer, initialState);

  const handleNext = useCallback(payload => dispatch({ type: 'next', payload }));
  const handleBack = useCallback(() => dispatch({ type: 'back' }));
  const hanleSubmit = useCallback(() => {
    let str = '{\n';
    for (let i = 2; i < formState.currentStep; i++) {
      if (!formState.allStepsData[i]) continue;
      Object.keys(formState.allStepsData[i]).forEach(key => {
        str += '\t' + key + ': ' + formState.allStepsData[i][key] + '\n';
      })
    }
    str += '}\n';
    console.log(str);
  });

  const printLog = () => {
    let log = [];
    log.push(<div>{'{'}</div>);
    for (let i = 2; i < formState.currentStep; i++) {
      if (!formState.allStepsData[i]) continue;
      Object.keys(formState.allStepsData[i]).forEach(key => {
        log.push(<div id={i}>&nbsp;&nbsp;&nbsp;&nbsp;{key}: {formState.allStepsData[i][key].toString()}</div>)
      })
    }
    log.push(<div>{'}'}</div>);
    return log;
  }

  const { currentStep, allStepsData } = formState;
  const currentStepComponent = children[currentStep - 1];

  

  return (
    <>
      {cloneElement(currentStepComponent, {
        key: currentStepComponent.props.label,
        onNext: handleNext,
        onBack: handleBack,
        onSubmit: hanleSubmit,
        allStepsData,
        currentStep,
      })}
      <div>
        {printLog()}
      </div>
    </>
  );
};

export default MultiStepForm;
