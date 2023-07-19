import React from 'react'
import './Rightbar.css';
import profile from '../../assets/profile.jpg';
import charity from '../../assets/charity.jpg';
import sam from '../../assets/background.jpg';
import Del from '../../assets/Del.jpg';
import Dennis from '../../assets/Denis.jpg';
const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="container">
        <div className="item">
          <span>Friend Requests</span>
          <div className='user'>
            <div className='userInfo' alt='samkam'>
              <img src={profile} />
              <span>James Ngunga</span>
            </div>
            <div className='buttons'>
              <button className='follow'>Follow</button>
              <button className='reject'>Reject</button>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo' alt='samkam'>
              <img src={charity} />
              <span>Charity Jelimo</span>
            </div>
            <div className='buttons'>
              <button className='follow'>Follow</button>
              <button className='reject'>Reject</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Notifications</span>
          <div className='user'>
            <div className='userInfo' alt='samkam'>
              <img src={profile} />
              <p>James Ngunga</p>
              <p>Followed you</p>
            </div>
            <span>1 day Ago</span>
          </div>
          <div className='user'>
            <div className='userInfo' alt='samkam'>
              <img src={sam} />
              <p>Chris Mureithi </p>
              <p>Liked your post</p>
            </div>
            <span>1 hr Ago</span>
          </div>
          <div className='user'>
            <div className='userInfo' alt='samkam'>
              <img src={profile} />
              <p>Samuel</p>
              <p>Commented on your post</p>
            </div>
            <span>1 min Ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className='user'>
            <div className='userInfo' alt='samkam'>
              <img src={Del} />
              <div className='online' />
              <span>Moreen Chris</span>

            </div>
          </div>
          <div className='user'>
            <div className='userInfo' alt='samkam'>
              <img src={Dennis} />
              <div className='online' />
              <span>Dennis</span>

            </div>
          </div>
          <div className='user'>
            <div className='userInfo' alt='samkam'>
              <img src={profile} />
              <div className='online' />
              <span>Samuel</span>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Rightbar