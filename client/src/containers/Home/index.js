import React from 'react';
import {connect} from "react-redux";

const HomeContainer = (props) => {
    return (
        <div>
            <h1>WELCOME {props.user ? props.user.username : ''}</h1>
        </div>
    )
}

const mapStateToProps = (state) => (
{
    "user": state.user
});

export default connect(mapStateToProps)(HomeContainer);