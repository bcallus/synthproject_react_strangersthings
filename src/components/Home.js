import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="home-title">
                <h1>Welcome to Stranger's Things</h1>
                <p>The place to buy and sell your things!</p>
            </div>
            <div className="home-body">
            <h2>Here are a few helpful tips to help you get started.</h2>
            <h3>Want to take a look at what people are selling?</h3>
            <p>Visit the Posts tab to browse through public postings.</p>
            <h3>See something you like?</h3>
            <p>Log in to view your profile and unlock access to posts.</p>
            <h3>New to Stranger's Things?</h3>
            <p><Link to="/register">Click Here</Link> to register a new account.</p>
            </div>
        </div>
    )
}

export default Home;