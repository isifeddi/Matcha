import {takeLatest, put} from "redux-saga/effects";
import {push} from "react-router-redux";
import {loginError, loginUserSuccess,loginErrorField} from "../actions/loginAction";
import axios from 'axios';
import ls from 'local-storage';

const login =
  function *login ({data}) {
    try {
      const response = yield axios.post('http://localhost:5000/login', data);
      if(response.data.isValid)
      {
        yield put(loginUserSuccess(response.data.token));
        ls.set('token', response.data.token);
        yield put(push("/"));
      }
      else 
      {
        yield put(loginErrorField(response.data.errorField))
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