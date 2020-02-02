import {OPEN_NOTIF} from '../actions/notifAction';
import { RESET_STATE} from '../actions/resetStateAction';

const DEFAULT_STATE = {
    current_notif: {},
    notifications: [
        {id: 1, content: 'estrella liked you', seen: false},
        {id: 2, content: 'lolly liked you', seen: false},
        {id: 3, content: 'lalaNa3ima liked you', seen: true},
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
        case RESET_STATE:
            return DEFAULT_STATE;
        default:
            return state;
    }
}