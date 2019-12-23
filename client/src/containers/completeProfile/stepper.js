import React, { useEffect } from 'react';
import Stepper from '../../components/completeProfile/stepper';
import {getOptions} from '../../actions/addInfoAction';
import {getImages} from '../../actions/imagesAction';
import {connect} from "react-redux";
import {decStepper, incStepper} from '../../actions/stepperAction';

const StepperContainer = (props) => {
    const { user, images, getImages, getOptions, decStepper, incStepper} = props;
    useEffect(() => {
        if(user){
            getOptions();
            getImages(user.id);
        }
    }, []);
    const handleBack = () => {
        decStepper();
    }
    const handleNext = () => {
        incStepper();
    }
    return (
        <Stepper handleBack={handleBack} handleNext={handleNext} user={user} images={images}/>
    )
}

const mapStateToProps = (state) => (
{
    "user": state.user,
    "images" : state.images
});
const mapDispatchToProps = {
    "getOptions": getOptions,
    "getImages" : getImages,
    "decStepper": decStepper,
    "incStepper": incStepper,
};

export default connect(mapStateToProps, mapDispatchToProps)(StepperContainer);