import React from 'react';
import { pathOr, isEmpty } from 'ramda';
import { Formik, Form } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useFormStyles from '../hooks/useFormStyles';
import FormLabel from '@material-ui/core/FormLabel';

const StepFive = ({ onNext, currentStep, allStepsData }) => {
  const classes = useFormStyles();
  const sumValue = pathOr('', [currentStep, 'sumValue'])(allStepsData);

  return (
    <Formik initialValues={{ sumValue }} onSubmit={onNext} validate={validator}>
      {({ values, errors, handleChange }) => {
        return (
          <Form className={classes.form}>
            <div className={classes.fieldsArea}>
              <FormLabel component="legend">What is 1 + 1?</FormLabel>
              <TextField
                className={classes.field}
                name="sumValue"
                label="The Value"
                type="number"
                value={values.sumValue}
                onChange={handleChange}
                error={!!errors.sumValue}
                helperText={errors.sumValue || ' '}
              />
            </div>
            <div className={classes.buttonsArea}>
              <div />
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

export default StepFive;

export const validator = values => {
  let errors = {};

  if (isEmpty(values.sumValue)) {
    errors.sumValue = 'Required.';
  }

  return errors;
};