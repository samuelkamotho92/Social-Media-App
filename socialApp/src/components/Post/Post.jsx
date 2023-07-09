import React, { useState } from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import { Link } from 'react-router-dom';
import { BiRepost } from 'react-icons/bi';
import { BsFillBookmarkFill } from 'react-icons/bs';
import './Post.css';
import Comments from '../Comments/Comments';
const Post = ({ post }) => {

    //on click show us
    const [commentOpen, setCommentOpen] = useState(false);


    const liked = false;

    return (
        <div className='post'>
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post.img} alt="post" />
                        <div className="details">
                            <Link to={`/profile/${post.userId}`} style={{ textDecoration: "none" }}>
                                <span className='name'>{post.name}</span>
                            </Link>
                            <span className='date'>{post.date}</span>
                        </div>
                    </div>
                    <MoreHorizIcon />
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={post.img} alt="" />
                </div>
                <div className="info">
                    <div className="item" color='red'>
                        {liked ? <p style={{ color: "black" }}><FavoriteOutlinedIcon /></p> : <p style={{ color: "black" }}><FavoriteBorderOutlinedIcon /></p>}
                        30likes
                    </div>
                    <div className="item" color='red' onClick={() => setCommentOpen(!commentOpen)}>
                        <TextsmsOutlinedIcon />
                        5 comments
                    </div>
                    <div className="item" color='red'>
                        <BiRepost />
                        Repost Post
                    </div>
                    <div className="item" color='red' style={{ justifySelf: 'flex-end' }}>
                        <BsFillBookmarkFill />
                        Save Post
                    </div>
                </div>
                {commentOpen && <Comments />}
            </div>
        </div >
    )
}

export default Post
