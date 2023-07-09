import React from 'react'
import {GiThreeFriends} from 'react-icons/gi'
import {FaUserCircle} from 'react-icons/fa'
import {LuMessageSquare} from 'react-icons/lu'
import {BsSearch} from 'react-icons/bs'
import {MdNotificationsActive,MdAddCircle} from 'react-icons/md'
import './Sidebar.css';
const Sidebar = () => {
  return (
    <div className='sidebar'>
 <div className='container'>
<div className="menu">
<div className='user'>
    <FaUserCircle />
    <span>Samkam</span>
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
</div>
 </div>
    </div>
  )
}

export default Sidebar