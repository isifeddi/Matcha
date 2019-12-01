import {fork, all} from "redux-saga/effects";
import registerSaga from "./registerSaga";
import loginSaga from './loginSaga'
import logoutSaga from "./logoutSaga";
import decodeSaga from './decodeSaga';
import emailConfirmationSaga from "./emailConfirmationSaga";
import sendEmailSaga from "./sendEmailSaga";
import resetPasswordSaga from './resetPasswordSaga'

export default function *() {
  yield all([
    fork(registerSaga),
    fork(loginSaga),
    fork(logoutSaga),
    fork(decodeSaga),
    fork(emailConfirmationSaga),
    fork(sendEmailSaga),
    fork(resetPasswordSaga),
  ]);
}