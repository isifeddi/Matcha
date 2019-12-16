import React, { Component } from 'react';
import Stepper from '../../components/completeProfile/stepper';
import {getOptions} from '../../actions/addInfoAction';
import {getActiveStep} from '../../actions/stepperAction';
import {getImages} from '../../actions/imagesAction';
import {connect} from "react-redux";

class StepperContainer extends Component {
    componentDidMount = () => {
        if(this.props.user){
            this.props.getOptions();
            this.props.getImages(this.props.user.id);
            this.props.getActiveStep(this.props.user.id);
        }
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
    "user": state.user
});
const mapDispatchToProps = {
    "getOptions": getOptions,
    "getActiveStep": getActiveStep,
    "getImages" : getImages,
};

export default connect(mapStateToProps, mapDispatchToProps)(StepperContainer);