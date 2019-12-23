import React from 'react'
import { Redirect } from 'react-router-dom';
import {connect} from "react-redux";

const PrivateRoute = (props) => {
    const {user, children} = props
    return (
        <>
            { user !== null ? children : <Redirect to={'/login'} /> }
        </>

)}

const mapStateToProps = (state) => (
{
    'user': state.user,
});
export default connect(mapStateToProps)(PrivateRoute);