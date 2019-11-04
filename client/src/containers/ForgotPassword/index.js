import React from 'react'
import TextField from '@material-ui/core/TextField';
import ForgotPassword from '../../components/ForgotPassword'


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
 
const forgotPasswordContainer = ()=> {
    return (
        <div>
            <ForgotPassword 
                onSubmit={submit}
                renderField = {renderField}
            />
        </div>
    )
}
export default forgotPasswordContainer;
  