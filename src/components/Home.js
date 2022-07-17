import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-page">
            <h1>Welcome to Stranger's Things!</h1>
            <h2>View public posts by clicking Post tab.</h2>
            <h2>Log in to view your profile and get access to posts.</h2>
            <h2>New to Stranger's Things? <Link to="/register">Click Here</Link> to Register a new account.</h2>
        </div>
    )
}

export default Home;