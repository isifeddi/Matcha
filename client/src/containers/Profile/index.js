import Profile from '../../components/Profile'
import React from 'react';
import {connect} from "react-redux";

const ProfileContainer = (props) => {
    //const {} = props;
    return (
        <div>
            <Profile />
        </div>
    )
}


const mapStateToProps = () => (
{
    
});
const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);