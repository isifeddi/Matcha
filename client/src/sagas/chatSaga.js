import {takeLatest, put, select} from "redux-saga/effects";
import axios from 'axios';
import {getConverSuccess, getConverError, LoadMessagesSuccess, LoadMessagesError, SendMessageSuccess, SendMessageError} from '../actions/chatAction';

const getConv =
  function *getConv () {
    try {
      const user_id = yield select(state => state.user.id);
      const data = {user_id : user_id}
      const response = yield axios.post('http://localhost:5000/getMatchs', data);
      if(response.data)
      {
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
      const data = {user_id : user_id, conv_id: conv_id}
      const response = yield axios.post('http://localhost:5000/loadMessages', data);
      if(response.data)
      {
        yield put(LoadMessagesSuccess(response.data, conv_id));
      }
    }catch (error) {
      if (error.response) {
        yield put(LoadMessagesError('An error has occured'));
      }
    }
};

const sendMsg =
  function *sendMsg ({id, message}) {
    try {
      const user_id = yield select(state => state.user.id);
      const data = {sender : user_id, receiver: id, message: message}
      const response = yield axios.post('http://localhost:5000/sendMessage', data);
      if(response.data.sent)
      {
        yield put(SendMessageSuccess());
      }
      else
      {
        yield put(SendMessageError(response.data.err));
      }
    }catch (error) {
      if (error.response) {
        yield put(SendMessageError('An error has occured'));
      }
    }
};

export default function *() {
    yield takeLatest("GET_CONVERSATIONS", getConv);
    yield takeLatest("LOAD_MESSAGES", loadMsg);
    yield takeLatest("SEND_MESSAGE", sendMsg);
}