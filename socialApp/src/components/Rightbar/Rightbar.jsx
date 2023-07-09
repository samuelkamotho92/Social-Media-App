import React from 'react'
import './Rightbar.css';
import profile from '../../assets/profile.jpg';
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
              <img src={profile} />
              <span>James Ngunga</span>
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
              <img src={profile} />
              <p>Chris Mureithi </p>
              <p>Liked your post</p>
            </div>
            <span>1 hr Ago</span>
          </div>
          <div className='user'>
            <div className='userInfo' alt='samkam'>
              <img src={profile} />
              <p>Judy</p>
              <p>Commented on your post</p>
            </div>
            <span>1 min Ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className='user'>
            <div className='userInfo' alt='samkam'>
              <img src={profile} />
              <div className='online' />
              <span>Moreen Chris</span>

            </div>
          </div>
          <div className='user'>
            <div className='userInfo' alt='samkam'>
              <img src={profile} />
              <div className='online' />
              <span>Jedy</span>

            </div>
          </div>
          <div className='user'>
            <div className='userInfo' alt='samkam'>
              <img src={profile} />
              <div className='online' />
              <span>Dennis</span>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Rightbar