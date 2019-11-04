
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const Input = (props) => {

    const classes = useStyles();

    return (
        <div>
            <TextField
                id={props.name}
                label={props.name}
                value = {props.data}
                name = {props.name}
                margin="dense"
                variant="outlined"
                rowsMax="4"
                className={classes.textField}
            />
        </div>
    )
}

export default Input;

