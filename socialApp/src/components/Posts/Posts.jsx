import React, { useState, useEffect } from 'react'
import profile from '../../assets/profile.jpg';
import postone from '../../assets/sroryone.jpg';
import twinnie from '../../assets/twinnie.jpg';
import Post from '../Post/Post';
import './Posts.css';
import { useQuery } from 'react-query';
import { getPosts } from '../../redux/apicall';
import { useDispatch, useSelector } from 'react-redux';
const Posts = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.user.user);
    console.log(token);
    const postdata = useSelector((state) => state.post?.posts);
    console.log(postdata);
    useEffect(() => {
        getPosts(dispatch, token);
    }, [])
    const posts = [
        {
            id: 1,
            name: "Samuel Kamotho",
            userId: 1,
            profilePic: profile,
            desc: "Best day of my life",
            img: postone,
            date: '1 day ago'
        },
        {
            id: 2,
            name: "Twinnie",
            userId: 2,
            profilePic: profile,
            desc: "Siz wedding",
            img: twinnie,
            date: '2 days ago'
        }
    ]

    return (
        <div className='posts'>
            {
                postdata.map((post) => (
                    <Post post={post} key={post.id} />
                ))
            }

        </div>



    )
}

export default Posts
