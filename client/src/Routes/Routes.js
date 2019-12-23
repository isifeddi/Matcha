import React from 'react'
import {connect} from "react-redux";
import {Route, Switch} from 'react-router-dom'
import RegisterContainer from '../containers/Register'
import HomeContainer from '../containers/Home'
import loginContainer from '../containers/Login'
import NotFoundPage from '../containers/NotFoundPage'
import ForgotPasswordContainer from '../containers/sendEmail'
import EmailConfirmCont from '../containers/emailConfirmation'
import ResetPasswordContainer from '../containers/resetPassword'
import CompleteProfile from '../containers/completeProfile/stepper'
import Profile from '../containers/Profile'
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
                    <Route path="/profile" component={ Profile }/>
                    <Route path="/completeProfile"  component={ CompleteProfile }/>
                    <Route path="/" component={ HomeContainer }/>
                </PrivateRoute>
                <Route  path="*" component={ NotFoundPage } />
            </Switch>
        </>
    )
}
const mapStateToProps = (state) => (
{
    'user': state.user,
});
export default connect(mapStateToProps)(Routes);