import {takeLatest, put} from "redux-saga/effects";
import {EmailConfirmationSuccess,EmailConfirmationError} from "../actions/emailConfirmation";
import axios from 'axios';

const emailConfirm =
  function *emailConfirm (data) {
    try {
      const response = yield axios.post('http://localhost:5000/confirmEmail', {token: data.token});
      console.log(response.data);
      if(response.data === 'success')
      {
        yield put(EmailConfirmationSuccess());
      }
      else if(response.data === 'error')
      {
        yield put(EmailConfirmationError());
      }
    }catch (error) {
      if (error.response) {
        yield put(EmailConfirmationError());
      }
    }
  };

export default function *() {
  yield takeLatest("EMAIL_CONFIRMATION", emailConfirm);
}