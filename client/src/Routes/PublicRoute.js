import React from 'react'
import { Redirect } from 'react-router-dom';
import {connect} from "react-redux";

const PublicRoute = (props) => {
    const {user, children} = props;
    return (
        <>
            { user === null ? children : <Redirect to="/home"/>}
        </>

)}

const mapStateToProps = (state) => (
{
    'user': state.user,
});
export default connect(mapStateToProps)(PublicRoute);