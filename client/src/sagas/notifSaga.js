import {takeLatest, put, select,call} from "redux-saga/effects";
import {request} from './helper';
import {GetNotifSuccess} from '../actions/notifAction';
import socket from '../socketConn';
import {  } from "../actions/resetStateAction";

const getNotif =
  function *getNotif () {
    try {
      const user_id = yield select(state => state.user.id);
      const data = {user_id : user_id}
      const token = yield select((state) => state.user.token);
      const response = yield call(request, {
          "url": "http://localhost:5000/getNotif",
          "method": "post",
          "data" : data
        },token);  
      //const response = yield axios.post('http://localhost:5000/getNotif', data);
      if(response.data)
      {
        yield put(GetNotifSuccess(response.data));
      }
    }catch (error) {
      if (error.response) {

      }
    }
};

const openNotif =
  function *openNotif () {
    try {
      const user_id = yield select(state => state.user.id);
      const token = yield select((state) => state.user.token);
      const response = yield call(request, {
          "url": "http://localhost:5000/openNotif",
          "method": "post",
        },token);  
      //yield axios.post('http://localhost:5000/openNotif');
      socket.emit('openNotif', user_id);
    }catch (error) {
      if (error.response) {
        
      }
    }
};

export default function *() {
    yield takeLatest("GET_NOTIF", getNotif);
    yield takeLatest("OPEN_NOTIF", openNotif);
}