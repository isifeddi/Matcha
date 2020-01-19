import React, { useEffect } from 'react';
import {connect} from "react-redux";
import Chat from '../../components/Chat';
import {GetConversations, SelectConversation, SendMessage, LoadMessages} from '../../actions/chatAction';

const ChatContainer = (props) => {
    const {user, getConversations, selectedConversation, conversations, selectConversation, loadMessages, sendMessage} = props
    useEffect(() => {
        if(user){
            getConversations();
        }
    }, []);
    const handleSelectConversation = (id) => {
        selectConversation(id);
        loadMessages(id);
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
    "getConversations": GetConversations,
    "loadMessages": LoadMessages,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);