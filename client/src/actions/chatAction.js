export const GET_CONVERSATIONS = "GET_CONVERSATIONS";

export const GET_CONVERSATIONS_SUCCESS = "GET_CONVERSATIONS_SUCCESS"

export const GET_CONVERSATIONS_ERROR = "GET_CONVERSATIONS_ERROR"

export const SELECT_CONVERSATION = "SELECT_CONVERSATION";

export const LOAD_MESSAGES = "LOAD_MESSAGES";

export const LOAD_MESSAGES_SUCCESS = "LOAD_MESSAGES_SUCCESS";

export const LOAD_MESSAGES_ERROR = "LOAD_MESSAGES_ERROR";

export const SEND_MESSAGE = "SEND_MESSAGE";

export const GetConversations = () => ({
    "type": GET_CONVERSATIONS,
});

export const getConverSuccess = (data) => ({
    "type": GET_CONVERSATIONS_SUCCESS,
    data: data,
});

export const getConverError = (err) => ({
    "type": GET_CONVERSATIONS_ERROR,
    err: err,
});

export const SelectConversation = (id) => ({
    "type": SELECT_CONVERSATION,
    id: id,
});

export const LoadMessages = (conv_id) => ({
    "type": LOAD_MESSAGES,
    conv_id: conv_id,
});

export const LoadMessagesSuccess = (data) => ({
    "type": LOAD_MESSAGES_SUCCESS,
    data: data,
});

export const LoadMessagesError = (err) => ({
    "type": LOAD_MESSAGES_ERROR,
    err: err,
});

export const SendMessage = (id, message) => ({
    "type": SEND_MESSAGE,
    id: id,
    message: message,
});