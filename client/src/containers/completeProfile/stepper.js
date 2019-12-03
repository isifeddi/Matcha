import Stepper from '../../components/completeProfile/stepper';
import {connect} from "react-redux";

const mapStateToProps = (state) => (
{
    "activeStep" : state.activeStep,
});

const stepperContainer = connect(mapStateToProps)(Stepper);

export default stepperContainer;