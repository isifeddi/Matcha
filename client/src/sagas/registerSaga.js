import {takeLatest, put, delay} from "redux-saga/effects";
import {push} from "react-router-redux";
import {inscriptionError, inscriptionUserSuccess} from "../actions/registerAction";
import axios from 'axios'
// import {request} from "./helper";

const inscription =
  function *inscription ({data}) {
    try {
    //   const response = yield call(request, {
    //     "url": "/api/auth/signup",
    //     data,
    //     "method": "post"
    //   });
      
      const response = yield axios.post('http://localhost:5000/register', data)
      console.log("submitted", response);
      // yield put(inscriptionUserSuccess(response.data));
      yield delay(2000)
      yield put(inscriptionUserSuccess(data));
      yield put(push("/login"));
    }catch (error) {
      if (error.response) {
        yield put(inscriptionError("error.response.statusText", "error.response.status"));
      }
    }
  };

export default function *() {
  yield takeLatest("INSCRIPTION_USER", inscription);
}