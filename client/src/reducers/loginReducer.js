import {
    LOGIN_USER,
    LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS
} from "../actions/loginAction";
  
export default function (state = {status: 'idl'}, action) {
    switch (action.type) {
    case LOGIN_USER:
      return {status:"loading"};
    case LOGIN_USER_SUCCESS:
      return {status:"success", data: action.data};
    case LOGIN_USER_ERROR:
      return {status:"error", error: action.error};
    default:
      return state;
    }
}