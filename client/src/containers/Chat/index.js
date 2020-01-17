import React, { useEffect } from 'react';
import {connect} from "react-redux";
import Chat from '../../components/Chat';
import {SelectConversation, SendMessage} from '../../actions/chatAction';

const ChatContainer = (props) => {
    const {user, selectedConversation, conversations, selectConversation, sendMessage} = props
    useEffect(() => {
        if(user){

        }
    }, []);
    const handleSelectConversation = (id) => {
        selectConversation(id);
    }
    const handleSendMessage = (id, message) => {
        sendMessage(id, message);
    }
    return (
        <Chat
            handleSelectConversation={handleSelectConversation}
            handleSendMessage={handleSendMessage}
            selected={selectedConversation}
            conversations={conversations}
        />
    )
}

const mapStateToProps = (state) => (
{
    "user": state.user,
    "selectedConversation": state.chat.selectedConversation,
    "conversations": state.chat.conversations,
});
const mapDispatchToProps = {
    "selectConversation": SelectConversation,
    "sendMessage": SendMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);