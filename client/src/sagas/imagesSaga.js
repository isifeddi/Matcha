import { takeLatest, put ,select} from "redux-saga/effects";
//import { delay } from 'redux-saga/effects'
import {setProfilePicError,getImages,getImagesSuccess,getImagesError,sendImagesError,delImagesError} from "../actions/imagesAction";
import axios from 'axios';

const getPictures =
  function *getPictures ({user_id}) {
    try {
        const response  = yield axios.post('http://localhost:5000/getImages',{user_id : user_id});
        if(response.data.length > 0)
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
  function *sendPictures ({data}) {
    try {
      const user_id = yield select(state => state.user.id);
        const response  = yield axios.post('http://localhost:5000/upload',data);
        if(response.data)
        {
          console.log(response.data)
          yield put(getImages(user_id));
        }
       
    }catch (error) {
      if (error.response) {
        yield put(sendImagesError(error.response));
      }
    }
};
const delPictures =
  function *delPictures ({img}) {
    try {
      const user_id = yield select(state => state.user.id);
      const data = {
        user_id : user_id,
        img_id : img.imgId,
        isProfilePic : img.isProfilePic
    }
      const headers = {'Content-Type': 'multipart/form-data'};
        const response  = yield axios.post('http://localhost:5000/deleteImages',data,headers);
        if(response.data)
        {
          yield put(getImages(user_id));
        }
    }catch (error) {
      if (error.response) {
        yield put(delImagesError(error.response));
      }
    }
};
const setProfilePicture =
  function *setProfilePicture ({imgId}) {
    try {

      const user_id = yield select(state => state.user.id);
      const data = {
        user_id : user_id,
        img_id : imgId
    }
      const headers = {'Content-Type': 'multipart/form-data'};
        const response  = yield axios.post('http://localhost:5000/setProfilePicture',data,headers);
        if(response.data)
        {
          yield put(getImages(user_id));
        }
    }catch (error) {
      if (error.response) {
        yield put(setProfilePicError(error.response));
      }
    }
};
export default function *() {
    yield takeLatest("GET_IMAGES", getPictures);
    yield takeLatest("SEND_IMAGES", sendPictures);
    yield takeLatest("DEL_IMAGES",delPictures);
    yield takeLatest("SET_PROFILE_PIC",setProfilePicture);
  }