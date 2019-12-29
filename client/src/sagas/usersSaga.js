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
                yield put(getUsersSuccess(response.data));
            }
            else
                yield put(getUsersError('there has been an error'));
        } catch (error) {
            yield put(getUsersError('there has been an error'));
        }
    };
    export const blockUser =
    function *blockUser({blocked_user_id}) {
        try {
            const user = yield select(state => state.user);
            const response = yield call(request, {
                "url": "http://localhost:5000/blockUser",
                "data": {id : user.id, blocked_user_id: blocked_user_id},
                "method": "post"
              });
            if(response)
            {
                // yield put(getUsersSuccess(response.data));
            }
        
                // yield put(getUsersError('there has been an error'));
        } catch (error) {
            // yield put(getUsersError('there has been an error'));
        }
    };
export default function *() {
    yield takeLatest("GET_USERS", getUsers);
    yield takeLatest("BLOCK_USER",blockUser);
}