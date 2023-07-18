import React, { useState, useEffect } from 'react';
import './update.css';
import { BsCloudUpload } from 'react-icons/bs'
const Update = ({ setUpdateComp }) => {
    const [cover, setCover] = useState(null);
    const [profile, setProfile] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [fullnames, setfullnames] = useState("");
    const [city, setCity] = useState("");
    const [website, setwebsite] = useState("");
    return (
        <div className='update'>
            <div className='wrapper'>
                <h1 style={{ textAlign: "center" }}>Update Profile</h1>
                <span onClick={() => setUpdateComp(false)} className="close">X</span>
                <form action="">
                    <div className='files'>
                        <div className='inputsFields'>
                            <div>
                                <label htmlFor="coverpic">
                                    <span>Cover Picture</span>
                                    <div className='imageContainer'>
                                        <img
                                            src={
                                                cover
                                                    ? URL.createObjectURL(cover)
                                                    : 'upload cover image'
                                            }
                                            alt=""
                                        />
                                        <BsCloudUpload className="icon" />
                                    </div>
                                </label>
                                <input
                                    type="file"
                                    id="cover"
                                    style={{ display: "flex" }}
                                    placeholder='enter cover pic'
                                    onChange={(e) => setCover(e.target.files[0])}
                                />
                            </div>
                            <div>
                                <label htmlFor="profile">
                                    <span>Profile Picture</span>
                                    <div className="imgContainer">
                                        <img
                                            src={
                                                profile
                                                    ? URL.createObjectURL(profile)
                                                    : "upload profile pic"
                                            }
                                            alt=""
                                        />
                                        <BsCloudUpload className="icon" />
                                    </div>
                                </label>
                                <input
                                    type="file"
                                    id="profile"
                                    style={{ display: "flex" }}
                                    placeholder="uplaod profile pic"
                                    onChange={(e) => setProfile(e.target.files[0])}
                                />
                            </div>
                        </div>
                        <div className='inputsFields'>
                            <div>
                                <label>Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label>Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    name="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>User Name</label>
                                <input
                                    type="text"
                                    value={username}
                                    name="username"
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>

                        </div>
                        <label>Full Names</label>
                        <input
                            type="text"
                            value={fullnames}
                            name="fullnames"
                            onChange={(e) => setfullnames(e.target.value)}
                        />
                        <label>City</label>
                        <input
                            type="text"
                            value={city}
                            name="city"
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <label>wEBSITE</label>
                        <input
                            type="text"
                            value={website}
                            name="website"
                            onChange={(e) => setwebsite(e.target.value)}
                            required
                        />
                    </div>
                    <button type='submit' onClick={() => setUpdateComp(false)}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Update
