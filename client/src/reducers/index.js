import { connectRouter } from "connected-react-router";
import registerReducer from "./registerReducer";
import loginReducer from "./loginReducer";
import {combineReducers} from "redux";
import {reducer as form} from "redux-form";
import resetPasswordReducer from "./resetPasswordReducer";
import addInfoReducer from './addInfoReducer';
import imagesReducer from './imagesReducers';
import userReducer from './userReducer';

const combinedReducer = (history)=> combineReducers({
    "router" : connectRouter(history),
    "register" : registerReducer,
    "login": loginReducer,
    "user" : userReducer,
    "resetPassword": resetPasswordReducer,
    "addInfo" : addInfoReducer,
    "images" : imagesReducer,
    form
});
export default combinedReducer;