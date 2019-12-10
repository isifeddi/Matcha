import { takeLatest, put } from "redux-saga/effects";
//import { delay } from 'redux-saga/effects'
import {getImagesSuccess,getImagesError} from "../actions/imagesAction";
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
export default function *() {
    yield takeLatest("GET_IMAGES", getPictures);
  }