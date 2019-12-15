import React from 'react'
import { Redirect } from 'react-router-dom';
import {connect} from "react-redux";

const PrivateRoute = (props) => {
    const {token, children} = props
    return (
        <>
            { token ? children : <Redirect to={'/login'} /> }
        </>

)}

const mapStateToProps = (state) => (
{
    'token': state.token,
});
export default connect(mapStateToProps)(PrivateRoute);