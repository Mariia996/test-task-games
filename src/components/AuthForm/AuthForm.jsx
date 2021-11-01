import { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Grid, TextField, Paper, Typography, Button } from '@mui/material';
import { useFormik, form } from 'formik';
import { initialValues, getValidationSchema } from './config';
import { logIn } from '../../redux/auth/auth-operations';
import { getError } from '../../redux/auth/auth-selectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    margin: '0 auto',
    padding: '20px',
    width: 500,
    height: 400,
  },
  inputContainer: {
    margin: '0 auto',
    width: 300,
  },
  formTitle: {
    marginBottom: '20px',
  },
  formContainer: {
    width: '100%',
    height: '100%',
  },
  submitBtn: {
    marginTop: '15px',
  },
}));

const AuthForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const error = useSelector(state => getError(state), shallowEqual);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: getValidationSchema(),
    onSubmit: values => {
      dispatch(logIn(values));
    },
  });

  useEffect(() => {
    if (error) {
      const errorMessage = error.message.includes('400')
        ? 'Incorrect email or password'
        : 'Oops! Something went wrong. Try later.';
      toast.error(errorMessage, { position: toast.POSITION.TOP_RIGHT });
    }
  }, [error]);

  const field = (name, label, type = 'string') => (
    <TextField
      error={formik.touched[name] && formik.errors[name]}
      variant="outlined"
      margin="normal"
      fullWidth
      onChange={formik.handleChange}
      id={name}
      label={label}
      name={name}
      value={formik.values[name]}
      helperText={formik.touched[name] && formik.errors[name]}
      type={type}
      inputProps={{ min: 0 }}
    />
  );
  return (
    <>
      <Paper className={classes.paper}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignitems="center"
          className={classes.formContainer}
        >
          <Typography
            component="h2"
            variant="h4"
            align="center"
            className={classes.formTitle}
          >
            Welcome!
          </Typography>
          <Typography component="p" align="center">
            Please login to start
          </Typography>
          <Grid container direction="column" className={classes.inputContainer}>
            <form noValidate onSubmit={formik.handleSubmit}>
              <Grid item>{field('username', 'Enter your name')}</Grid>
              <Grid item>
                {field('password', 'Enter your password', 'password')}
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submitBtn}
              >
                Login
              </Button>
            </form>
          </Grid>
        </Grid>
      </Paper>
      <ToastContainer />
    </>
  );
};

export default AuthForm;
