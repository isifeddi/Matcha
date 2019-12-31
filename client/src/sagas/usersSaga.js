import {put, takeLatest,call} from "redux-saga/effects";

import { select } from 'redux-saga/effects'; 
import {request} from './helper';
import { getUsersSuccess,getUsersError,deleteUser} from '../actions/userAction';
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
                yield put(deleteUser(blocked_user_id));
            }
        } catch (error) {
            console.log(error)
        }
    };
    export const likeUser =
    function *likeUser({liked_user_id}) {
        try {
            const user = yield select(state => state.user);
            const response = yield call(request, {
                "url": "http://localhost:5000/likeUser",
                "data": {id : user.id, liked_user_id: liked_user_id},
                "method": "post"
              });
            if(response)
            {
                yield put(deleteUser(liked_user_id));
            }
        } catch (error) {
            console.log(error)
        }
    };
    export const reportUser =
    function *reportUser({reported_user_id}) {
        try {
            const user = yield select(state => state.user);
            const response = yield call(request, {
                "url": "http://localhost:5000/reportUser",
                "data": {id : user.id, reported_user_id: reported_user_id},
                "method": "post"
              });
            if(response)
            {
                 yield put(deleteUser(reported_user_id));
            }
        } catch (error) {
            console.log(error)
        }
    };
export default function *() {
    yield takeLatest("GET_USERS", getUsers);
    yield takeLatest("BLOCK_USER",blockUser);
    yield takeLatest("LIKE_USER",likeUser);
    yield takeLatest("REPORT_USER",reportUser);
}