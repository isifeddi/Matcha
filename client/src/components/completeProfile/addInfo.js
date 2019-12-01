import React  from 'react';
import { Field} from 'redux-form';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(2, 0, 2),
        backgroundColor: theme.palette.secondary.main
    },
    add: {
        margin: theme.spacing(1, 0, 2),
        backgroundColor: theme.palette.secondary.main
    },
}));

const RadioGroup = (props) => {
    const { input, meta, options } = props
    const hasError = meta.touched && meta.error;

    return (
      <div>
        {options.map(o => <label key={o.value}> 
          <Radio {...input}  checked={o.value === input.value} value={o.value} />
          {o.title}</label>)}<br/>
        {hasError && <span style={{fontSize: '0.75rem', color:'#ff3d2e'}}>{meta.error}</span>}
      </div>
    );
}
const renderField = (
    {rows, type, input, label, meta : { touched, error}}
    ) => (
        <TextField
            {...input}
            type = {type}
            label = {label}
            error = {touched && error}
            helperText={touched && error}
            variant="outlined"
            fullWidth
            multiline
            rows={rows}
        />
)
const AddInfo = (props) => {
  const {handleSubmit} = props;
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      
    <div className={classes.paper}>
        <Typography component="h1" variant="h5" color="primary">
          Additional infos
        </Typography>
        
        <form  className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormLabel component="legend">Gender</FormLabel>
              <Field component={RadioGroup} name="gender" required={true} options={[
                    { title: 'Male', value: 'male' },
                    { title: 'Female', value: 'female' }
                  ]}
              />
            </Grid>
            <Grid item xs={12}>
            <FormLabel component="legend">Sexual orientation</FormLabel>
              <Field component={RadioGroup} name="sexOrient" required={true} options={[
                    { title: 'Men', value: 'men' },
                    { title: 'Women', value: 'women' },
                    { title :'Both' , value: 'both' }
                  ]}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="bio"
                component={renderField}
                label="Bio"
                type = "text"
                rows='4'
              />
            </Grid>

            <Grid container item xs={12} spacing={1}>
                <Grid item xs={10}>
                <Field
                  name="interests"
                  component={renderField}
                  label="interests"
                  type = "text"
                  rows='1'
                />
                </Grid>
                <Grid item xs={2}>
                <Button className={classes.add} fullwidth variant="contained" type="submit" color="primary" name="submit" value="ok" >Add</Button>
                </Grid>
            </Grid>

            <Grid item xs={12}>
              <Button  onClick={handleSubmit} className={classes.submit} fullWidth variant="contained" type="submit" color="primary" name="submit" value="ok" >Next</Button>
            </Grid>
          </Grid>
        </form>
      </div>
      
    </Container>
  );
}

export default AddInfo;