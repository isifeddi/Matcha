import AddInfo from '../../components/completeProfile/addInfo';
//import {LoginAction} from '../../actions/loginAction';
import {connect} from "react-redux";
import {reduxForm} from 'redux-form';
import {incStepper} from '../../actions/stepperAction'
const validate = (values) => {
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
    
});
const mapDispatchToProps = {
    "incStepper": incStepper
};

const mergeProps = (stateProps, dispatchProps, otherProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...otherProps,
    "handleSubmit" : otherProps.handleSubmit(() => {
        dispatchProps.incStepper();
    })
});

const connectedAddInfoContainer = connect(mapStateToProps, mapDispatchToProps,mergeProps)(AddInfo);

const AddInfoContainer = reduxForm({
    form : "addInfo",
    "destroyOnUnmount": true,
    validate,
})(connectedAddInfoContainer);

export default AddInfoContainer;