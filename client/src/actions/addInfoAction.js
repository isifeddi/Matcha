export const GET_OPTIONS = "GET_OPTIONS";

export const GET_OPTIONS_SUCCESS = "GET_OPTIONS_SUCCESS";

export const CREATE_OPTION = "CREATE_OPTION";

export const CREATE_OPTION_SUCCESS = "CREATE_OPTION_SUCCESS";

export const CREATE_OPTION_ERROR = "CREATE_OPTION_ERROR";

export const getOptions= () => ({
  "type": GET_OPTIONS
});

export const getOptionsSuccess = (options) => ({
    "type": GET_OPTIONS_SUCCESS,
    options
});

export const createOption = (option) => ({
  "type": CREATE_OPTION,
  "data": {value: option, label: option}
});

export const createOptionSuccess = (option) => ({
  "type": CREATE_OPTION_SUCCESS,
  option
});

export const createOptionError = (error) => ({
  "type": CREATE_OPTION_ERROR,
  error
});