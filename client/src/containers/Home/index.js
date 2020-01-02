import React ,{ useEffect }from 'react';
import {connect} from "react-redux";
import Home from '../../components/Home'
import {getUsers,blockUser,likeUser,reportUser,viewProfileUser} from '../../actions/userAction';
import Modal from "../../components/commun/modal";

const HomeContainer = (props) => {
    const {getUsers,blockUser,likeUser,reportUser,user,users,viewProfileUser} = props
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

    const handleViewProfile = (event) =>{
        const user = JSON.parse(event.target.getAttribute('user'));
        const images = JSON.parse(event.target.getAttribute('img'));
        const interests = JSON.parse(event.target.getAttribute('inters'));
        viewProfileUser(user.id);
         //console.log(user)
        // console.log(images)
        // console.log(interests)
       return <Modal />
    }
    
        return (
            
            <div>
                <Home users={users} handleBlock={handleBlock} handleLike={handleLike} handleViewProfile={handleViewProfile}/>
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
    "viewProfileUser" : viewProfileUser,
};

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer);