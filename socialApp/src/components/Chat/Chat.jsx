import React from 'react'
import Topbar from './Topbar'
import './Chat.css'
const Chat = () => {
    return (
        <>
            <Topbar />
            <div className="messenger">
                <div className='chatmenu'>
                    <div className="chatMenuWrapper">
                        <p style={{ textAlign: "center" }}><span>Messages</span><span>20</span></p>
                        <input type="text" placeholder='football' />
                    </div>
                </div>
                <div className='chatBox'>
                    <div className="chatBoxWrapper">
                        box
                    </div>
                </div>
                <div className='chatOnline'>
                    <div className="chatOnlineWrapper">
                        Group
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat
