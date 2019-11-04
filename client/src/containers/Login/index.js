import React from 'react'
import TextField from '@material-ui/core/TextField';
import Login from '../../components/Login'


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
const submit = values => {
    window.alert (JSON.stringify (values));
};
 
const loginContainer = ()=> {
    return (
        <div>
            <Login 
                onSubmit={submit}
                renderField = {renderField}
            />
        </div>
    )
}
export default loginContainer;
  
