import {
    DECODE_TOKEN,
    DECODE_TOKEN_SUCCESS,
    DECODE_ERROR
  } from "../actions/decodeAction";
import { CLEAR_USER_INFORMATION } from '../actions/logoutAction'
  
  export default function (state = null, action) {
    switch (action.type) {
    case DECODE_TOKEN:
      return null
    case DECODE_TOKEN_SUCCESS:
      return action.data;
    case DECODE_ERROR:
      return  null;
    case CLEAR_USER_INFORMATION:
      return null
    default:
      return state;
    }
}