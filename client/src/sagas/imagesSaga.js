import { takeLatest, put } from "redux-saga/effects";
//import { delay } from 'redux-saga/effects'
import {getImages} from "../actions/imagesAction";
import axios from 'axios';

const getPictures =
  function *getPictures () {
    try {
        const response  = yield axios.post('http://localhost:5000/getImages');
        if(response.data)
        {
            yield put(getOptionsSuccess(response.data));
        }
        else
        {
            yield put(getOptionsSuccess());
        }
    }catch (error) {
      if (error.response) {
        yield put(getOptionsSuccess());
      }
    }
};
