import {
    GET_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_ERROR,
    
} from "../actions/userAction";

const DEFAULT_STATE =  {users: [], err : ''};
export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case GET_USERS:
            return { users: null, err: false};
        case GET_USERS_SUCCESS:
            return { users: action.data, err: false};
        case GET_USERS_ERROR:
            return { users: null, err : action.err};
      default:
        return state;
    }
}