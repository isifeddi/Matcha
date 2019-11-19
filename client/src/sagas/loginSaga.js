import {takeLatest, put} from "redux-saga/effects";
import {push} from "react-router-redux";
import {loginError, loginUserSuccess} from "../actions/loginAction";
import axios from 'axios'

const login =
  function *login ({data}) {
    try {
      const response = yield axios.post('http://localhost:5000/login', data);
      if(response.data.isValid)
      {
        yield put(loginUserSuccess(response.data.userData));
        console.log('success', response.data);
        //yield put(push("/home"));
      }
      else if(response.data.error === 'Incorrect password')
      {
        yield put(loginError(response.data.error))
      }
      else if(response.data.error === 'User not found')
      {
        yield put(loginError(response.data.error))
      }

    }catch (error) {
      if (error.response) {
        yield put(loginError("error.response.statusText", "error.response.status"));
      }
    }
  };

export default function *() {
  yield takeLatest("LOGIN_USER", login);
}