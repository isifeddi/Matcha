import { connectRouter } from "connected-react-router";
import registerReducer from "./registerReducer";
import loginReducer from "./loginReducer";
import decodeReducer from './decodeReducer';
import {combineReducers} from "redux";
import {reducer as form} from "redux-form";
import tokenReducer from "./tokenReducer";
import emailConfirmationReducer from './emailConfirmationReducer';
import sendEmailReducer from './sendEmailReducer'
import resetPasswordReducer from "./resetPasswordReducer";

const combinedReducer = (history)=> combineReducers({
    "router" : connectRouter(history),
    "register" : registerReducer,
    "login": loginReducer,
    "token" : tokenReducer,
    "user" : decodeReducer,
    "emailConfirmed": emailConfirmationReducer,
    "sendEmail": sendEmailReducer,
    "resetPassword": resetPasswordReducer,
    form
});
export default combinedReducer;