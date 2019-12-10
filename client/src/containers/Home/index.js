import React from 'react';
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';

const HomeContainer = (props) => {
    if(props.user.complete === 3)
        return (
            <div>
                <h1>WELCOME {props.user ? props.user.username : ''}</h1>
            </div>
        )
    else
    return (
        <Redirect to='/completeProfile' />
    )
}

const mapStateToProps = (state) => (
{
    "user": state.user
});

export default connect(mapStateToProps)(HomeContainer);