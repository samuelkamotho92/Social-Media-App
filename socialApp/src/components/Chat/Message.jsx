import React from 'react'
import './message.css'
import sarah from '../../assets/sarah.jpg'
const Message = ({ message, own }) => {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img
                    className="messageImg"
                    src={sarah}
                    alt=""
                />
                <p className="messageText">Hello Sam long time</p>
            </div>
            <div className="messageBottom">9pm</div>
        </div>
    )
}

export default Message
