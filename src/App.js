import React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';

import MultiStepForm from './components/MultiStepForm';
import StepOne from './form/StepOne';
import StepTwo from './form/StepTwo';
import StepThree from './form/StepThree';
import StepFour from './form/StepFour';
import StepFive from './form/StepFive';
import StepSix from './form/StepSix';

const App = () => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Paper className={classes.formWrapper}>
          <MultiStepForm>
            <StepOne    label="Step 1" />
            <StepTwo    label="Step 2" />
            <StepThree  label="Step 3" />
            <StepFour   label="Step 4" />
            <StepFive   label="Step 5" />
            <StepSix    label="Step 6" />
          </MultiStepForm>
        </Paper>
      </div>
    </MuiThemeProvider>
  );
};

export default App;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    width: '100vw',
    height: 'auto',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formWrapper: {
    width: '50%',
    height: 'auto',
    padding: 30,
  },
});
