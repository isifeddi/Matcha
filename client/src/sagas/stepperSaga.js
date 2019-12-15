import { takeLatest, put } from "redux-saga/effects";
import { getActiveStepSuccess } from "../actions/stepperAction";
import axios from 'axios';

const getStep =
  function *getStep ({id}) {
    try {
        const response  = yield axios.post('http://localhost:5000/getActiveStep' , {id: id});
        if(response.data.step)
        {
            yield put(getActiveStepSuccess(response.data.step));
        }
        else
        {
            yield put(getActiveStepSuccess(0));
        }
    }catch (error) {
      if (error.response) {
        yield put(getActiveStepSuccess(0));
      }
    }
};


export default function *() {
  yield takeLatest("GET_ACTIVE_STEP", getStep);
}