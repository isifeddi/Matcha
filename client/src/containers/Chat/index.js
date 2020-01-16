import React, { useEffect } from 'react';
import {connect} from "react-redux";
import Chat from '../../components/Chat';

const ChatContainer = (props) => {
    const {user, selectedConversation, conversations} = props
    useEffect(() => {
        if(user){

        }
    }, []);
    return (
        <Chat selected={selectedConversation} conversations={conversations}/>
    )
}

const mapStateToProps = (state) => (
{
    "user": state.user,
    "selectedConversation": state.chat.selectedConversation,
    "conversations": state.chat.conversations, 
});
const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);