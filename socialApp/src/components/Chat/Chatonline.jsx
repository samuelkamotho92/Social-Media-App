import React from 'react'
import prof from '../../assets/Del.jpg';
import './Chatonline.css'
const Chatonline = () => {
    return (
        <div className="chatOnline">
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img
                        className="chatOnlineImg"
                        src={prof}
                        alt=""
                    />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">Delphine</span>
            </div>
        </div>
    )
}

export default Chatonline
