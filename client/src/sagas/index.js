import {fork, all} from "redux-saga/effects";
import registerSaga from "./registerSaga";
import loginSaga from './loginSaga'
export default function *() {
  yield all([
    fork(registerSaga),
    fork(loginSaga)
  ]);
}