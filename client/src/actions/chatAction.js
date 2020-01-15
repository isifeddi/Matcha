export const SELECT_CONVERSATION = "SELECT_CONVERSATION";

export const SEND_MESSAGE = "SEND_MESSAGE";

export const SelectConversation = () => ({
    "type": SELECT_CONVERSATION,
    id: 'id',
})

export const SendMessage = () => ({
    "type": SEND_MESSAGE,
    id: 'id',
    message: 'message',
});