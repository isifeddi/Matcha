import {
    RESET_PASSWORD,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_ERROR
} from "../actions/resetPasswordAction";

const DEFAULT_STATE = {
  status: 'initialState',
  error: null
};
export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
      case RESET_PASSWORD:
        return {status: 'loading', error: null}
      case RESET_PASSWORD_SUCCESS:
      return {status: 'success',error: null}
      case RESET_PASSWORD_ERROR:
        return {status: 'error',error: action.error}
      default:
        return state;
    }
}