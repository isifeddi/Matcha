import React, {useEffect} from 'react'
import {connect} from "react-redux";
import Notif from '../../components/Notif';
import socket from '../../socketConn';
import {OpenNotif} from '../../actions/notifAction';

const NotifCont = (props) => {
    const {openNotif, notifList}  = props
    useEffect(() => {
        socket.on('openedNotif', function(data){
            console.log('cc');
            openNotif();
        })
    }, []);
    return (
        <div>
            <Notif notifList={notifList} />
        </div>
    )
}
const mapStateToProps = (state) => (
{
    "user": state.user,
    "notifList": state.notif.notifications,
});
const mapDispatchToProps = {
    'openNotif': OpenNotif,
};

export default connect(mapStateToProps,mapDispatchToProps)(NotifCont);