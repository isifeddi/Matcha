import {
    INC_STEPPER,
    DEC_STEPPER,
    GET_ACTIVE_STEP,
    GET_ACTIVE_STEP_SUCCESS
} from "../actions/stepperAction";

import {ADD_INFO_SUCCESS} from "../actions/addInfoAction";

const DEFAULT_STATE =  0;

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case GET_ACTIVE_STEP:
            return 'loading';
        case GET_ACTIVE_STEP_SUCCESS:
            return action.step;
        case INC_STEPPER:
            return state + 1;
        case DEC_STEPPER:
            return state - 1;
        case ADD_INFO_SUCCESS:
            return state + 1 ;
        default:
            return state;
    }
}