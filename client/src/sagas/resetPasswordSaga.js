import {takeLatest, put, delay} from "redux-saga/effects";
import {push} from "react-router-redux";
import { ResetPasswordSuccess, ResetPasswordError } from "../actions/resetPasswordAction";
import axios from 'axios';

const resetPass =
  function *resetPass ({data}) {
    try {
      const response = yield axios.post('http://localhost:5000/resetPassword', {token: data.token, pass: data.form.password, c_pass: data.form.confirmPassword});
      console.log(response.data);
      if(response.data.reset)
      {
        yield put(ResetPasswordSuccess());
        yield delay(4000);
        yield put(push('/login'));
      }
      else
      {
        yield put(ResetPasswordError(response.data.error));
        yield delay(4000);
        yield put(push('/login'));
      }
    }catch (error) {
      if (error.response) {
        yield put(ResetPasswordError('Error, please retry'));
      }
    }
  };

export default function *() {
  yield takeLatest("RESET_PASSWORD", resetPass);
}