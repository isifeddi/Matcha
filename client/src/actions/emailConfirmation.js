export const EMAIL_CONFIRMATION = "EMAIL_CONFIRMATION";

export const EMAIL_CONFIRMATION_SUCCESS = "EMAIL_CONFIRMATION_SUCCESS";

export const EMAIL_CONFIRMATION_ERROR = "EMAIL_CONFIRMATION_ERROR";

export const EmailConfirmationAction = (token) => ({
  "type": EMAIL_CONFIRMATION,
  token
});

export const EmailConfirmationSuccess = () => ({
    "type": EMAIL_CONFIRMATION_SUCCESS,
});

export const EmailConfirmationError = () => ({
    "type": EMAIL_CONFIRMATION_ERROR,
});