export const RESET_PASSWORD = "RESET_PASSWORD";

export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";

export const RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR";

export const ResetPasswordAction = (dataInsc) => ({
  "type": RESET_PASSWORD,
  "data": dataInsc
});

export const ResetPasswordSuccess = () => ({
    "type": RESET_PASSWORD_SUCCESS,
});

export const ResetPasswordError =  (error) => ({
    "type": RESET_PASSWORD_ERROR,
    error
});