import {call, select} from "redux-saga/effects";
import axios from "axios";



export const request = (config, token)=> {

  const responsePromise = axios({
    ...config,
    "headers": {"Authorization": token},
  });
  return responsePromise;
};

// const UNAUTHORIZED_STATUS_CODE = 401;
// const NOT_FOUND_STATUS_CODE = 404;
// const FORBIDDEN_STATUS_CODE = 403;

export const apiCall =
  function *apiCall (config) {
    const token = yield select((state) => state.user.get("token"));
    try {
      return yield call(request, config, token);
    } catch (error) {
      // if (error.response && error.response.status === UNAUTHORIZED_STATUS_CODE) {
      //   yield put(clearUserInformation());
      //   yield put(push("/login"));
      // }
      // if (error.response && error.response.status === NOT_FOUND_STATUS_CODE) {
      //   yield put(push("/404"));
      // }
      // if (error.response && error.response.status === FORBIDDEN_STATUS_CODE) {
      //   yield put(push("/404"));
      // }
      throw Error(error);
    }
  };