import { takeLatest, put,select} from "redux-saga/effects";
import { getOptionsSuccess, createOptionSuccess, createOptionError, addInfoError, addLocationSuccess} from "../actions/addInfoAction";
import { updateUserSuccess} from '../actions/userAction';
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
        const id = yield select((state) => state.user.id);
        const option = act.data.value;
        const response  = yield axios.post('http://localhost:5000/createOption', {option: option, id: id});
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

const add_Info =
  function *add_Info ({data, id}) {
    try {
      const info = {...data, id}
      const inter = data.interests.map(item => item.value)
      info.interests = inter;
      const response  = yield axios.post('http://localhost:5000/addInfo', info);

      if(response.data.added)
      {
        yield put(updateUserSuccess(response.data.uu));
      }
      else
      {
        yield put(addInfoError(response.data.error));
      }
    }catch (error) {
      if (error.response) {
        yield put(createOptionError('there has been an error'));
      }
    }
};

const getLocation =
  function *getLocation () {
    try {
      const id = yield select((state) => state.user.id);
      const response  = yield axios.post("http://localhost:5000/getLocation", {id: id});
      if(response.data)
      {
        yield put(addLocationSuccess({marker: response.data.marker, lat: response.data.loc.lat, lng: response.data.loc.lng}));
      }
      else
      {
        yield put(addInfoError(response.data.error));
      }
    }catch (error) {
      if (error.response) {
        yield put(createOptionError('there has been an error'));
      }
    }
};

const AddLocation =
  function *AddLocation ({loc}) {
    try {
      const id = yield select((state) => state.user.id);
      yield axios.post("http://localhost:5000/addLocation", {id: id, loc});
    }catch (error) {
      if (error.response) {
        yield put(createOptionError('there has been an error'));
      }
    }
};

export default function *() {
  yield takeLatest("GET_OPTIONS", getSelectOptions);
  yield takeLatest("CREATE_OPTION", createSelectOption);
  yield takeLatest("ADD_INFO", add_Info);
  yield takeLatest("GET_LOC", getLocation);
  yield takeLatest("ADD_LOCATION", AddLocation);
}