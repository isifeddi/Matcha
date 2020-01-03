import React ,{useEffect, useState}from 'react';
import {connect} from "react-redux";
import Home from '../../components/Home'
import {getUsers,blockUser,likeUser,reportUser,viewProfileUser} from '../../actions/userAction';
import MyModal from "../../components/commun/modal";
import ViewPro from "../../components/Home/vP";

const HomeContainer = (props) => {
    const {getUsers,blockUser,likeUser,reportUser,user,users,viewProfileUser} = props
    useEffect(() => {
        getUsers(user.id);
    }, []);
    const [state, setState] = React.useState({
        open: false,
        user: null,
        images: null,
        interests: null,
    });
    const handleBlock = (event) => {
        const blocked_user_id = event.target.getAttribute('userid');
        blockUser(blocked_user_id);
        setState({
            open: false,
            user: null,
            images: null,
            interests: null,});
    }
    const handleLike = (event) => {
        const liked_user_id = event.target.getAttribute('userid');
        likeUser(liked_user_id);
        setState({
            open: false,
            user: null,
            images: null,
            interests: null,});
    }
    const handleReport = (event) => {
        const reported_user_id = event.target.getAttribute('userid');
        reportUser(reported_user_id);
        setState({
            open: false,
            user: null,
            images: null,
            interests: null,});
    }
    const handleViewProfile = (event) => {
        const user = JSON.parse(event.target.getAttribute('user'));
        const images = JSON.parse(event.target.getAttribute('img'));
        const interests = JSON.parse(event.target.getAttribute('inters'));
        viewProfileUser(user.id);
        setState({
            open: true,
            user: user,
            images: images,
            interests: interests,
        });
    }
    const handleClose = () => {
        setState({
            open: false,
            user: null,
            images: null,
            interests: null,});
    }
    return (
        <div>
            <Home users={users} handleBlock={handleBlock} handleLike={handleLike} handleViewProfile={handleViewProfile}/>
            {state.open && 
                    <MyModal isOpen={state.open}  handleClose={handleClose}>
                        <ViewPro    handleBlock={handleBlock} handleLike={handleLike} handleReport={handleReport}
                                    user={state.user} images={state.images} interests={state.interests}
                        />
                    </MyModal>
            }
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