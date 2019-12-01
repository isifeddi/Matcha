import {LOGIN_USER_SUCCESS} from "../actions/loginAction";

import { CLEAR_USER_INFORMATION } from '../actions/logoutAction'
  
export default function (state = null, action) {
    switch (action.type) {
      case LOGIN_USER_SUCCESS:
        return  action.token
      case CLEAR_USER_INFORMATION:
        return null
      default:
        return state;
    }
}