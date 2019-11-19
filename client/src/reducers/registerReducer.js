
import {
  INSCRIPTION_USER,
  INSCRIPTION_USER_ERROR,
  INSCRIPTION_USER_SUCCESS
} from "../actions/registerAction";

export default function (state = "idl", action) {
  switch (action.type) {
  case INSCRIPTION_USER:
    return "loading"
  case INSCRIPTION_USER_SUCCESS:
    return "success";
  case INSCRIPTION_USER_ERROR:
    return "error";
  default:
    return state;
  }
}