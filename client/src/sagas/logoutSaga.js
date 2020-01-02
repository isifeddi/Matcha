import { LOGOUT_USER, ClearUserInformation } from "../actions/logoutAction";
import { takeLatest, put,select,call} from "redux-saga/effects";
import {push} from "react-router-redux";
import {request} from './helper';
export const logoutRequest =
    function *logoutRequest () {
        try {
            const id = yield select((state) => state.user.id);
            const response = yield call(request, {
                "url": "http://localhost:5000/logout",
                "data": {
                 id
                },
                "method": "post"
              });
              if(response)
              {
                yield put(ClearUserInformation());
                yield put(push("/home"));
              }
            
        } catch (error) {
            console.log(error);
        }
    };
  
export default function *() {
    yield takeLatest(LOGOUT_USER, logoutRequest);
}