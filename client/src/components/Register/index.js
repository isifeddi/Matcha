import React  from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from '../../containers/Register/validate'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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

const Register = props => {
    const {handleSubmit, renderField} = props;
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}> 
      <Avatar className={classes.avatar}>
            <LockRoundedIcon/>
          </Avatar>
        <Typography component="h1" variant="h5" color="primary">
          Sign up
        </Typography>
        <form  className={classes.form} onSubmit = {handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <Field
                            name="firstname"
                            component={renderField}
                            label="Firstname"
                            type = "text"
                       />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Field
                            name="lastname"
                            component={renderField}
                            label="Lastname"
                            type = "text"
                       />
            </Grid>
            <Grid item xs={12}>
            <Field
                            name="username"
                            component={renderField}
                            label="Username"
                            type = "text"
                       />
            </Grid>
            <Grid item xs={12}>
            <Field
                            name="email"
                            component={renderField}
                            label="Email"
                            type = "email"
                       />
            </Grid>
            <Grid item xs={12}>
            <Field
                            name="password"
                            component={renderField}
                            label="Password"
                            type="password"
                       />
            </Grid>
            <Grid item xs={12}>
            <Field
                            name="confirmPassword"
                            component={renderField}
                            label="ConfirmPassword"
                            type="password"
                       />
            </Grid>
            <Grid item xs={12}>
         <Button   className={classes.submit} fullWidth variant="contained" type="submit" color="primary">Submit</Button>
            </Grid>
          </Grid>
          
          
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login" style={{textDecoration: 'none', color:'#3f51b5'}}>
                Already have an account? Sign in  
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default reduxForm({
    form : "Register",
    validate
})(Register)
