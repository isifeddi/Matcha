import {OPEN_NOTIF, NEW_NOTIF} from '../actions/notifAction';
import { RESET_STATE} from '../actions/resetStateAction';

const DEFAULT_STATE = {
    current_notif: null,
    notifications: [
    ],
};

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case OPEN_NOTIF:
        {
            let arr = [...state.notifications];
            arr.forEach(e => {
                if(e.seen === false)
                    e.seen = true;
            });
            return {current_notif: {...state.current_notif}, notifications: arr};
        }
        case NEW_NOTIF:
        {
            let ele = {content: action.content, seen: 0};
            let arr  = [...state.notifications];
            arr.push(ele);
            return {current_notif: action.content, notifications: arr};
        }
        case RESET_STATE:
            return DEFAULT_STATE;
        default:
            return state;
    }
}