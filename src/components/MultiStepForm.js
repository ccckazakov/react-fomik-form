import React, { useReducer, useCallback, useMemo, cloneElement } from 'react';
import { equals } from 'ramda';
import StepFlow from './StepFlow';
import useFormStyles from '../hooks/useFormStyles';

const initialState = {
  beforeStep: 0,
  currentStep: 1,
  allStepsData: {},
};

// get the next step
const nextStep = (currentStep, payload) => {
  if (currentStep === 2 && payload.optionValue === "optionB") return 6;
  if (currentStep === 3 && !payload.checkThree && (payload.checkOne || payload.checkTwo)) return 5;
  return currentStep + 1;
}

// save the form data to 'allStepsdata' and handle the next step
export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'next': {
      const { currentStep, allStepsData } = state;
      const currentStepData = allStepsData[currentStep] || {};

      let newAllStepsData = {};
      if (!equals(currentStepData, payload)) {
        for (let i = 2; i < currentStep; i++) {
          if (i === 4 || i === 6) continue;
          newAllStepsData[i] = allStepsData[i];
        }
      } else {
        newAllStepsData = allStepsData;
      }
      newAllStepsData[currentStep] = payload;

      return {
        allStepsData: newAllStepsData,
        beforeStep: currentStep,
        currentStep: nextStep(currentStep, payload)
      };
    }
    case 'back':
      return {
        ...state,
        currentStep: state.beforeStep,
      };
    default:
      return state;
  }
};

const MultiStepForm = ({ children, showFlow }) => {
  const [formState, dispatch] = useReducer(reducer, initialState);

  const handleNext = useCallback(payload => dispatch({ type: 'next', payload }));
  const handleBack = useCallback(() => dispatch({ type: 'back' }));
  const hanleSubmit = useCallback(() => console.log(formState));

  const stepLabels = useMemo(() => children.map(child => child.props.label));

  const { currentStep, allStepsData } = formState;
  const currentStepComponent = children[currentStep - 1];

  const classes = useFormStyles();

  // pring the log
  const printLog = () => {
    let log = [];
    for (let i = 2; i < formState.currentStep; i++) {
      if (!formState.allStepsData[i]) continue;
      let str = '';
      Object.keys(formState.allStepsData[i]).forEach(key => {
        str += key + ': ' + formState.allStepsData[i][key] + ' ';
      })
      log.push(<div key={i}>Step {i} ----- {str}</div>);
    }
    return log;
  }

  return (
    <>
      {showFlow && <StepFlow currentStep={currentStep} stepLabels={stepLabels} />}
      {cloneElement(currentStepComponent, {
        key: currentStepComponent.props.label,
        onNext: handleNext,
        onBack: handleBack,
        onSubmit: hanleSubmit,
        allStepsData,
        currentStep,
      })}
      <div className={classes.log}>
        Console
        { printLog()  }
      </div>
    </>
  );
};

export default MultiStepForm;
