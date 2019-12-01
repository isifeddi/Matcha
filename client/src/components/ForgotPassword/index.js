import React from 'react';
import {Field} from 'redux-form';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import SendTwoToneIcon from '@material-ui/icons/SendTwoTone';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MySnackBar from '../commun/snackBar'
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
 
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.secondary.main
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
 
}));

const renderField = (
  {type, input, label, meta : {touched, error}}
  ) => (
   <TextField
       {...input}
       type = {type}
       label = {label}
       error = {touched && error}
       helperText={touched && error}
       variant="outlined"
      fullWidth
   />
)

const ForgotPassword = (props) => {
  const classes = useStyles();
    const {handleSubmit, status, errors} = props;
    console.log(errors);
    return (
     <Container component="main" maxWidth="xs">
      <CssBaseline />
      {status === "success" && <MySnackBar variant="success" message='Please check your e-mail'/>}
      {status === "error" && <MySnackBar variant="error" message={errors}/>}
      {status !== 'loading' && <div className={classes.paper}> 
      <Avatar className={classes.avatar}>
            <SendTwoToneIcon/>
      </Avatar>
        <Typography component="h1" variant="h5" color="primary">
          Send reset link
        </Typography>
        <form  className={classes.form}>
            <Grid item xs={12}>
              <Field
                  name="email"
                  component={renderField}
                  label="Email"
                  type = "email"
              />
            </Grid>

            <Grid item xs={12}>
            <Button  className={classes.submit} fullWidth variant="contained" type="submit" color="primary" onClick={handleSubmit}>Submit</Button>
            </Grid>
        </form>
      </div>}

      {status === "loading" && <div className={classes.paper} style={{marginTop: "300px"}}><CircularProgress color="secondary" /></div>}

    </Container>
    )
  }

  export default ForgotPassword;