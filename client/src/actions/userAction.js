export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const GET_USERS = "GET_USERS";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_ERROR = "GET_USERS_ERROR";
export const BLOCK_USER = "BLOCK_USER";
export const DELETE_USER = "DELETE_USER";
export const LIKE_USER = "LIKE_USER";
export const REPORT_USER = "REPORT_USER";
export const VIEW_PROFILE_USER = "VIEW_PROFILE_USER";
export const GET_BLOCK_USER = "GET_BLOCK_USER";
export const GET_BLOCK_USER_SUCCESS = "GET_BLOCK_USER_SUCCESS";

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
export const getBlockUser= () => ({
    "type":  GET_BLOCK_USER,
});
export const getBlockUserSuccess= (data) => ({
    "type":  GET_BLOCK_USER_SUCCESS,
    data
});
export const deleteUser= (id) => ({
    "type":  DELETE_USER,
    id: id,
});
export const likeUser= (liked_user_id) => ({
    "type":  LIKE_USER,
  liked_user_id
});
export const getLikeUser= (liked_user_id) => ({
    "type":  LIKE_USER,
  liked_user_id
});
export const reportUser= (reported_user_id) => ({
    "type":  REPORT_USER,
  reported_user_id
});

export const viewProfileUser= (viewed_user_id) => ({
    "type":  VIEW_PROFILE_USER,
    viewed_user_id
});


