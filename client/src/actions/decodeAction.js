export const DECODE_TOKEN = "DECODE_TOKEN";

export const DECODE_TOKEN_SUCCESS = "DECODE_TOKEN_SUCCESS";

export const DECODE_ERROR = "DECODE_ERROR";

export const decodeTokenAction = (token) => ({
  "type": DECODE_TOKEN,
  token
});

export const decodeTokenSuccess = (data) => ({
    "type": DECODE_TOKEN_SUCCESS,
    data
});

export const decodeTokenError = (error) => ({
    "type": DECODE_ERROR,
    error
});