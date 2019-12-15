import React from 'react'
import {Route, Switch} from 'react-router-dom'
import RegisterContainer from '../containers/Register'
import HomeContainer from '../containers/Home'
import loginContainer from '../containers/Login'
import NotFoundPage from '../containers/NotFoundPage'
import ForgotPasswordContainer from '../containers/ForgotPassword'
import EmailConfirmCont from '../containers/emailConfirmation'
import ResetPasswordContainer from '../containers/resetPassword'
import CompleteProfile from '../containers/completeProfile/stepper'

import PrivateRoute from './PrivateRoute';

const Routes = () => {
    return (
        <>
            <Switch>
                <Route path="/confirmation/:token"  component={ EmailConfirmCont }/>
                <Route path="/resetPassword/:token"  component={ ResetPasswordContainer }/>
                <Route path="/forgotPassword"  component={ ForgotPasswordContainer }/>
                <Route path="/register"  component={ RegisterContainer } />
                <Route path="/login"  component={ loginContainer }/>
                <PrivateRoute>
                    <Route path="/completeProfile"  component={ CompleteProfile }/>
                    <Route path="/" component={ HomeContainer }/>
                </PrivateRoute>
                <Route  path="*" component={ NotFoundPage } />
            </Switch>
        </>
    )
}

export default Routes;