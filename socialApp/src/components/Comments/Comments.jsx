import React from 'react'
import profile from '../../assets/profile.jpg';
import './Comments.css'
const comments = [
    {
        id: 1,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error natus optio dolorem ex voluptatibus maiores, provident esse illo blanditiis dolor?",
        name: "John smith",
        userId: 1,
        profilePic: profile,
        date: '23hrs ago'
    },
    {
        id: 2,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error natus optio dolorem ex voluptatibus maiores, provident esse illo blanditiis dolor?",
        name: "John smith",
        userId: 1,
        profilePic: profile,
        date: '22 hrs ago'
    },
]
const Comments = () => {
    return (
        <div className='comments'>
            <div className='write'>
                <img src={profile} alt="profile pic" />
                <input type="text" placeholder='Share your comment... ' />
                <button>Share</button>
            </div>
            {
                comments.map((comment) => (
                    <div className='comment' key={comment.id}>
                        <img src={comment.profilePic} alt='profile pic' />
                        <div className='info'>
                            <span>{comment.name}</span>
                            <p>{comment.desc}</p>
                        </div>
                        <span className='date'>
                            {comment.date}
                        </span>
                    </div>
                ))
            }
        </div>
    )
}

export default Comments
