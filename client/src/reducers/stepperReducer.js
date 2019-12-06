import {
    INC_STEPPER,
    DEC_STEPPER
} from "../actions/stepperAction";



const DEFAULT_STATE =  0;

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
      case INC_STEPPER:
      return state + 1;
      case DEC_STEPPER:
      return state - 1;
      default:
        return state;
    }
}