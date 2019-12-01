import {
    SEND_EMAIL,
    SEND_EMAIL_SUCCESS,
    SEND_EMAIL_ERROR
} from "../actions/sendEmail";

const DEFAULT_STATE = {
  status: 'initialState',
  error: null
};

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
      case SEND_EMAIL:
        return {status: "loading", errors: null}
      case SEND_EMAIL_SUCCESS:
      return {status: "success", errors: null}
      case SEND_EMAIL_ERROR:
        return {status: "error", errors: action.error}
      default:
        return state;
    }
}