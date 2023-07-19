import React from 'react'
import './Conv.css';
import profile from '../../assets/profile.jpg';
const Conv = ({ name, time }) => {
    return (
        <div className='conversation'>
            <img src={profile} alt='profile' style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
            <span>{name}</span>
            <span>{time}</span>
        </div>
    )
}

export default Conv