import React from 'react'
import './Home.css'
import storyone from '../../assets/storyone.jpg';
import storytwo from '../../assets/storytwo.jpg';
import storythree from '../../assets/story3.jpg';
import storyfour from '../../assets/curved tv.jpg';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Stories from '../../components/Stories/Stories';
import Posts from '../../components/Posts/Posts';
const Home = () => {
  return (
    <div className='home'>
      <Stories />
      <div className='createStory'>
        <button style={{ color: "red" }}>+</button>
        <p>Create Story</p>
      </div>
      <Posts />
    </div>
  )
}

export default Home