import React, { useState } from 'react'
import './Conv.css';
import profile from '../../assets/profile.jpg';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getuser, chatUser } from '../../redux/apicall';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { domain } from '../../utils/utils';
const Conv = ({ data, user, members }) => {
    const [userInfo, setUser] = useState([]);
    const dispatch = useDispatch();
    // const user = useSelector((state) => state.currentUser.user);
    useEffect(() => {
        const getUserinfo = async () => {
            console.log(members, user);
            const id = members?.find((id) => id !== user);
            const { data } = await axios.get(`${domain}/user/${id}`);
            setUser(data.user);

        }
        getUserinfo();
    }, []);
    return (
        <div className='conversation'>
            <div className='online-dot'></div>
            <img src={userInfo.profilePic} alt='profile' style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
            <span>Online</span>
            <span style={{ color: "black" }}>{userInfo?.username}</span>
        </div>
    )
}

export default Conv