import React from 'react'
import Message from './Message';
import './Chat.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMessage, createMessage } from '../../redux/apicall';
import InputEmoji from 'react-input-emoji'
import { useState } from 'react';
import moment from 'moment';
const ChatBox = ({ chat, currentUser, setSendMessage }) => {
    const id = chat?.id;
    console.log(id);
    const dispatch = useDispatch();
    const messages = useSelector((state) => state?.message?.messages);
    console.log(messages);
    const user = useSelector((state) => state?.user?.user?.data);
    // console.log(messages, user.id, messages.senderId);
    const [newmessage, setNewMessage] = useState("");
    // const []
    useEffect(() => {
        console.log(chat?.id);
        getMessage(dispatch, id);
    }, [chat, currentUser])
    const handleChange = (newMessage) => {
        setNewMessage(newMessage);
    }
    const handleSend = (e) => {
        e.preventDefault();
        const createdAt = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
        const message = {
            senderId: user?.id,
            content: newmessage,
            chatId: chat?.id,
            createdAt: createdAt
        }
        createMessage(dispatch, message);
        setNewMessage("");

        //receiverId


    }
    return (
        <div className='chatBox'>
            <div className="chatBoxWrapper">
                <div className='chatBoxTop'>
                    {
                        messages?.map((message) => message?.senderId == user?.id ? (<Message own={true} message={message} key={message?.id} />) : (<Message message={message} key={message?.id} />))
                    }
                </div>
                <div className='chatboxbottom'>
                    <InputEmoji className='chatMessageInput' value={newmessage} onChange={handleChange} placeholder="Add comment" />
                    <button className='chatSubmitButton' onClick={handleSend}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default ChatBox
