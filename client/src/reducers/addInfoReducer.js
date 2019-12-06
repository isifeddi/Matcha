import {
    GET_OPTIONS,
    GET_OPTIONS_SUCCESS,
    CREATE_OPTION,
    CREATE_OPTION_SUCCESS,
    CREATE_OPTION_ERROR
} from "../actions/addInfoAction";

const DEFAULT_STATE =  {selectOptions: [], selectLoading: false};

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
      case GET_OPTIONS:
        return { selectOptions: [], selectLoading: true};
      case GET_OPTIONS_SUCCESS:
        return { selectOptions: action.options, selectLoading: false };
      case CREATE_OPTION:
        return {selectOptions: [...state.selectOptions], selectLoading: true};
      case CREATE_OPTION_SUCCESS:
        return { selectOptions: [...state.selectOptions, action.option], selectLoading: false};
      case CREATE_OPTION_ERROR:
        return { selectOptions: [...state.selectOptions] , selectLoading: false , error: action.error};
      default:
        return state;
    }
}