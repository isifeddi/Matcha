import {
    EMAIL_CONFIRMATION,
    EMAIL_CONFIRMATION_SUCCESS,
    EMAIL_CONFIRMATION_ERROR
} from "../actions/emailConfirmation";

const DEFAULT_STATE = {
  status: 'initialState',
};

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
      case EMAIL_CONFIRMATION:
        return "loading"
      case EMAIL_CONFIRMATION_SUCCESS:
      return "success"
      case EMAIL_CONFIRMATION_ERROR:
        return "error"
      default:
        return state;
    }
}