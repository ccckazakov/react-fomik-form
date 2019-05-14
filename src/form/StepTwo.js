import React from 'react';
import { pathOr, isEmpty } from 'ramda';
import { Formik, Form } from 'formik';
import Button from '@material-ui/core/Button';
import useFormStyles from '../hooks/useFormStyles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

const StepTwo = ({ onNext, onBack, currentStep, allStepsData }) => {
  const classes = useFormStyles();
  const optionValue = pathOr('', [currentStep, 'optionValue'])(allStepsData);

  return (
    <Formik initialValues={{ optionValue }} onSubmit={onNext} validate={validator}>
      {({ values, errors, handleChange }) => {
        return (
          <Form className={classes.form}>
            <div className={classes.fieldsArea}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Choose Option A or B</FormLabel>
                <RadioGroup
                  name="optionValue" // set the name to the key 'optionValue'
                  aria-label="options"
                  className={classes.group}
                  value={values.optionValue}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="optionA"
                    control={<Radio color="primary" />}
                    label="Option A"
                  />
                  <FormControlLabel
                    value="optionB"
                    control={<Radio color="primary" />}
                    label="Option B"
                  />
                </RadioGroup>
              </FormControl>
              <FormHelperText className={classes.helperText} variant="filled" error>
                {pathOr('', ['optionValue'])(errors)}
              </FormHelperText>
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

export default StepTwo;

export const validator = values => {
  let errors = {};
  
  if (isEmpty(values.optionValue)) {
    errors.optionValue = 'This is required. Please select Option A or B.';
  }
  return errors;
};