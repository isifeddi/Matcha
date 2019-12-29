export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const GET_USERS = "GET_USERS";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_ERROR = "GET_USERS_ERROR";
export const BLOCK_USER = "BLOCK_USER";
export const updateUserSuccess = (data) => ({
    "type":  UPDATE_USER_SUCCESS,
    data
});

export const getUsers= () => ({
    "type":  GET_USERS,
});
export const getUsersSuccess= (data) => ({
    "type":  GET_USERS_SUCCESS,
    data
});

export const getUsersError= (err) => ({
    "type":  GET_USERS_ERROR,
    err
});
export const blockUser= (blocked_user_id) => ({
    "type":  BLOCK_USER,
    blocked_user_id
});


