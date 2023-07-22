import React from 'react'
import Message from './Message';
import './Chat.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMessage } from '../../redux/apicall';
import InputEmoji from 'react-input-emoji'
import { useState } from 'react';
const ChatBox = ({ chat, currentUser }) => {
    const id = chat?.id;
    const dispatch = useDispatch();
    const messages = useSelector((state) => state?.message?.messages)[0];
    const user = useSelector((state) => state?.user?.user?.data);
    console.log(messages, user.id, messages.senderId);
    const [newmessage, setNewMessage] = useState("");
    useEffect(() => {
        console.log(chat?.id);
        getMessage(dispatch, id);
    }, [chat, currentUser])
    const handleChange = (newMessage) => {
        setNewMessage(newMessage);
    }
    return (
        <div className='chatBox'>
            <div className="chatBoxWrapper">
                <div className='chatBoxTop'>
                    {
                        messages?.map((message) => message.senderId == user.id ? (<Message own={true} message={message} key={message.id} />) : (<Message message={message} key={message.id} />))
                    }
                </div>
                <div className='chatboxbottom'>
                    <InputEmoji className='chatMessageInput' value={newmessage} onChange={handleChange} placeholder="Add comment" />
                    <button className='chatSubmitButton'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default ChatBox
