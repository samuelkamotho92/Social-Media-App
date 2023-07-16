import React, { useEffect, useState } from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import { Link } from 'react-router-dom';
import { BiRepost } from 'react-icons/bi';
import { BsFillBookmarkFill } from 'react-icons/bs';
import './Post.css';
import Comments from '../Comments/Comments';
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux';
import { getlikePost } from '../../redux/apicall';
const Post = ({ post }) => {
    const dispatch = useDispatch();
    const comments = useSelector((state) => state?.comment?.comments);
    const likedpost = useSelector((state) => state?.likes?.likes)
    console.log(likedpost);
    const array = post?.image;
    const string = JSON.stringify(array).replace(/[[\]]/g, '').replace(/'/g, '').replace(/^"|"$/g, '');
    const [commentOpen, setCommentOpen] = useState(false);
    const liked = true;
    useEffect(() => {
        getlikePost(dispatch, post.id);
    }, []);

    return (
        <div className='post'>
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post.profilePic} alt={post.profilePic} />
                        <div className="details">
                            <Link to={`/profile/${post.userId[0]}`} style={{ textDecoration: "none" }}>
                                <span className='name'>{post.username}</span>
                            </Link>
                            <span className='date'>{moment(post.createdAt).fromNow()}</span>
                        </div>
                    </div>
                    <MoreHorizIcon />
                </div>
                <div className="content">
                    <p>{post.description}</p>
                    <img src={string} alt="" />
                </div>
                <div className="info">
                    <div className="item" color='red'>
                        {likedpost?.length ? <p style={{ color: "red" }}><FavoriteOutlinedIcon /></p> : <p style={{ color: "black" }}><FavoriteBorderOutlinedIcon /></p>}
                        {likedpost?.length} likes
                    </div>
                    <div className="item" color='red' onClick={() => setCommentOpen(!commentOpen)}>
                        <TextsmsOutlinedIcon />
                        {comments?.length} comments
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
                {commentOpen && <Comments postId={post?.id} />}
            </div>
        </div >
    )
}

export default Post
