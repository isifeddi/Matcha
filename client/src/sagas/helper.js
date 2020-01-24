import {call, select} from "redux-saga/effects";
import axios from "axios";



export const request = (config, token)=> {

  const responsePromise = axios({
    ...config,
    "headers": {"Authorization": token},
  });
  return responsePromise;
};

export const apiCall =
  function *apiCall (config) {
    const token = yield select((state) => state.user.get("token"));
    try {
      return yield call(request, config, token);
    } catch (error) {
      throw Error(error);
    }
  };