import React from 'react';
import TextField from '@material-ui/core/TextField';
const renderField = (
    {type,rows, input, label, meta : { touched, error}}
    ) => (
        <TextField
            type = {type}
            label = {label}
            error = {touched && error}
            helperText={touched && error}
            variant="outlined"
            fullWidth
            multiline
            rows={rows}
            {...input}
        />
)

export default renderField