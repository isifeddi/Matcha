import React from 'react';
import {Field, reduxForm} from 'redux-form';
import validate from '../../containers/ForgotPassword/validate'
import Avatar from '@material-ui/core/Avatar';
import SendTwoToneIcon from '@material-ui/icons/SendTwoTone';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
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
const ForgotPassword = (props) => {
  const classes = useStyles();
    const {handleSubmit, renderField} = props;
    return (
     <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}> 
      <Avatar className={classes.avatar}>
            <SendTwoToneIcon/>
      </Avatar>
        <Typography component="h1" variant="h5" color="primary">
          Send reset link
        </Typography>
        <form  className={classes.form} onSubmit = {handleSubmit}>
          
            <Grid item xs={12}>
            <Field
                            name="email"
                            component={renderField}
                            label="Email"
                            type = "email"
                       />
            </Grid>
           
            <Grid item xs={12}>
         <Button  className={classes.submit} fullWidth variant="contained" type="submit" color="primary">Submit</Button>
            </Grid>
        </form>
      </div>
    </Container> 
    )
  }

  export default reduxForm ({
    form: 'ForgotPassword',
    validate
  }) (ForgotPassword);