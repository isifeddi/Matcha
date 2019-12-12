import React from 'react'
import {Route ,Switch} from 'react-router-dom'
import RegisterContainer from './containers/Register'
import HomeContainer from './containers/Home'
import loginContainer from './containers/Login'
import NotFoundPage from './containers/NotFoundPage'
import ForgotPasswordContainer from './containers/ForgotPassword'
import EmailConfirmCont from './containers/emailConfirmation'
import ResetPasswordContainer from './containers/resetPassword'
import CompleteProfile from './containers/completeProfile/stepper'
import Profile from './containers/Profile/index'
const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path="/profile" component = {Profile} />
                <Route path="/confirmation/:token"  component = {EmailConfirmCont} />
                <Route path="/resetPassword/:token" component = {ResetPasswordContainer} />
                <Route path="/forgotPassword"  component = {ForgotPasswordContainer} />
                <Route path="/register" component = {RegisterContainer} />
                <Route path="/login" component = {loginContainer} />
                <Route path="/completeProfile" component= {CompleteProfile} />
                <Route path="/" exact component = {HomeContainer} />
                <Route path="*" component = {NotFoundPage} />
                
            </Switch>
        </div>
    )
}
export default Routes