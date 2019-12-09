import React, { Component } from 'react';
import Stepper from '../../components/completeProfile/stepper';
import {getOptions} from '../../actions/addInfoAction';
import {getImages} from '../../actions/imagesAction'
import {connect} from "react-redux";

class StepperContainer extends Component {
    componentDidMount = () => {
        this.props.getOptions();
        this.props.getImages();
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
    "getOptions": getOptions,
    "getImages" : getImages
};

export default connect(mapStateToProps, mapDispatchToProps)(StepperContainer);