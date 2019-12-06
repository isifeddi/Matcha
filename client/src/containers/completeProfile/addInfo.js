import AddInfo from '../../components/completeProfile/addInfo';
import {connect} from "react-redux";
import {reduxForm} from 'redux-form';
import {incStepper} from '../../actions/stepperAction';
import {createOption} from '../../actions/addInfoAction';

const validate = (values) => {
    const errors = {};
    const requiredFields = [
        'gender',
        'sexOrient',
        'birthday',
        'bio',
    ];
    const requiredArr = [
        'interests'
    ];
    requiredFields.forEach(field => {
        if (!values[field] || !values[field].trim()) {
            errors[field] = 'Required !';
        }
    });
    requiredArr.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required !';
        }
    });
    return errors;
}

const mapStateToProps = (state) => (
{
    'selectOptions': state.select.selectOptions,
    'selectLoading': state.select.selectLoading,
    'selectError' : state.select.error
});
const mapDispatchToProps = {
    "incStepper": incStepper,
    "createOption": createOption
};
const mergeProps = (stateProps, dispatchProps, otherProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...otherProps,
    "handleSubmit" : otherProps.handleSubmit(() => {
        dispatchProps.incStepper();
    }),
});

const connectedAddInfoContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(AddInfo);

const AddInfoContainer = reduxForm({
    form : "addInfo",
    "destroyOnUnmount": false,
    validate,
})(connectedAddInfoContainer);

export default AddInfoContainer;