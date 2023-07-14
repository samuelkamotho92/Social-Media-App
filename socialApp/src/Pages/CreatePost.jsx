import React, { useState, useEffect } from 'react'
import {
    getStorage,
    ref,
    uploadBytesResumable,
    uploadBytes,
    getDownloadURL,
} from "firebase/storage";
import '../firebase'
import { useSelector, useDispatch } from 'react-redux';
import './createPost.css'
import { BsImage } from 'react-icons/bs';
const CreatePost = () => {
    const [postfile, setpostFile] = useState(null);
    const [statement, setStatement] = useState('');
    const profile = useSelector((state) => state.user?.user.data.profilePic);
    console.log(profile);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(postfile, statement);
    }
    return (
        <div className='createPost'>
            <form onSubmit={handleSubmit}>
                <div className='top'>
                    <div className="left">
                        <img src={profile} alt="" />
                        <input type='text' placeholder='Create a post' value={statement} onChange={(e) => setStatement(e.target.value)} />
                    </div>
                    <div className='right'>
                        {postfile && (
                            <img className="file" alt="" src={URL.createObjectURL(postfile)} height="40px" width="40px" />
                        )}
                    </div>
                </div>
                <div className='bottom'>
                    <div className='left'>
                        <input
                            type="file"
                            id="file"
                            style={{ display: "none" }}
                            onChange={(e) => setpostFile(e.target.postfile[0])}
                        />
                        <label htmlFor="file">
                            <div className="item">
                                <BsImage />
                                <span>Add Image</span>
                            </div>
                        </label>
                        <div className="item">
                            <span>Add Place</span>
                        </div>
                        <div className="item">
                            <span>Tag Friends</span>
                        </div>
                    </div>
                    <div className='right'>
                        <button type='submit'>Share</button>
                    </div>
                </div>
            </form>


        </div>
    )
}

export default CreatePost
