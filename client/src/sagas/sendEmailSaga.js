import {takeLatest, put} from "redux-saga/effects";
import {SendEmailSuccess,SendEmailError} from "../actions/sendEmail";
import axios from 'axios';

const sendEmailS =
  function *sendEmailS (data) {
    try {
      const response = yield axios.post('http://localhost:5000/sendResetEmail', {email: data.data.email});
      console.log(response.data);
      if(response.data.sent)
      {
        yield put(SendEmailSuccess());
      }
      else if(response.data.error === 'Email not found')
      {
        yield put(SendEmailError('Email not found'));
      }
    }catch (error) {
      if (error.response) {
        yield put(SendEmailError('Error sending the email, please retry'));
      }
    }
  };

export default function *() {
  yield takeLatest("SEND_EMAIL", sendEmailS);
}