import { takeLatest, put,select} from "redux-saga/effects";
import {editInfoError} from "../actions/profileAction";
import { updateUserSuccess} from '../actions/userAction';
import axios from 'axios';

const edit_Info =
function *edit_Info ({data}) {
    try {
        const id = yield select((state) => state.user.id);
        const info = {...data, id}
        const inter = data.interests.map(item => item.value)
        info.interests = inter;
        const response  = yield axios.post('http://localhost:5000/editProfile', info);
        console.log(response);
        if(response.data.result.valid)
        {
            yield put(updateUserSuccess(response.data.uu));
        }
        else
        {
            yield put(editInfoError(response.data.result.email));
        }
    }catch (error) {
        if (error.response) {
            yield put(editInfoError('there has been an error'));
        }
    }
};

export default function *() {
  yield takeLatest("EDIT_INFO", edit_Info);
}