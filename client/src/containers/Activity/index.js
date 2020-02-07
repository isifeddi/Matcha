import React, {useEffect} from 'react'
import {connect} from "react-redux";
import BlockList from '../../components/Activity';
import {getBlockUser,deblockUser,getLikeUser,dislikeUserAct} from '../../actions/userAction';
const BlockListContainer = (props) => {
    const {getBlockUser,blockList,deblockUser,getLikeUser,dislikeUserAct,likeList} = props;
    useEffect(() => {
        getBlockUser();
        getLikeUser();
}, [getBlockUser,getLikeUser]);
    const handleDeblock = (deblocked_user_id) =>{
        deblockUser(deblocked_user_id);
    }
    const handleDislike= (dislike_user_id) =>{
        dislikeUserAct(dislike_user_id);
    }
    return (
        <div>
            <BlockList blockList={blockList} handleDeblock={handleDeblock} handleDislike={handleDislike} likeList={likeList}/>
        </div>
    )
}
const mapStateToProps = (state) => (
{
        "user": state.user,
        "blockList" : state.blockList,
        "likeList" : state.likeList,
});
const mapDispatchToProps = {
    "getBlockUser" : getBlockUser,
    "deblockUser" : deblockUser,
    "getLikeUser" : getLikeUser,
    "dislikeUserAct" : dislikeUserAct,
};

export default connect(mapStateToProps,mapDispatchToProps)(BlockListContainer);


