import AddInfo from '../../components/completeProfile/addInfo';
//import {LoginAction} from '../../actions/loginAction';
import {connect} from "react-redux";
import {reduxForm} from 'redux-form';

const validate = (values) => {
    
    console.log(values.interests);
    const errors = {};
    const requiredFields = [
        'gender',
        'sexOrient',
        'bio',
    ];
    const requiredarr = [
        'interests'
    ];
    requiredFields.forEach(field => {
        
        if (!values[field] || !values[field].trim()) {
            errors[field] = 'Required !';
        }
    });
    requiredarr.forEach(field => {
        
        if (!values[field]) {
            errors[field] = 'Required !';
        }
    });
    return errors;
}

const mapStateToProps = (state) => (
{
    "form" : state.form,
});
const mapDispatchToProps = {
    //"addInfoAction": AddInfoAction
};
const mergeProps = (stateProps, dispatchProps, otherProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...otherProps,
    "handleSubmit" : otherProps.handleSubmit((form) => {
        //dispatchProps.addInfoAction(form);
    })
});

const connectedAddInfoContainer = connect(mapStateToProps, mapDispatchToProps,mergeProps)(AddInfo);

const AddInfoContainer = reduxForm({
    form : "addInfo",
    "destroyOnUnmount": true,
    validate,
})(connectedAddInfoContainer);

export default AddInfoContainer;