import React, { Component } from 'react';
import Stepper from '../../components/completeProfile/stepper';
import {getOptions} from '../../actions/addInfoAction';
import {getActiveStep} from '../../actions/stepperAction';
import {getImages} from '../../actions/imagesAction';
import {connect} from "react-redux";
import  { Redirect } from 'react-router-dom'

class StepperContainer extends Component {
    componentDidMount = () => {
        if(this.props.user){
            this.props.getOptions();
            this.props.getImages(this.props.user.id);
            this.props.getActiveStep(this.props.user.email);
        }
    }
    render() {
        return (
            this.props.user !== null ? <Stepper activeStep={this.props.activeStep} /> : 
            <Redirect to='/login'/>
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
    "getImages" : getImages
};

export default connect(mapStateToProps, mapDispatchToProps)(StepperContainer);