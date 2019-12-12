import { takeLatest, put } from "redux-saga/effects";
//import { delay } from 'redux-saga/effects'
import {getImagesSuccess,getImagesError,sendImagesSuccess,sendImagesError} from "../actions/imagesAction";
import axios from 'axios';

const getPictures =
  function *getPictures ({user_id}) {
    try {
        const response  = yield axios.post('http://localhost:5000/getImages',{user_id : user_id});
        if(response.data)
        {
            yield put(getImagesSuccess(response.data));
        }
       
    }catch (error) {
      if (error.response) {
        yield put(getImagesError(error.response));
      }
    }
};
const sendPictures =
  function *sendPictures ({data,user_id}) {
    try {
     //console.log(data)
      //const headers = {'Content-Type': 'multipart/form-data'};
        const response  = yield axios.post('http://localhost:5000/upload',data,{headers : user_id});
        if(response.data)
        {
          yield put(sendImagesSuccess());
        }
       
    }catch (error) {
      if (error.response) {
        yield put(sendImagesError(error.response));
      }
    }
};
export default function *() {
    yield takeLatest("GET_IMAGES", getPictures);
    yield takeLatest("SEND_IMAGES", sendPictures);
  }