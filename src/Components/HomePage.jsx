import React from 'react'
import videoBG from '../assets/videoBG.mp4'

const HomePage = () => {
    return (
        <div className='home-bg'>
            <div className="overlay"></div>
            <video src={videoBG} autoPlay loop muted></video>
            <div className="content">
                <h1>Welcome</h1>
                <p>to my site.</p>
            </div>
        </div>
    )
}

export default HomePage
