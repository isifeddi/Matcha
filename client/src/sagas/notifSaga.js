import {takeLatest, put, select, delay} from "redux-saga/effects";
import axios from 'axios';
import {resetNotifState} from '../actions/resetStateAction';
import {GetNotifSuccess} from '../actions/notifAction';
import socket from '../socketConn';
import {  } from "../actions/resetStateAction";

const getNotif =
  function *getNotif () {
    try {
      const user_id = yield select(state => state.user.id);
      const data = {user_id : user_id}
      const response = yield axios.post('http://localhost:5000/getNotif', data);
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
      yield axios.post('http://localhost:5000/openNotif');
      socket.emit('openNotif', user_id);
    }catch (error) {
      if (error.response) {
        
      }
    }
};

const resetNotif =
  function *resetNotif () {
    try {
      yield delay (4000);
      yield put(resetNotifState());
    }catch (error) {
      console.log(error);
    }
};

export default function *() {
    yield takeLatest("GET_NOTIF", getNotif);
    yield takeLatest("OPEN_NOTIF", openNotif);
    yield takeLatest("NEW_NOTIF", resetNotif);
}