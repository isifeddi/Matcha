import React ,{ useEffect }from 'react';
import {connect} from "react-redux";
import Home from '../../components/Home'
import {getUsers} from '../../actions/userAction';

const HomeContainer = (props) => {
    const {getUsers,user,users} = props
    useEffect(() => {
            getUsers(user.id);
    }, []);
        return (
            <div>
                <Home users={users}/>
            </div>
        )
}

const mapStateToProps = (state) => (
{
    "user": state.user,
    "users": state.users.users
    
});
const mapDispatchToProps = {
    "getUsers" : getUsers,
};

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer);