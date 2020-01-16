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
        }
    ],
};

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case SELECT_CONVERSATION:
        {
            //  action{selected:'id'}
            // const id = action.selected;
            // let arr  = [...state.conversations];
            // for (var i = 0; i < arr.length; i++) {
            //      if (arr[i].id == id) {
                        //  return {selectedConversation: arr[i], conversations:[...conversations]}
            //      }
            // }
        }
        case SEND_MESSAGE:
        {
            //action{id:x, message:'xx'}
            // const id = action.id;
            // let arr  = [...state.conversations];
            // for (var i = 0; i < arr.length; i++) {
            //     if (arr[i].id == id) {
            //         arr[i].messages.unshift(action.message)
            //         i--;
            //     }
            // }
            // return {selectedConversation: {...selectedConversation}, conversations:arr};
        }
        default:
            return state;
    }
}