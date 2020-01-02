import {
    GET_BLOCK_USER_SUCCESS
} from "../actions/userAction";
const DEFAULT_STATE = {
    isUsers: false,
    users : null,
  };
export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case GET_BLOCK_USER_SUCCESS:
            return {isUsers : true, users:action.data};
      default:
        return state;
    }
}