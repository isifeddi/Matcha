import React, {useEffect} from 'react'
import {connect} from "react-redux";
import BlockList from '../../components/Activity';
import {getBlockUser,deblockUser,getLikeUser,dislikeUser} from '../../actions/userAction';
const BlockListContainer = (props) => {
    const {getBlockUser,blockList,deblockUser,getLikeUser,dislikeUser,likeList} = props;
    useEffect(() => {
        getBlockUser();
        getLikeUser();
}, [getBlockUser,getLikeUser]);
    const handleDeblock = (event) =>{
        const deblocked_user_id = event.target.getAttribute('userid');
        deblockUser(deblocked_user_id);
    }
    const handleDislike= (event) =>{
        const dislike_user_id = event.target.getAttribute('userid');
       dislikeUser(dislike_user_id);
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
    "dislikeUser" : dislikeUser,
};

export default connect(mapStateToProps,mapDispatchToProps)(BlockListContainer);


