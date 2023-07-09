import React from 'react'
import profile from '../../assets/profile.jpg';
import postone from '../../assets/sroryone.jpg';
import twinnie from '../../assets/twinnie.jpg';
import Post from '../Post/Post';
import './Posts.css';
const Posts = () => {

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
                posts.map((post) => (
                    <Post post={post} key={post.id} />
                ))
            }

        </div>



    )
}

export default Posts
