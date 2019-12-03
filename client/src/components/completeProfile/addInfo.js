import React  from 'react';
import {Field} from 'redux-form';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import CreatableSelect from 'react-select/creatable';
//import Autocomplete from "@material-ui/lab/Autocomplete";

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
        backgroundColor: theme.palette.secondary.main,
    }
}));

const RadioGroup = (props) => {
    const { input, meta, options } = props;
    const hasError = meta.touched && meta.error;

    return (
      <div>
        {options.map(o => <label key={o.value}> 
          <Radio {...input}  checked={o.value === input.value} value={o.value} />
          {o.title}</label>)}<br/>
        {hasError && <span style={{'fontSize':'12px','color':'rgb(244, 67, 54)'}}>{meta.error}</span>}
      </div>
    );
}
const renderField = ({rows, type, input, label, meta : { touched, error}}
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
const sel = ({ input, meta: { touched, error } ,...field}) => (
  <div>
    <CreatableSelect
      isMulti
      isDisabled={false}
      isLoading={false}
      //onCreateOption
      options={interOptions}
      error = {touched && error}
      helperText={touched && error}
      onBlur={() => input.onBlur(input.value)}
      onChange={(value) => { input.onChange(value)} }
      {...field}
    />
    <div>{(touched && error) &&
      <div style={{'fontSize':'12px','color':'rgb(244, 67, 54)'}}>Required!</div>}</div>
  </div>
);

export const interOptions = [
  { value: 'Sport', label: 'Sport' },
  { value: 'Reading', label: 'Reading' },
  { value: 'Swimming', label: 'Swimming' },
  { value: 'Travel', label: 'Travel' },
  { value: 'Gaming', label: 'Gaming' },
  { value: 'Photograph', label: 'Photograph' },
  { value: 'Vegan', label: 'Vegan' },
  { value: 'Adventure', label: 'Adventure' },
  { value: 'Art', label: 'Art' },
  { value: 'Music', label: 'Music' },
];


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
            <FormLabel component="legend">Match with</FormLabel>
              <Field component={RadioGroup} name="sexOrient" required={true} options={[
                    { title:  'Men ' , value: 'men'  },
                    { title:  'Women', value: 'women'},
                    { title:  'Both' , value: 'both' }
                  ]}
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel component="legend">Bio</FormLabel>
              <Field
                name="bio"
                component={renderField}
                type = "text"
                rows='4'
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel component="legend">Interests</FormLabel>
                {/* <CreatableSelect
                  isMulti
                  isDisabled={false}
                  isLoading={false}
                  onChange={sel}
                  //onCreateOption
                  options={colourOptions}
                  style={{borderColor: sel ? '#b94a48' : '#aaa'}}
                /> */}
                <Field name='interests' component={sel}/>
              
            </Grid>
            <Grid  container direction="row" item xs={12}>
              <Grid item xs={9}/>
              <Grid item container alignItems="flex-end" xs={3}>
                <Button  onClick={handleSubmit} className={classes.submit} fullWidth variant="contained" type="submit" color="primary" name="submit" value="ok" >Next</Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
      
    </Container>
  );
}

export default AddInfo;