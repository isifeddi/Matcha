import Login from '../../components/Login';
import {LoginAction} from '../../actions/loginAction';
import {connect} from "react-redux";
import {reduxForm} from 'redux-form';
import { SubmissionError } from 'redux-form'


const validate = (values) => {
    const errors = {};
    const requiredFields = [
        'username',
        'password',
    ];
    requiredFields.forEach(field => {
        if (!values[field] || !values[field].trim()) {
            errors[field] = 'Required !';
        }
    });
    return errors;
}

const mapStateToProps = (state) => (
{
    "form" : state.form,
    "status" : state.login.status,
    "error": state.login.error
});
const mapDispatchToProps = {
    "loginAction": LoginAction
};
const mergeProps = (stateProps, dispatchProps, otherProps)=> ({
    ...stateProps,
    ...dispatchProps,
    ...otherProps,
    "handleSubmit" : otherProps.handleSubmit((form)=>{
        dispatchProps.loginAction(form);
        //console.log(error)
    })
});

const connectedLoginContainer = connect(mapStateToProps, mapDispatchToProps,mergeProps)(Login);
const LoginContainer = reduxForm({
    form : "login",
    "destroyOnUnmount": false,  
    validate,

})(connectedLoginContainer);


export default LoginContainer;