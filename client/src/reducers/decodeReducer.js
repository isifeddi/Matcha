import {
    DECODE_TOKEN,
    DECODE_TOKEN_SUCCESS,
    DECODE_ERROR
  } from "../actions/decodeAction";
  
  export default function (state = null, action) {
    switch (action.type) {
    case DECODE_TOKEN:
      return null
    case DECODE_TOKEN_SUCCESS:
      return action.data;
    case DECODE_ERROR:
      return  null;
    default:
      return state;
    }
  }