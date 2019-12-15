import {
    DECODE_TOKEN,
    DECODE_TOKEN_SUCCESS,
    DECODE_ERROR,
  } from "../actions/decodeAction";
import { CLEAR_USER_INFORMATION } from '../actions/logoutAction';
import { ADD_INFO_SUCCESS } from '../actions/addInfoAction';

  export default function (state = null, action) {
    switch (action.type) {
    case DECODE_TOKEN:
      return null;
    case DECODE_TOKEN_SUCCESS:
      return action.data;
    case ADD_INFO_SUCCESS:
      return action.info;
    case DECODE_ERROR:
      return  null;
    case CLEAR_USER_INFORMATION:
      return null;
    default:
      return state;
    }
}