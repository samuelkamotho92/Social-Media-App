import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { BsFillArrowRightSquareFill, BsCodeSlash, BsFillTelephoneFill, BsSearch, BsThreeDotsVertical } from 'react-icons/bs';
import './Topbar.css';
import status1 from '../../assets/storyone.jpg'
import status2 from '../../assets/storytwo.jpg'
import status3 from '../../assets/story3.jpg';
const Topbar = () => {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <div>
                    <img src={status1} alt='status 1' />
                </div>
                <div>
                    <img src={status2} alt='status 1' />
                </div>
                <div>
                    <img src={status3} alt='status 1' />
                </div>
                <BsFillArrowRightSquareFill className='iconbtn' style={{ cursor: "pointer", fontSize: '32px' }} />
            </div>
            <div className="topbarCenter">
                <div>
                    <BsCodeSlash style={{ cursor: "pointer", fontSize: '24px' }} />
                </div>
                <div>
                    <h2 style={{ textAlign: "center" }}>MLSA</h2>
                    <p style={{ textAlign: "center" }}><span>20 members</span><span>12 online</span></p>
                </div>
                <div>
                    <BsFillTelephoneFill style={{ cursor: "pointer", fontSize: '24px' }} />
                    <BsSearch style={{ cursor: "pointer", fontSize: '24px' }} />
                    <BsThreeDotsVertical style={{ cursor: "pointer", fontSize: '24px' }} />
                </div>
                {/* <div className="searchbar">
                    <FaSearch className="searchIcon" />
                    <input
                        placeholder="Search for friend, post or video"
                        className="searchInput"
                    />
                </div> */}
            </div>
            {/* <div className='topbarRight'>
                <p>Group</p>
            </div> */}
        </div>
    )
}

export default Topbar