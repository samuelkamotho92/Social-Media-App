import React from 'react'
import Topbar from './Topbar'
import './Chat.css'
import profile from '../../assets/profile.jpg';
import { BsFlagFill, BsPeopleFill, BsCodeSlash, BsFillChatLeftDotsFill } from 'react-icons/bs';
import { BiFootball } from 'react-icons/bi';
const Chat = () => {
    return (
        <>
            <Topbar />
            <div className="messenger">
                <div className='chatmenu'>
                    <div className="chatMenuWrapper">
                        <p style={{ textAlign: "center" }}><span>Messages</span><span>20</span></p>
                        <input type="text" placeholder='football' />
                        <div className='pinned'>
                            <BsFlagFill />
                            <p>Pin Chats</p>
                        </div>
                        <div className='channels'>
                            <BsPeopleFill />
                            <p>Group & Channels</p>
                        </div>
                        <div className='group'>
                            <BsCodeSlash />
                            MLSA
                        </div>
                        <div className='group'>
                            <BiFootball />
                            Football
                        </div>
                        <div className="messages">
                            <BsFillChatLeftDotsFill />
                            <p>All Messages</p>
                        </div>
                        <div>
                            <img src={profile} alt='profile' style={{ width: "40px", height: "60px", borderRadius: "50%" }} />
                            <span>Samuel</span>
                            <span>9pm</span>
                        </div>
                        <div>
                            <img src={profile} alt='profile' style={{ width: "40px", height: "60px", borderRadius: "50%" }} />
                            <span>Samuel</span>
                            <span>9pm</span>
                        </div>
                        <div>
                            <img src={profile} alt='profile' style={{ width: "40px", height: "60px", borderRadius: "50%" }} />
                            <span>Jospeth</span>
                            <span>7am</span>
                        </div>
                        <div>
                            <img src={profile} alt='profile' style={{ width: "40px", height: "60px", borderRadius: "50%" }} />
                            <span>Leader</span>
                            <span>Typing ...</span>
                        </div>
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
