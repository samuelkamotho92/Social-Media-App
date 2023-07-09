import React from 'react'
import profile from '../../assets/profile.jpg';
import "./Userprofile.css";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import parklands from '../../assets/MLSA.jpeg';
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const Userprofile = () => {
  return (
    <div className='userprofile'>
      <div className="images">
        <img src={parklands} alt="" className='cover' />
        <img src={profile} alt="" className='profilePic' />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span className='name'>Samuel Kamotho</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>KENYA</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>SamkamDev</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <div>
              <EmailOutlinedIcon />
            </div>
            <div>
              <MoreVertIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Userprofile