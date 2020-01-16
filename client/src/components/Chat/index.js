import React, {useState} from 'react';
import './chat.css';

const Conversations = (props) => {
    const {selected, conversations} = props;
    return(
        <div id="sidepanel">
            <div id="contacts">
                <ul>
                    {conversations.map(item => (
                        <li className={selected.id === item.id ? "contact active": "contact"}>
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
            <img src={selected.profilePic} alt={selected.lastname} />
            <p>{selected.firstname} {selected.lastname}</p>
        </div>
    );
}

const Messages = (props) => {
    const {selected} = props;
    return(
        <div className="messages">
            <ul>
                {selected.messages.map(item => (
                    <li className={item.isMyMessage ? "sent" : "replies"}>
                        <img src={item.image} alt={item.image} />
                        <p>{item.message}</p>
                </li>
                ))}
            </ul>
        </div>
    );
}

const SendMessage = () => {
    const [message, setMessage] = useState("");
    const handleChange = e => setMessage(e.target.value);
    const handleSubmit = form => {
        form.preventDefault();
        if (message.length > 255) setMessage("");
        else if (message) {
            document.querySelector('.messages ul').innerHTML += '<li class="sent"><img src="http://emilcarlsson.se/assets/mikeross.png" alt="" /><p>' + message + '</p></li>';
            setMessage("");
            let cont = document.querySelector('.messages');
            cont.scrollTop = cont.scrollHeight;
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
    const {selected} = props;
    return(
        <div className="content">
            <ConvTitle selected={selected}/>
            <Messages selected={selected}/>
            <SendMessage selected={selected}/>
        </div>
    );
}

const Chat = (props) => {
    const {selected, conversations} = props;
    return(
    <div id="frame">
        <Conversations selected={selected} conversations={conversations}/>
        <Content selected={selected} conversations={conversations}/>
    </div>
    );
}

export default Chat;