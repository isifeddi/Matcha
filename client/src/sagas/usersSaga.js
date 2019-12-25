import {put, takeLatest,call} from "redux-saga/effects";

import { select } from 'redux-saga/effects'; 
import {request} from './helper';
import { getUsersSuccess,getUsersError} from '../actions/userAction';
export const getUsers =
    function *getUsers () {
        try {
            const user = yield select(state => state.user);
            const response = yield call(request, {
                "url": "http://localhost:5000/getUsers",
                "data": {id : user.id},
                "method": "post"
              });
            if(response)
            {
                console.log(response.data)
                yield put(getUsersSuccess(response.data));
            }
        } catch (error) {
            yield put(getUsersError());
        }
    };
  
export default function *() {
    yield takeLatest("GET_USERS", getUsers);
}