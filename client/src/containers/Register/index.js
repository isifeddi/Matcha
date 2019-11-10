import React from 'react';
import Register from '../../components/Register';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';


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

const submit =  (values) => {
    axios.post('http://localhost:5000/register', values)
};

const RegisterContainer = () => {
    return (
       <Register
            onSubmit = {submit}
            renderField = {renderField}
        /> 
    )
}

export default RegisterContainer;
