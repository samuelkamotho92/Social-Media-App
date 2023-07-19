import React from 'react'
import Topbar from './Topbar'
import './Chat.css'
import profile from '../../assets/profile.jpg';
import { BsFlagFill, BsPeopleFill, BsCodeSlash, BsFillChatLeftDotsFill } from 'react-icons/bs';
import Conv from './Conv';
import Groupconv from './Groupconv';
import Chatonline from './Chatonline';
import { BiFootball } from 'react-icons/bi';
import Message from './Message';
const Chat = () => {
    return (
        <>
            <Topbar />
            <div className="messenger">
                <div className='chatmenu'>
                    <div className="chatMenuWrapper">
                        <div className='ft'>
                            <input type="text" placeholder='football' />
                        </div>
                        <div className='pinned'>
                            <BsFlagFill />
                            <p>Pin Chats</p>
                        </div>
                        <Conv name="Mary Mutindi" time="11pm" />
                        <div className='channels'>
                            <BsPeopleFill />
                            <p>Group & Channels</p>
                        </div>
                        <Groupconv name='MLSA' />
                        <Groupconv name='Football' />
                        <div className="messages">
                            <BsFillChatLeftDotsFill />
                            <p>All Messages</p>
                        </div>
                        <Conv name="Samuel" time="8am" />
                        <Conv name="John" time="9am" />
                    </div>
                </div>
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
                <div className='chatOnline'>
                    <div className="chatOnlineWrapper">
                        <Chatonline />
                        <Chatonline />
                        <Chatonline />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat
