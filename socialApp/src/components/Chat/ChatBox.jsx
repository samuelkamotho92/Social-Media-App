import React from 'react'
import Message from './Message';
import './Chat.css'
const ChatBox = ({ chat, currentUser }) => {

    return (
        <div className='chatBox'>
            <div className="chatBoxWrapper">
                <div className='chatBoxTop'>
                    <Message />
                    <Message own={true} />
                    <Message />
                </div>
                <div className='chatboxbottom'>
                    <textarea className='chatMessageInput' placeholder='Add comment'>Add Comment</textarea>
                    <button className='chatSubmitButton'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default ChatBox
