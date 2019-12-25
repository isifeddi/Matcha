import ProfileInfo from '../../components/Profile/profileInfo';
import React from 'react'
import {connect} from "react-redux";
import {reduxForm} from 'redux-form';
let profileInfoContainer = ()=>{
    return(
        <ProfileInfo />
    )
}
const mapStateToProps = () => ({

});
const mapDispatchToProps = {
    
};
    
profileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(profileInfoContainer);
 profileInfoContainer = reduxForm({
    'form' :'fd'
})(profileInfoContainer);
    
export default profileInfoContainer;
