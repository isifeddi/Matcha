import React, { Component } from 'react';
import Localisation from '../../components/completeProfile/localisation';
import {connect} from "react-redux";
import {getLoc} from '../../actions/addInfoAction';

class LocalisationContainer extends Component{
    componentDidMount(){
        this.props.getLoc();
    }
    render(){
        const userLocation = {lat: this.props.user.lat, lng: this.props.user.lng}
        if(!this.props.user.lat) return null;
        return (
            <Localisation userL={userLocation}/>
        )
    }
}
const mapStateToProps = (state) => (
{
    "user": state.user,
});
const mapDispatchToProps = {
    "getLoc": getLoc,
};

export default connect(mapStateToProps, mapDispatchToProps)(LocalisationContainer);