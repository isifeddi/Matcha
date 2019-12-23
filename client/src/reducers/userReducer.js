import {
  UPDATE_USER_SUCCESS,
} from "../actions/userAction";
import { CLEAR_USER_INFORMATION } from '../actions/logoutAction';
import { DEC_STEPPER ,INC_STEPPER_SUCCESS} from "../actions/stepperAction";
import { GET_LOC_SUCCESS} from "../actions/addInfoAction";

export default function (state = null, action) {
    switch (action.type) {
      case UPDATE_USER_SUCCESS:
        return action.data;
      case CLEAR_USER_INFORMATION:
        return null;
      case DEC_STEPPER:
        return {...state, complete: state.complete - 1}
      case INC_STEPPER_SUCCESS:
        return {...state, complete: state.complete + 1}
      case GET_LOC_SUCCESS:
        return {...state, lat: action.loc.lat, lng: action.loc.lng}
      default:
        return state;
    }
}