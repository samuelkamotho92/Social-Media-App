import React, { useRef } from 'react'
import Topbar from './Topbar'
import './Chat.css'
import profile from '../../assets/profile.jpg';
import { BsFlagFill, BsPeopleFill, BsCodeSlash, BsFillChatLeftDotsFill } from 'react-icons/bs';
import Conv from './Conv';
import Groupconv from './Groupconv';
import Chatonline from './Chatonline';
import { BiFootball } from 'react-icons/bi';
import Message from './Message';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getChats, chatUser } from '../../redux/apicall';
import ChatBox from './ChatBox';
import { io } from 'socket.io-client';
const Chat = () => {

    const dispatch = useDispatch();
    const [currentChat, setCurrentChat] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [sendMessage, setSendMessage] = useState(null);
    //fecth current user
    const user = useSelector((state) => state.user?.user?.data);
    console.log(user.id);
    const chat = useSelector((state) => state.chat?.chats);
    console.log(useSelector((state) => state))
    console.log(chat, 'all chats');
    // chat?.map((chat) => console.log(typeof chat?.members));
    const socket = useRef();
    useEffect(() => {
        socket.current = io("http://localhost:8080");
        //subscribe to event which is connecting
        socket.current.emit("new-user-add", user?.id)
        //get active users on frontned emit the same name
        socket.current.on("get-users", (users) => {
            console.log('check user');
            setOnlineUsers(users);
        })
    }, [user]);
    console.log(onlineUsers);

    useEffect(() => {
        getChats(dispatch, user?.id);
    }, []);

    const updateChat = async (chat, id) => {
        setCurrentChat(chat);
        chatUser(dispatch, id);
    }

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
                        {chat?.map((chat) => {
                            const members = JSON.parse(chat?.members)
                            console.log(typeof JSON.parse(chat?.members));
                            console.log(chat?.members);
                            const id = members?.find((id) => id !== user?.id);
                            console.log(id);
                            // const id = chat?.members?.find((id) => id !== user.id);
                            // console.log(id);
                            return (
                                <div onClick={() => updateChat(chat, id)} key={chat?.id}>
                                    <Conv data={chat} user={user?.id} members={members} />
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>
                <ChatBox chat={currentChat} currentUser={user?.id} setSendMessage={setSendMessage} />
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
