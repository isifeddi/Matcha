export const RESET_STATE = "RESET_STATE";

export const RESET_CHAT_STATE = "RESET_CHAT_STATE";

export const RESET_STATE_USERS = "RESET_STATE_USERS";

export const resetState = () => ({
    "type": RESET_STATE
});

export const resetStateUsers= () => ({
    "type": RESET_STATE_USERS

export const resetChatState = () => ({
    "type": RESET_CHAT_STATE
});