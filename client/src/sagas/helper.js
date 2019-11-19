// @flow

import {CANCEL} from "redux-saga";
import {call, put, select} from "redux-saga/effects";
import axios from "axios";
import {clearUserInformation} from "../actions/loginAction";
import {push} from "react-router-redux";

// export type RequestConfig = {
//   url: string,
//   params?: { [string]: (string | number | boolean) },
//   data: any,
//   method?: ("get" | "post" | "put" | "delete")
// }

export const request = (config, token) => {
  const source = axios.CancelToken.source();

  const responsePromise = axios({
    ...config,
    "headers": {"Authorization": token},
    "cancelToken": source.token
  });

  responsePromise[CANCEL] = () => source.cancel();

  return responsePromise;
};

const UNAUTHORIZED_STATUS_CODE = 401;
const NOT_FOUND_STATUS_CODE = 404;
const FORBIDDEN_STATUS_CODE = 403;


/**
 * @param {Object} config: axios configuration
 * @return {null} nothing
 */
/* eslint-disable max-statements */

export const apiCall =
  function *apiCall (config){
    const token = yield select((state) => state.loginUser.get("token"));
    try {
      return yield call(request, config, token);
    } catch (error) {
      if (error.response && error.response.status === UNAUTHORIZED_STATUS_CODE) {
        yield put(clearUserInformation());
        yield put(push("/home"));
      }
      if (error.response && error.response.status === NOT_FOUND_STATUS_CODE) {
        yield put(push("/404"));
      }
      if (error.response && error.response.status === FORBIDDEN_STATUS_CODE) {
        yield put(push("/403"));
      }
      throw Error(error);
    }
  };