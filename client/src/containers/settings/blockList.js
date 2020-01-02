import React, {useEffect} from 'react'
import {connect} from "react-redux";
import BlockList from '../../components/settings/blockList';
import {getBlockUser} from '../../actions/userAction';
const BlockListContainer = (props) => {
    const {user,getBlockUser,blockList} = props;
    useEffect(() => {
        getBlockUser();
}, []);
    return (
        <div>
            <BlockList blockList={blockList}/>
        </div>
    )
}
const mapStateToProps = (state) => (
{
        "user": state.user,
        "blockList" : state.blockList,
});
const mapDispatchToProps = {
    "getBlockUser" : getBlockUser,
};

export default connect(mapStateToProps,mapDispatchToProps)(BlockListContainer);


