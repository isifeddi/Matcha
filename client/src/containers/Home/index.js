import React ,{ useEffect }from 'react';
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';
import Home from '../../components/Home'
import {getUsers} from '../../actions/userAction';
const HomeContainer = (props) => {
    const {getUsers,user,users} = props
    useEffect(() => {
            getUsers(user.id);
    }, []);
    if(props.user && props.user.complete === 3)
        return (
            <div>
                <Home users={users}/>
            </div>
        )
    else
    return (
        <Redirect to='/completeProfile' />
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