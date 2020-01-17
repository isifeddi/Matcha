export const SELECT_CONVERSATION = "SELECT_CONVERSATION";

export const SEND_MESSAGE = "SEND_MESSAGE";

export const SelectConversation = (id) => ({
    "type": SELECT_CONVERSATION,
    id: id,
})

export const SendMessage = (id, message) => ({
    "type": SEND_MESSAGE,
    id: id,
    message: message,
});