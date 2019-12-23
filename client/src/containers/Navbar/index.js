import React from 'react';
import {connect} from "react-redux";
import {LogoutAction} from '../../actions/logoutAction';
import NavBar from '../../components/NavBar'

const NavBarContainer = (props) => {
    const {token, handleLogout} = props
    return(
        <NavBar handleLogout={handleLogout} token={token}/>
    )
}

const mapStateToProps = (state) => (
{
    "token" : state.user ? state.user.token : null
});
const mapDispatchToProps = {
    "logoutAction": LogoutAction
};
const mergeProps = (stateProps, dispatchProps, otherProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...otherProps,
    "handleLogout" : () => {
        dispatchProps.logoutAction();
    }
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(NavBarContainer);
 