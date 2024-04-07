import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            hello 
            <hr />
            <Link to='/editor'><button>try now...</button></Link>
        </div>
    )
}

export default Home
