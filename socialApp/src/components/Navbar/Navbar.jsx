import React from 'react'
import { MdHome, MdPhoneAndroid, MdOutlineHome, MdMessage, MdDashboard, MdNotifications, } from 'react-icons/md'
import { BsFillMoonFill } from 'react-icons/bs'
import { BiUserCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import DarkMode from '../Darkmode';
import './Navbar.css';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='left'>
        <Link to='/'>
          <span style={{ color: "#DEC9EE" }}>Let's talk</span>
        </Link>
        <div className='icon'>
          <DarkMode />
        </div>
      </div>
      <div className='center'>
        <input type='text' placeholder='Search' style={{ borderRadius: "20px", width: '218px', height: "58px", backgroundColor: "gray" }} />
        <div className='icon'>
          <MdHome />
        </div>
        <div className='icon'>
          <MdMessage />
        </div>
      </div>
      <div className='rightpart'>
        <div className='icon'>
          <MdDashboard />
        </div>
        <div className='icon'>
          <MdNotifications />
        </div>
        <div className='user'>
          <img src='../../../src/assets/profile.jpg' alt='profile' />
          <span>Samkam</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar