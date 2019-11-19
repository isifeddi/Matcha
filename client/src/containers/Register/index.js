import Register from '../../components/Register';
import {InscriptionAction} from '../../actions/registerAction';
import {connect} from "react-redux";
import {reduxForm } from 'redux-form';
import axios from 'axios';

const usernameValidate = (values, dispatch, props) => axios.post("http://localhost:5000/availableUsername",{username : values.username})
.then((res) => {
        let error = {};
        if (res.data === false) {
            if (props.asyncErrors) {
                error = {"username": "That username is taken", "email": "That email is taken"};
            }
            else {
                error = {"username": "That username is taken"};
            }
        }
        else if (props.asyncErrors) {
            error = {"email": "That email is taken"};
        }
        throw error;
});

const emailValidate = (values, dispatch, props) => axios.post("http://localhost:5000/availableEmail",{email : values.email})
.then((res) => {
        let error = {};
        if (res.data === false) {
            if (props.asyncErrors) {
                error =  {"username": "That username is taken", "email": "That email is taken"};
            }
            else{
                error =  {"email": "That email is taken"};
            }
        }
        else if (props.asyncErrors){
            error =  {"username": "That username is taken"};
        }
        throw error;
});

function composeAsyncValidators (validatorFns) {
  return async (values, dispatch, props, field) => {
    if (!field) {
      return await function () {
        return true;
      };
    }
    const validatorFn = validatorFns[field];
    await validatorFn(values, dispatch, props, field);
  };
}

const asyncValidateAll = composeAsyncValidators({
  "username": usernameValidate,
  "email": emailValidate
});

const validate = (values) => {
    const errors = {};
    const requiredFields = [
        'firstname',
        'lastname',
        'username',
        'email',
        'password',
        'confirmPassword',
    ];

    requiredFields.forEach(field => {
        if (!values[field] || !values[field].trim()) {
            errors[field] = 'Required !';
        }
    });

    if(values.username && !/^[a-z0-9_-]{2,20}$/.test(values.username))
        errors.username = 'Username can contain 2-20 characters, letters (a-z), numbers, "_" and "-"';
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
        errors.email = "Invalid email address !";
    if(values.password && !/\d/.test(values.password))
        errors.password = "Password must contain a number !"
    else if(values.password && !/[A-Z]/.test(values.password))
        errors.password = "Password must contain an uppercase letter !"
    else if(values.password && !/[a-z]/.test(values.password))
        errors.password = "Password must contain a lowercase letter !"
    else if(values.password && !/[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(values.password))
        errors.password = "Password must contain a special character !"
    else if(values.password && !/[a-zA-Z0-9 !@#$%^&*()_+\-=[\]{};':"\\|,.<>/? ]{8,20}/.test(values.password))
        errors.password = "Password must contain 8-20 characters !"
    if(values.confirmPassword && values.password !== values.confirmPassword)
        errors.confirmPassword = "Passwords does not match !"
    return errors;
}

const mapStateToProps = (state) => (
{
    "form" : state.form,
    "status" : state.register
});
const mapDispatchToProps = {
    "registerAction": InscriptionAction
};
const mergeProps = (stateProps, dispatchProps, otherProps)=> ({
    ...stateProps,
    ...dispatchProps,
    ...otherProps,
    "handleSubmit" : otherProps.handleSubmit((form)=>{
        dispatchProps.registerAction(form);
    })
});

const connectedRegisterContainer = connect(mapStateToProps, mapDispatchToProps,mergeProps)(Register); 
const RegisterContainer = reduxForm({
    form : "register",
    "destroyOnUnmount": true,  
    validate,
    "asyncValidate": asyncValidateAll,
    "asyncBlurFields": ["username", "email"]

})(connectedRegisterContainer);


export default RegisterContainer;