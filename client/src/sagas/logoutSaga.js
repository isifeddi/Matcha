import { LOGOUT_USER, ClearUserInformation } from "../actions/logoutAction";
import {put, takeLatest} from "redux-saga/effects";
import {push} from "react-router-redux";
  
export const logoutRequest =
    function *logoutRequest () {
        try {
            yield put(ClearUserInformation());
            yield put(push("/login"));
        } catch (error) {
            console.log(error);
        }
    };
  
export default function *() {
    yield takeLatest(LOGOUT_USER, logoutRequest);
}