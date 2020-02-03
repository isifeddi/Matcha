import React, {useState} from 'react';
import {connect} from "react-redux";
import {LogoutAction} from '../../actions/logoutAction';
import {OpenNotif} from '../../actions/notifAction';
import NavBar from '../../components/NavBar';
import MyModal from "../../components/commun/modal";
import NotifList from "../../components/Notif/index";

const NavBarContainer = (props) => {
    const {openNotif, user, handleLogout, notifList} = props;
    const [state, setState] = useState({
        open: false,
    });
    const handleNotifListOpen = () => {
        openNotif();
        setState({open: true});
    }
    const handleClose = () => {
        setState({open: false});
    }
    let i = 0;
    notifList && notifList.forEach(e => {
        if(e.seen === 0) i++;
    });
    return(
        <>
        <NavBar unseenNotif={i} handleLogout={handleLogout} user={user} handleNotifListOpen={handleNotifListOpen}/>
        {state.open && 
            <MyModal isOpen={state.open}  handleClose={handleClose}>
                <NotifList notifList={notifList}/>
            </MyModal>
        }
        </>
    )
}

const mapStateToProps = (state) => (
{
    "user" : state.user,
    "notifList": state.notif.notifications,
});
const mapDispatchToProps = {
    "logoutAction": LogoutAction,
    "openNotif": OpenNotif,
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
 