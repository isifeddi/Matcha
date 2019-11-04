import React from 'react';
import {Field, reduxForm} from 'redux-form';
import validate from '../../containers/Login/validate'
import Avatar from '@material-ui/core/Avatar';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
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
const Login = (props) => {
  const classes = useStyles();
    const {handleSubmit, renderField} = props;
    return (
     <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}> 
      <Avatar className={classes.avatar}>
            <LockRoundedIcon/>
      </Avatar>
        <Typography component="h1" variant="h5" color="primary">
          Sign in
        </Typography>
        <form  className={classes.form} onSubmit = {handleSubmit}>
          
            <Grid item xs={12}>
            <Field
                            name="username"
                            component={renderField}
                            label="Username"
                            type = "text"
                       />
            </Grid>
            <br/>
          
            <Grid item xs={12}>
            <Field
                            name="password"
                            component={renderField}
                            label="Password"
                            type="password"
                            
                       />
            </Grid>
           
            <Grid item xs={12}>
         <Button  className={classes.submit} fullWidth variant="contained" type="submit" color="primary">Submit</Button>
            </Grid>
          
          
          
          <Grid container justify="flex-end">
          <Grid item xs>
              <Link to="/forgotPassword"  style={{textDecoration: 'none', color:'#3f51b5'}}>
                  Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/register" style={{textDecoration: 'none', color:'#3f51b5'}}>
                
                  Don't have an account? Sign Up
                
              </Link>
              
            </Grid>
          </Grid>
        </form>
      </div>
      
    </Container> 
    )
  }

  export default reduxForm ({
    form: 'Login',
    validate
  }) (Login);
  
 
 