import { makeStyles } from '@material-ui/styles';

const useFormStyles = makeStyles({
  form: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  fieldsArea: {
    display: 'flex',
    flexDirection: 'column',
  },
  field: {
    marginBottom: '20px!important',
  },
  compondField: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  helperText: {
    textAlign: 'center!important',
  },
  addButton: {
    margin: '20px 0',
  },
  buttonsArea: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  gridContainer: {
    marginTop: '20px!important',
  },
  log: {
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    height: '250px',
    overflowY: 'auto',
    background: 'black',
    color: 'white',
    padding: '10px',
  }
});

export default useFormStyles;
