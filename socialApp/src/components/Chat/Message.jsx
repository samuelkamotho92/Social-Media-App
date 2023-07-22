import React from 'react'
import './message.css'
import sarah from '../../assets/sarah.jpg'
import { format } from "timeago.js";
const Message = ({ message, own }) => {
    console.log(message);
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img
                    className="messageImg"
                    src={sarah}
                    alt=""
                />
                <p className="messageText">{message?.content}</p>
            </div>
            <div className="messageBottom">{format(message.createdAt)}</div>
        </div>
    )
}

export default Message
