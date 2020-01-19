import {takeLatest, put, select} from "redux-saga/effects";
import axios from 'axios';
import {getConverSuccess, getConverError, LoadMessagesSuccess, LoadMessagesError} from '../actions/chatAction';

const getConv =
  function *getConv () {
    try {
      const user_id = yield select(state => state.user.id);
      const data = {user_id : user_id}
      const response = yield axios.post('http://localhost:5000/getMatchs', data);
      if(response.data)
      {
        console.log(response.data);
        yield put(getConverSuccess(response.data));
      }
    }catch (error) {
      if (error.response) {
        yield put(getConverError('An error has occured'));
      }
    }
};

const loadMsg =
  function *loadMsg ({conv_id}) {
    try {
      const user_id = yield select(state => state.user.id);
      const data = {conv_id: conv_id,user_id : user_id}
      const response = yield axios.post('http://localhost:5000/loadMessages', data);
      if(response.data)
      {
        yield put(LoadMessagesSuccess(response.data));
      }
    }catch (error) {
      if (error.response) {
        yield put(LoadMessagesError('An error has occured'));
      }
    }
};

export default function *() {
    yield takeLatest("GET_CONVERSATIONS", getConv);
    yield takeLatest("LOAD_MESSAGES", loadMsg);
}