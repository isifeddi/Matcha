import { createStore, combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import registerReducer from './registerReducer'
const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  'registerReducer' : registerReducer
});
const store = (createStore)(reducer);

export default store;