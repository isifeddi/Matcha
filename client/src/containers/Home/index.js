import React ,{ useEffect }from 'react';
import {connect} from "react-redux";
import Home from '../../components/Home'
import {getUsers,blockUser,likeUser,reportUser} from '../../actions/userAction';

const HomeContainer = (props) => {
    const {getUsers,blockUser,likeUser,reportUser,user,users} = props
    useEffect(() => {
            getUsers(user.id);
    }, []);
    const handleBlock = (event) =>{
        const blocked_user_id = event.target.getAttribute('userid');
        blockUser(blocked_user_id);
    }
    const handleLike = (event) =>{
        const liked_user_id = event.target.getAttribute('userid');
        likeUser(liked_user_id);
    }
    const handleReport = (event) =>{
        const reported_user_id = event.target.getAttribute('userid');
        reportUser(reported_user_id);
    }
        return (
            
            <div>
                <Home users={users} handleBlock={handleBlock} handleLike={handleLike} handleReport={handleReport}/>
            </div>
        )
}

const mapStateToProps = (state) => (
{
    "user": state.user,
    "users": state.users,
});
const mapDispatchToProps = {
    "getUsers" : getUsers,
    "blockUser" : blockUser,
    "likeUser" : likeUser,
    "reportUser" : reportUser,
};

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer);