import React, { useEffect, useState, useRef } from 'react'
import './Rightbar.css';
import profile from '../../assets/profile.jpg';
import charity from '../../assets/charity.jpg';
import sam from '../../assets/background.jpg';
import Del from '../../assets/Del.jpg';
import Dennis from '../../assets/Denis.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { getSuggested, createRelationship, followSuggested } from '../../redux/apicall'
import { FaUserCircle } from 'react-icons/fa'
import { io } from 'socket.io-client';
import Chatonline from '../Chat/Chatonline';
import { domain } from '../../utils/utils';
import axios from 'axios';
const Rightbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.user?.data)
  const userid = useSelector((state) => state.user?.user?.data.id)
  const suggested = useSelector((state) => state.user?.suggestedUser);
  const currentuserid = useSelector((state) => state.user?.user?.data?.id);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [notifications, setNotification] = useState([]);
  const [notifiedImage, setnotifiedImage] = useState("");
  const socket = useRef();
  console.log(suggested);
  useEffect(() => {
    getSuggested(dispatch, userid);
  }, []);


  // console.log(notifications);
  //get Online users
  useEffect(() => {
    socket.current = io("http://localhost:8080");
    //subscribe to event which is connecting
    socket.current.emit("new-user-add", user?.id)
    //get active users on frontned emit the same name
    socket?.current?.on("get-users", (users) => {
      console.log('check user');
      setOnlineUsers(users);
    })
    //get notifications
    socket?.current?.on("getnotifications", (data) => {
      console.log("sender id")
      setNotification((prev) => [...prev, data]);
    })
  }, [user, socket]);
  console.log(notifications);
  console.log(notifications.senderId);
  // useEffect(() => {
  //   const getData = async () => {
  //     console.log(notifications.senderId);
  //     const user = await axios.get(`${domain}/user/${notifications.senderId}`);
  //     console.log(user);
  //   }
  //   getData();
  // }, [notifications.senderId])

  //display notification
  const displayNotifications = ({ senderName, senderId, receiverName, type }) => {
    const getData = async () => {
      console.log(notifications.senderId);
      const user = await axios.get(`${domain}/user/${senderId}`);
      console.log(user);
    }
    getData();
    let action;
    if (type == 1) {
      action = "liked"
    } else if (type == 2) {
      action = "commented"
    }
    return (
      <div className='user'>
        <div className='userInfo'>
          <img src={user.profilePic} />
          <p>{`${senderName}`}</p>
          <p>{`${action} Your Post`}</p>
        </div>
      </div>
    )
  }

  return (
    <div className='rightbar'>
      <div className="container">
        <div className="item">
          <span>Friend Suggestions</span>
          {
            suggested?.map((user) => (
              <div className='user' key={user.id}>
                <div className='userInfo' alt='samkam'>
                  {user.profilePic ? <img src={user.profilePic} /> : <FaUserCircle />}
                  {/* <img src={user.profilePic} /> */}
                  <span>{user.username}</span>
                </div>
                <div className='buttons'>
                  <button className='follow' onClick={() => followSuggested(dispatch, { followeruserId: userid, followeduserId: user.id }, user)}>Follow</button>
                </div>
              </div>
            ))
          }
        </div>
        <div className="item" style={{ position: "relative" }}>
          <span>Notifications</span>
          {notifications && <span style={{ color: "red", position: "absolute", top: "0px" }}>{notifications.length}</span>}
          {
            notifications.map((notif) => (
              displayNotifications(notif)
            ))
          }
        </div>

        <div className="item" key={user?.id}>
          <span>Online Friends</span>
          {
            onlineUsers ?
              onlineUsers.map((user) => (
                <Chatonline id={user.userId} />
              )) : (
                <p>No online user</p>
              )
          }
        </div>

      </div>
    </div>
  )
}

export default Rightbar