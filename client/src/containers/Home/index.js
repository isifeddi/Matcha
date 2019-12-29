import React ,{ useEffect }from 'react';
import {connect} from "react-redux";
import Home from '../../components/Home'
import {getUsers,blockUser} from '../../actions/userAction';

const HomeContainer = (props) => {
    const {getUsers,blockUser,user,users} = props
    useEffect(() => {
            getUsers(user.id);
    }, []);
    const handleBlock = (event) =>{
        const blocked_user_id = event.target.getAttribute('userid');
        blockUser(blocked_user_id);
        // console.log(user_id_blocked);
    }
        return (
            
            <div>
                <Home users={users} handleBlock={handleBlock}/>
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
};

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer);