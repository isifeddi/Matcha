import {put, takeLatest,call} from "redux-saga/effects";
import { select } from 'redux-saga/effects'; 
import {request} from './helper';
import { getUsersSuccess,getUsersError,deleteUser,getBlockUserSuccess,deleteBlock,getLikeUserSuccess,deleteLike} from '../actions/userAction';
export const getUsers =
    function *getUsers (data) {
        try {
            const user = yield select(state => state.user);
            const token = yield select((state) => state.user.token);
            const response = yield call(request, {
                "url": "http://localhost:5000/getUsers",
                "data": {id : user.id,filtre : data.filtre},
                "method": "post"
              },token);
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
    export const sortUsers =
    function *sortUsers ({methode,route}) {
        try {
            const user = yield select(state => state.user);
            const token = yield select((state) => state.user.token);
            const response = yield call(request, {
                "url": "http://localhost:5000/sortUsers",
                "data": {id : user.id,methode : methode,route : route},
                "method": "post"
              },token);
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
             const token = yield select((state) => state.user.token);
            const response = yield call(request, {
                "url": "http://localhost:5000/blockUser",
                "data": {id : user.id, blocked_user_id: blocked_user_id},
                "method": "post"
              },token);
            if(response)
            {
                yield put(deleteUser(blocked_user_id));
            }
        } catch (error) {
            console.log(error)
        }
    };
    export const deblockUser =
    function *deblockUser({deblocked_user_id}) {
        try {
            const user = yield select(state => state.user);
             const token = yield select((state) => state.user.token);
            const response = yield call(request, {
                "url": "http://localhost:5000/deblockUser",
                "data": {id : user.id, deblocked_user_id: deblocked_user_id},
                "method": "post"
              },token);
              if(response)
              {
                  yield put(deleteBlock(deblocked_user_id));
              } 
        } catch (error) {
            console.log(error)
        }
    };
    export const getBlockUser =
    function *getBlockUser() {
        try {
            const user = yield select(state => state.user);
             const token = yield select((state) => state.user.token);
            const response = yield call(request, {
                "url": "http://localhost:5000/getBlockUser",
                "data": {id : user.id},
                "method": "post"
              },token);
            if(response)
            {
                yield put(getBlockUserSuccess(response.data));
            }
        } catch (error) {
            console.log(error)
        }
    };
    export const likeUser =
    function *likeUser({liked_user_id}) {
        try {
            const user = yield select(state => state.user);
            const token = yield select((state) => state.user.token);
            const response = yield call(request, {
                "url": "http://localhost:5000/likeUser",
                "data": {id : user.id, liked_user_id: liked_user_id},
                "method": "post"
              },token);
            if(response)
            {
                yield put(deleteUser(liked_user_id));
            }
        } catch (error) {
            console.log(error)
        }
    };
    export const dislikeUser =
    function *dislikeUser({dislike_user_id}) {
        try {
            const user = yield select(state => state.user);
             const token = yield select((state) => state.user.token);
            const response = yield call(request, {
                "url": "http://localhost:5000/dislikeUser",
                "data": {id : user.id, dislike_user_id: dislike_user_id},
                "method": "post"
              },token);
              if(response)
              {
                  yield put(deleteLike(dislike_user_id));
              } 
        } catch (error) {
            console.log(error)
        }
    };
    export const getLikeUser =
    function *getLikeUser() {
        try {
            const user = yield select(state => state.user);
             const token = yield select((state) => state.user.token);
            const response = yield call(request, {
                "url": "http://localhost:5000/getLikeUser",
                "data": {id : user.id},
                "method": "post"
              },token);
            if(response)
            {
                yield put(getLikeUserSuccess(response.data));
            }
        } catch (error) {
            console.log(error)
        }
    };
    export const reportUser =
    function *reportUser({reported_user_id}) {
        try {
            const user = yield select(state => state.user);
             const token = yield select((state) => state.user.token);
            const response = yield call(request, {
                "url": "http://localhost:5000/reportUser",
                "data": {id : user.id, reported_user_id: reported_user_id},
                "method": "post"
              },token);
            if(response)
            {
                 yield put(deleteUser(reported_user_id));
            }
        } catch (error) {
            console.log(error)
        }
    };
    export const viewProfileUser =
    function *viewProfileUser({viewed_user_id}) {
        try {
            const user = yield select(state => state.user);
             const token = yield select((state) => state.user.token);
            const response = yield call(request, {
                "url": "http://localhost:5000/viewProfileUser",
                "data": {id : user.id, viewed_user_id: viewed_user_id},
                "method": "post"
              },token);
            if(response)
            {
                
            }
        } catch (error) {
            console.log(error)
        }
    };
export default function *() {
    yield takeLatest("GET_USERS", getUsers);
    yield takeLatest("BLOCK_USER",blockUser);
    yield takeLatest("DEBLOCK_USER",deblockUser);
    yield takeLatest("GET_BLOCK_USER",getBlockUser);
    yield takeLatest("LIKE_USER",likeUser);
    yield takeLatest("DISLIKE_USER",dislikeUser);
    yield takeLatest("GET_LIKE_USER",getLikeUser);
    yield takeLatest("REPORT_USER",reportUser);
    yield takeLatest("VIEW_PROFILE_USER",viewProfileUser);
    yield takeLatest("SORT_USERS",sortUsers);
    
}