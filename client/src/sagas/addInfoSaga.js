import { takeLatest, put } from "redux-saga/effects";
import { delay } from 'redux-saga/effects'
import { getOptions, getOptionsSuccess, createOptionSuccess, createOptionError} from "../actions/addInfoAction";
import axios from 'axios';

const getSelectOptions =
  function *getSelectOptions () {
    try {
        const response  = yield axios.post('http://localhost:5000/getOptions');
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

const createSelectOption =
  function *createSelectOption (act) {
    try {
        const option = act.data.value;
        const response  = yield axios.post('http://localhost:5000/createOption', {option: option});
        if(response.data.created)
        {
          yield put(createOptionSuccess(response.data.option));
        }
        else
        {
          yield put(createOptionError(response.data.error));
        }
    }catch (error) {
      if (error.response) {
        yield put(createOptionError('there has been an error'));
      }
    }
};

export default function *() {
  yield takeLatest("GET_OPTIONS", getSelectOptions);
  yield takeLatest("CREATE_OPTION", createSelectOption);
}