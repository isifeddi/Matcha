import {SELECT_CONVERSATION, SEND_MESSAGE} from '../actions/chatAction';

const DEFAULT_STATE = {
    selectedConversation: null,
    conversations: null,
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