import React from 'react';
import {connect} from "react-redux";
import {Route, Switch, Redirect} from 'react-router-dom';
import RegisterContainer from '../containers/Register';
import Browse from '../containers/Browse';
import loginContainer from '../containers/Login';
import NotFoundPage from '../containers/NotFoundPage';
import ForgotPasswordContainer from '../containers/sendEmail';
import EmailConfirmCont from '../containers/emailConfirmation';
import ResetPasswordContainer from '../containers/resetPassword';
import CompleteProfile from '../containers/completeProfile/stepper';
import Profile from '../containers/Profile';
import PrivateRoute from './PrivateRoute';
import Activity from '../containers/Activity';
import Chat from '../containers/Chat';
import Home from '../components/Home';

const Routes = (props) => {
    return (
        <div>
            <Switch>
               <Route path="/confirmation/:token"  component={ EmailConfirmCont }/> 
               <Route path="/resetPassword/:token"  component={ ResetPasswordContainer }/> 
               <Route path="/forgotPassword"  component={ ForgotPasswordContainer }/>  
               <Route path="/register"  component={ RegisterContainer } /> 
               <Route path="/login"  component={ loginContainer }/> 
                <Route path="/home" component={Home}/>
                <PrivateRoute>
                    {props.user && props.user.complete === 3 ? <Route path="/profile" component={ Profile }/> : <Redirect to='/completeProfile'/>}
                    {props.user && props.user.complete === 3 ? <Route path="/activity" component={ Activity }/> : <Redirect to='/completeProfile'/>}
                    {props.user && props.user.complete === 3 ?  <Route path="/chat" component={ Chat }/> : <Redirect to='/completeProfile'/>}
                    {props.user && props.user.complete === 3 ? <Route path="/browse" component={ Browse }/> : <Redirect to='/completeProfile'/>}
                    <Route path="/completeProfile"  component={CompleteProfile}/>

                </PrivateRoute>
                <Route  path="*" component={ NotFoundPage }/>
            </Switch>
        </div>
    )
}
const mapStateToProps = (state) => (
{
    'user': state.user,
});
export default connect(mapStateToProps)(Routes);