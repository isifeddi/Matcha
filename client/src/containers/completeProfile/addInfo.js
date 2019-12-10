import AddInfo from '../../components/completeProfile/addInfo';
import {connect} from "react-redux";
import {reduxForm} from 'redux-form';
import {incStepper} from '../../actions/stepperAction';
import {createOption, addInfo} from '../../actions/addInfoAction';

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
    if(values.bio && !/^.{1,200}$/.test(values.bio))
        errors.bio = 'maximum 200 charachters';

    if(values.birthday && !/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/.test(values.birthday))
        errors.birthday = 'Invalid date !';
    let today = new Date();
    let birthDate = new Date(values.birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if(age < 18)
        errors.birthday = "Come back when you're 18 ;)"
    if(age > 120)
        errors.birthday = 'Invalid age !'
    return errors;
}

const mapStateToProps = (state) => (
{
    'values' : state.form.values,
    'selectOptions': state.select.selectOptions,
    'selectLoading': state.select.selectLoading,
    'selectError' : state.select.error
});
const mapDispatchToProps = {
    "addInfo": addInfo,
    "incStepper": incStepper,
    "createOption": createOption
};
const mergeProps = (stateProps, dispatchProps, otherProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...otherProps,
    "handleSubmit" : otherProps.handleSubmit((values) => {
        dispatchProps.addInfo(values);
    }),
});

const connectedAddInfoContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(AddInfo);

const AddInfoContainer = reduxForm({
    form : "addInfo",
    "destroyOnUnmount": false,
    validate,
})(connectedAddInfoContainer);

export default AddInfoContainer;