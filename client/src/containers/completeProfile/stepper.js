import React, { Component } from 'react';
import Stepper from '../../components/completeProfile/stepper';
import {getOptions} from '../../actions/addInfoAction';
import {connect} from "react-redux";

class StepperContainer extends Component {
    componentDidMount = () => {
        this.props.getOptions();
    }

    render() {
        return (
            <Stepper activeStep={this.props.activeStep} />
        )
    }
}

const mapStateToProps = (state) => (
{
    "activeStep" : state.activeStep,
});
const mapDispatchToProps = {
    "getOptions": getOptions
};

export default connect(mapStateToProps, mapDispatchToProps)(StepperContainer);