export const LOGIN_USER = "LOGIN_USER";

export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";

export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";

export const LoginAction = (dataInsc) => ({
  "type": LOGIN_USER,
  "data": dataInsc
});

export const loginUserSuccess =
  (data) => ({
    "type": LOGIN_USER_SUCCESS,
    data
});

export const loginError =
  (error) => ({
    "type": LOGIN_USER_ERROR,
    error
});