import {SELECT_CONVERSATION, SEND_MESSAGE} from '../actions/chatAction';

const DEFAULT_STATE = {
    selectedConversation:
        {id: 1, firstname: 'Harvey', lastname: 'Specter', profilePic: 'friend', isOnline: 1, messages:[
                {image: 'me', message: 'ok bye', isMyMessage: true},
                {image: 'friend', message: 'bye see you later', isMyMessage: false},
                {image: 'me', message: ';)', isMyMessage: true},
            ]
        },

    conversations: [
        {id: 1, firstname: 'Harvey', lastname: 'Specter', profilePic: 'friend', isOnline: 1, messages:[
                {image: 'me', message: 'ok bye', isMyMessage: true},
                {image: 'friend', message: 'bye see you later', isMyMessage: false},
                {image: 'me', message: ';)', isMyMessage: true},
            ]
        },
        {id: 2, firstname: 'Rachel', lastname: 'Zane', profilePic: 'friend2', isOnline: 0, messages:[
                {image: 'me', message: 'I love you', isMyMessage: true},
                {image: 'friend', message: 'see you later honey', isMyMessage: false},
            ]
        },
        {id: 3, firstname: 'Louis', lastname: 'Litt', profilePic: 'friend3', isOnline: 1, messages:[
                {image: 'friend', message: 'you just got LITT UP !', isMyMessage: false},
            ]
        },
    ],
};

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case SELECT_CONVERSATION:
        {
            const id = action.id;
            let arr  = [...state.conversations];
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].id == id) {
                    return {selectedConversation: arr[i], conversations:[...state.conversations]}
                }
            }
        }
        case SEND_MESSAGE:
        {
            const id = action.id;
            const ele = {image: 'me', message: action.message, isMyMessage: true};
            let arr  = [...state.conversations];
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].id == id) {
                    arr[i].messages.push(ele)
                    break;
                }
            }
            return {selectedConversation: {...state.selectedConversation, messages: arr[i].messages}, conversations:arr};
        }
        default:
            return state;
    }
}