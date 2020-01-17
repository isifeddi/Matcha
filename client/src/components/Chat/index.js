/* eslint-disable */
import React, {useState} from 'react';
import './chat.css';

const Conversations = (props) => {
    const {handleSelectConversation, selected, conversations} = props;
    return(
        <div id="sidepanel">
            <div id="contacts">
                <ul>
                    {conversations.map(item => (
                        <li onClick={() => handleSelectConversation(item.id)} key={item.id} className={selected.id === item.id ? "contact active": "contact"}>
                            <div className="wrap">
                                <span className={item.isOnline === 1 ? "contact-status online" : "contact-status offline"}></span>
                                    <img src={item.profilePic} alt={item.lastname} />
                                    <div className="meta">
                                        <p className="name">{item.firstname} {item.lastname}</p>
                                    </div>
                            </div>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </div>
    );
}

const ConvTitle = (props) => {
    const {selected} = props;
    return(
        <div className="contact-profile">
            <img src={selected.profilePic} alt={selected.lastname}/>
            <p>{selected.firstname} {selected.lastname}</p>
        </div>
    );
}

const Messages = (props) => {
    const {selected} = props;
    return(
        <div className="messages">
            <ul>
                {selected.messages.length > 0 ? selected.messages.map(item => (
                    <li key={Math.random()} className={item.isMyMessage ? "sent" : "replies"}>
                        <img src={item.image} alt={item.image} />
                        <p>{item.message}</p>
                    </li>
                )) : <p>no messsages yet</p>}
            </ul>
        </div>
    );
}

const SendMessage = (props) => {
    const {handleSendMessage, selected} = props;
    const [message, setMessage] = useState("");
    const handleChange = e => setMessage(e.target.value);
    const handleSubmit = form => {
        form.preventDefault();
        if (message.length > 255) setMessage("");
        else if (message) {
            handleSendMessage(selected.id, message);
            let cont = document.querySelector('.messages');
            const height = cont.scrollHeight;
            //cont.scrollTop = cont.scrollHeight;
            cont.scrollTo(0, height+1000);
            setMessage("");
        }
        document.querySelector('.message-input input').value = null;
    }
    return(
        <div className="message-input">
            <div className="wrap">
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} type="text" placeholder="Write your message..." />
                    <button  type="submit" className="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

const Content = (props) => {
    const {handleSendMessage, selected} = props;
    return(
        <div className="content">
            <ConvTitle selected={selected}/>
            <Messages selected={selected}/>
            <SendMessage handleSendMessage={handleSendMessage} selected={selected}/>
        </div>
    );
}

const Chat = (props) => {
    const {handleSelectConversation, handleSendMessage, selected, conversations} = props;
    return(
    <div id="frame">
        <Conversations handleSelectConversation={handleSelectConversation} selected={selected} conversations={conversations}/>
        <Content handleSendMessage={handleSendMessage} selected={selected} conversations={conversations}/>
    </div>
    );
}

export default Chat;