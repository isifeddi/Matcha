import React from 'react'
import {connect} from "react-redux";
import {Route, Switch, Redirect} from 'react-router-dom'
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
import menu from '../components/commun/menu'
const Routes = (props) => {

    return (
        <div>
            <Switch>
            
            <Route path="/settings" component={ menu }/>
                <Route path="/confirmation/:token"  component={ EmailConfirmCont }/>
                <Route path="/resetPassword/:token"  component={ ResetPasswordContainer }/>
                <Route path="/forgotPassword"  component={ ForgotPasswordContainer }/>
                <Route path="/register"  component={ RegisterContainer } />
                <Route path="/login"  component={ loginContainer }/>
                <PrivateRoute>
                    {props.user && props.user.complete === 3 ? <Route path="/profile" component={ Profile }/> : <Redirect to='/completeProfile'/>}
      
                    <Route path="/completeProfile"  component={ CompleteProfile }/>

                    {props.user && props.user.complete === 3 ? <Route path="/home" component={ HomeContainer }/> : <Redirect to='/completeProfile'/>}

                </PrivateRoute>
 
                <Route  path="*" component={ NotFoundPage } />
            </Switch>
        </div>
    )
}
const mapStateToProps = (state) => (
{
    'user': state.user,
});
export default connect(mapStateToProps)(Routes);