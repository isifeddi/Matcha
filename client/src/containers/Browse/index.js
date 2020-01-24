import React ,{useEffect, useState}from 'react';
import {connect} from "react-redux";
import Home from '../../components/Browse';
import {getOptions} from '../../actions/addInfoAction';
import {sortUsers, getUsers,blockUser,likeUser,reportUser,viewProfileUser} from '../../actions/userAction';
import {resetStateUsers} from '../../actions/resetStateAction';
import MyModal from "../../components/commun/modal";
import ViewPro from "../../components/Browse/vP";

const HomeContainer = (props) => {
    const {getOptions, selectOptions,getUsers,blockUser,likeUser,reportUser,user,users,viewProfileUser,router,resetStateUsers,sortUsers} = props
    const route = router.location.pathname;
    useEffect(() => {
        getOptions();
        
        if(route === '/browse')
            getUsers(null);
        else if(route === '/search')
            resetStateUsers();

    }, []);
    const [state, setState] = React.useState({
        open: false,
        user: null,
        images: null,
        interests: null,
    });
    const [rating, setValueRating] = React.useState([0,0]);
    const [age, setValueAge] = React.useState([18,18]);
    const [loc, setValueLoc] = React.useState([0,0]);
    const [nbrTags, setValueNbrTags] = React.useState([0,0]);
    const [tags, setValuetags] = React.useState(null);
const handleChangeRating = (e,newValue) => {
    setValueRating(newValue);
    return newValue;
  };
  const handleChangeAge = (e,newValue) => {
    setValueAge(newValue);
    return newValue;
  };
  const handleChangeLoc = (e,newValue) => {
    setValueLoc(newValue);
    return newValue;
  };
  const handleChangeNbrTags = (e,newValue) => {
    setValueNbrTags(newValue);
    return newValue;
  };
  const handleChangeTags = (newValue) => {
    setValuetags(newValue);
    return newValue;
  };
  const handleSubmit = () => {
    let arrayTags = [];
    tags && tags.forEach(item => {
        arrayTags.push(item.value); 
    });
    const filtre = {
        tags : arrayTags,
        nbrTags : nbrTags,
        rating : rating,
        age : age,
        loc : loc,
        router : route,
    }
    if(arrayTags.length === 0 && nbrTags[0] === 0 && nbrTags[1] === 0 && rating[0] === 0 
        && rating[1] === 0 && loc[0] === 0 && loc[1] === 0 && age[0] === 18  && age[1] === 18 && route === '/search')
        {
            resetStateUsers();
            return ;
        }
        
    getUsers(filtre);
  };
    const handle = (e) =>{
        const methode = e.target.getAttribute('methode');
        sortUsers(methode,route)
    }
    const handleBlock = (event) => {
        const blocked_user_id = event.target.getAttribute('userid');
        blockUser(blocked_user_id);
        setState({
            open: false,
            user: null,
            images: null,
            interests: null,
        });
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
            <Home selectOptions={selectOptions} users={users} handleBlock={handleBlock} handleLike={handleLike} handleViewProfile={handleViewProfile} handleChangeRating={handleChangeRating}
                handleChangeAge={handleChangeAge} handleChangeLoc={handleChangeLoc} handleChangeNbrTags={handleChangeNbrTags} rating={rating}
                handleChangeTags={handleChangeTags} loc={loc} nbrTags={nbrTags} age={age} handleSubmit={handleSubmit} handle={handle}
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
    'selectOptions': state.addInfo.selectOptions,
    "users": state.users,
    "router" : state.router
});
const mapDispatchToProps = {
    "getOptions": getOptions,
    "getUsers" : getUsers,
    "blockUser" : blockUser,
    "likeUser" : likeUser,
    "reportUser" : reportUser,
    "viewProfileUser" : viewProfileUser,
    "resetStateUsers" : resetStateUsers,
    "sortUsers" : sortUsers,
};

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer);