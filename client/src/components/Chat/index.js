import React, {useState} from 'react';
import './chat.css';

const SidePanel = () => {
    return(
        <div id="sidepanel">
            <div id="contacts">
                <ul> {/* map on matched users*/}
                    <li className="contact active"> {/* if clicked active else no*/}
                        <div className="wrap">
                            <span className="contact-status online"></span>
                            <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                            <div className="meta">
                                <p className="name">Harvey Specter</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

const ConvTitle = () => {
    return(
        <div className="contact-profile">
                <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                <p>Harvey Specter</p>
        </div>
    );
}

const Messages = () => {
    return(
        <div className="messages">
            <ul>
                <li className="sent">
                    <img src="ss" alt="" />
                    <p>How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!</p>
                </li>
                <li className="replies">
                    <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                    <p>When you're backed against the wall, break the god damn thing down.</p>
                </li>
                <li className="replies">
                    <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                    <p>Excuses don't win championships.</p>
                </li>
                <li className="sent">
                    <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
                    <p>Oh yeah, did Michael Jordan tell you that?</p>
                </li>
                <li className="replies">
                    <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                    <p>No, I told him that.</p>
                </li>
                <li className="replies">
                    <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                    <p>What are your choices when someone puts a gun to your head?</p>
                </li>
                <li className="sent">
                    <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
                    <p>What are you talking about? You do what they say or they shoot you.</p>
                </li>
                <li className="replies">
                    <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                    <p>Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.</p>
                </li>
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

const Content = () => {
    return(
        <div className="content">
            <ConvTitle />
            <Messages />
            <SendMessage />
        </div>
    );
}

const Chat = () => {
    return(
    <div id="frame">
        <SidePanel />
        <Content />
    </div>
    );
}

export default Chat;