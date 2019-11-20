import {
    LOGIN_USER,
    LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR_FIELD
    
} from "../actions/loginAction";
  
export default function (state = {status: 'initialState'}, action) {
    switch (action.type) {
    case LOGIN_USER:
    return Object.assign({}, state, {
      status: 'loading'
    })
    case LOGIN_USER_SUCCESS:
    return Object.assign({}, state, {
      status: 'success',
      data: action.data,
      error : null
    })
    case LOGIN_USER_ERROR:
    return Object.assign({}, state, {
      status: 'error',
      error: action.error,
      data : null
    })
    case LOGIN_USER_ERROR_FIELD:
    return Object.assign({}, state, {
      status: 'errorField',
      error: action.errorField,
      data : null
    })
    default:
      return state;
    }
}
