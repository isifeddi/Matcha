import {
    LOGIN_USER,
    LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR_FIELD,
} from "../actions/loginAction";

import { CLEAR_USER_INFORMATION } from '../actions/logoutAction'


const DEFAULT_STATE = {
  status: 'initialState',
};
  
export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
      case LOGIN_USER:
      return Object.assign({}, state, {
        status: 'loading'
      })
      case LOGIN_USER_SUCCESS:
      return Object.assign({}, state, {
        status: 'success',
        error : null
      })
      case LOGIN_USER_ERROR:
      return Object.assign({}, state, {
        status: 'error',
        error: action.error,
      })
      case LOGIN_USER_ERROR_FIELD:
      return Object.assign({}, state, {
        status: 'errorField',
        error: action.errorField,
      })
      case CLEAR_USER_INFORMATION:
      return DEFAULT_STATE
      default:
        return state;
    }
}