
import React ,{ useEffect }from 'react';
import {connect} from "react-redux";
import ViewProfile from '../../components/Profile/viewProfile'
import {getImages} from '../../actions/imagesAction';
const ViewProfileContainer = (props) => {
    const {user,images,getImages} = props;
    
    return (
        <div>
            <ViewProfile user={user} images={images}/>
        </div>
    )
}

const mapStateToProps = (state) => (
{
    "user" : state.user,
    "images" : state.images,
});
const mapDispatchToProps = {
    "getImages" : getImages,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewProfileContainer);