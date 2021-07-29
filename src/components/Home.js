import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="showUser">
        <h2><Link to="/users" className="link">click here to show the list of users</Link></h2>
      </div>
    )
}

export default Home
