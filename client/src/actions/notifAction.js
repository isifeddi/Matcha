export const OPEN_NOTIF = "OPEN_NOTIF";

export const NEW_NOTIF = "NEW_NOTIF";

export const GET_NOTIF = "GET_NOTIF";

export const GET_NOTIF_SUCCESS = "GET_NOTIF_SUCCESS";

export const OpenNotif = () => ({
    "type": OPEN_NOTIF,
});

export const NewNotif = (content) => ({
    "type": NEW_NOTIF,
    content: content,
});

export const GetNotif = () => ({
    "type": GET_NOTIF,
});

export const GetNotifSuccess = (notif) => ({
    "type": GET_NOTIF_SUCCESS,
    notif: notif,
});