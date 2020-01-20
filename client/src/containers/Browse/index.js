import React ,{useEffect, useState}from 'react';
import {connect} from "react-redux";
import Home from '../../components/Browse'
import {getUsers,blockUser,likeUser,reportUser,viewProfileUser} from '../../actions/userAction';
import MyModal from "../../components/commun/modal";
import ViewPro from "../../components/Browse/vP";

const HomeContainer = (props) => {
    const {getUsers,blockUser,likeUser,reportUser,user,users,viewProfileUser} = props
    useEffect(() => {
        getUsers(null);
    }, []);
    const [state, setState] = React.useState({
        open: false,
        user: null,
        images: null,
        interests: null,
    });
    const [rating, setValueRating] = React.useState([0,0]);
  const [age, setValueAge] = React.useState([0,0]);
  const [loc, setValueLoc] = React.useState([0,0]);
  const [tags, setValueTags] = React.useState([0,0]);
const handleChangeRating = (event, newValue) => {
    setValueRating(newValue);
    //console.log(newValue);
    return newValue;
  };
  const handleChangeAge = (event, newValue) => {
    setValueAge(newValue);
    //console.log(newValue);
    return newValue;
  };
  const handleChangeLoc = (event, newValue) => {
    setValueLoc(newValue);
    //console.log(newValue);
    return newValue;
  };
  const handleChangeTags = (event, newValue) => {
    setValueTags(newValue);
    //console.log(newValue);
    return newValue;
  };
  const handleSubmit = () => {
    const filtre = {
        tags : tags,
        rating : rating,
        age : age,
        loc : loc
    }
    getUsers(filtre);
  };
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
            <Home users={users} handleBlock={handleBlock} handleLike={handleLike} handleViewProfile={handleViewProfile} handleChangeRating={handleChangeRating}
                handleChangeAge={handleChangeAge} handleChangeLoc={handleChangeLoc} handleChangeTags={handleChangeTags} rating={rating}
                loc={loc} tags={tags} age={age} handleSubmit={handleSubmit}
                />
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