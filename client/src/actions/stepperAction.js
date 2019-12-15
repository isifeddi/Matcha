export const INC_STEPPER = "INC_STEPPER";
export const DEC_STEPPER = "DEC_STEPPER";
export const GET_ACTIVE_STEP = "GET_ACTIVE_STEP";
export const GET_ACTIVE_STEP_SUCCESS = "GET_ACTIVE_STEP_SUCCESS";

export const incStepper= () => ({
  "type": INC_STEPPER
});

export const decStepper = () => ({
    "type": DEC_STEPPER,
});

export const getActiveStep = (id) => ({
  "type": GET_ACTIVE_STEP,
  'id': id
})

export const getActiveStepSuccess = (step) => ({
  "type": GET_ACTIVE_STEP_SUCCESS,
  step
});