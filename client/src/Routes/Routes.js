import React from 'react';
import {connect} from "react-redux";
import {Route, Switch, Redirect} from 'react-router-dom';
import RegisterContainer from '../containers/Register';
import Browse from '../containers/Browse';
import loginContainer from '../containers/Login';
import NotFoundPage from '../components/NotFoundPage';
import ForgotPasswordContainer from '../containers/sendEmail';
import EmailConfirmCont from '../containers/emailConfirmation';
import ResetPasswordContainer from '../containers/resetPassword';
import CompleteProfile from '../containers/completeProfile/stepper';
import Profile from '../containers/Profile';
import Activity from '../containers/Activity';
import Chat from '../containers/Chat';
import Notif from '../containers/Notif';
import Home from '../components/Home';
import MyFlash from '../components/commun/flash';

const Routes = (props) => {
    const {user, notif} = props;
    return (
        <>
            {notif && <MyFlash variant="info" msg={[notif]}/>}
            <Switch>
                <Route exact path="/confirmation/:token"  component={user === null ? EmailConfirmCont : Home}/>
                <Route exact path="/resetPassword/:token"  component={user === null ? ResetPasswordContainer  : Home}/>
                <Route exact path="/forgotPassword"  component={user === null ? ForgotPasswordContainer  : Home}/>
                <Route exact path="/register"  component={user === null ? RegisterContainer  : Home} />
                <Route exact path="/login"  component={user === null ? loginContainer  : Home}/>

                <Route exact path="/home" component={Home}/>

                <Route exact path="/profile" component={user !== null  ? (user.complete === 3 ? Profile : CompleteProfile) : loginContainer }/>
                <Route exact path="/activity" component={user !== null  ? (user.complete === 3 ? Activity : CompleteProfile) : loginContainer }/> 
                <Route exact path="/chat" component={user !== null  ? (user.complete === 3 ? Chat : CompleteProfile) : loginContainer }/> 
                <Route exact path="/notif" component={user !== null  ? (user.complete === 3 ? Notif : CompleteProfile) : loginContainer }/> 
                <Route exact path="/browse" component={user !== null  ? (user.complete === 3 ? Browse : CompleteProfile) : loginContainer }/> 
                <Route exact path="/search" component={user !== null  ? (user.complete === 3 ? Browse : CompleteProfile) : loginContainer }/>
                <Route exact path="/completeProfile" component={user !== null  ? CompleteProfile : loginContainer }/> 

                <Route path="" component={NotFoundPage}/>
            </Switch>
        </>
    )
}
const mapStateToProps = (state) => (
{
    'user': state.user,
    'notif': state.notif.current_notif
});
export default connect(mapStateToProps)(Routes);