import React from 'react'
import { GiThreeFriends } from 'react-icons/gi'
import { FaUserCircle } from 'react-icons/fa'
import { LuMessageSquare } from 'react-icons/lu'
import { BsSearch } from 'react-icons/bs'
import { MdNotificationsActive, MdAddCircle, MdOutlineLogout } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../../redux/apicall'
import { useNavigate } from 'react-router-dom'
import './Sidebar.css';
const Sidebar = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user?.data.username);
  const userStatus = useSelector((state) => state.user.user.status);
  const dispatch = useDispatch();
  const logoutUser = () => {
    logOut(dispatch);
    navigate('/login')
  }
  return (
    <div className='sidebar'>
      <div className='container'>
        <div className="menu">
          <div className='user'>
            <FaUserCircle />
            <span>{user}</span>
          </div>
          <div className='item'>
            <GiThreeFriends />
            <span>Groups</span>
          </div>
          <div className='item'>
            <BsSearch />
            <span>Messages</span>
          </div>
          <div className='item'>
            <MdNotificationsActive />
            <span>Notifications</span>
          </div>
          <div className='item'>
            <MdAddCircle />
            <span>Create Post</span>
          </div>
          <div className='item' >
            <MdOutlineLogout />
            <span onClick={() => logoutUser()} style={{ cursor: "pointer" }}>Log Out</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar