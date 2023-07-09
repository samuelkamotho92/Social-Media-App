import React from 'react'
import storyone from '../../assets/storyone.jpg';
import storytwo from '../../assets/storytwo.jpg';
import storythree from '../../assets/story3.jpg';
import storyfour from '../../assets/curved tv.jpg';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import profile from '../../assets/profile.jpg';
const Stories = () => {
    const stories = [
        {
            id: 1,
            name: "Chris",
            img: storyone,
        },
        {
            id: 2,
            name: "John Mwangi",
            img: storytwo,
        },
        {
            id: 3,
            name: "Josee",
            img: storythree,
        },
        {
            id: 4,
            name: "Wamutitu",
            img: storyfour,
        },
    ];


    return (
        <div className='stories'>
            {/* <p className='title'>Stories</p>
            <hr style={{ color: "black" }} /> */}
            <div className="story">
                <img src={profile} alt='profile' />
                <span>samkam</span>
                <button style={{ color: "red" }}>+</button>
            </div>
            {
                stories.map((story) => (
                    <div className="story" key={story.id}>
                        <img src={story.img} alt={story.name} />
                        <span>{story.name}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Stories
