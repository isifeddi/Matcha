import { takeLatest, put } from "redux-saga/effects";
import { decodeTokenSuccess, decodeTokenError } from "../actions/decodeAction";
import axios from 'axios';

const decodeToken =
  function *decodeToken (token) {
    try {
        const To = token.token;
        const decoded  = yield axios.post('http://localhost:5000/decodeToken', {token: To});
        if(decoded.data && decoded.data !== 'Invalid signature')
        {
            yield put(decodeTokenSuccess(decoded.data));
        }
        else
        {
            yield put(decodeTokenError('error'));
        }
    }catch (error) {
      if (error.response) {
        yield put(decodeTokenError("error.response.statusText", "error.response.status"));
      }
    }
  };

export default function *() {
  yield takeLatest("DECODE_TOKEN", decodeToken);
}