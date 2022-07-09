import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home'

const Navbar = () => {
    return (
        <div className='navbar'>
            <h1>Stranger's Things</h1>

            {/* turn these into links */}
            <div className='navbar-tabs'> 
                <Routes>
                    {/* <Route></Route> */}
               
                {/* <a href="/posts">Posts</a>
                <a href="/profile">Profile</a>
                {/* make a ternary if isLogged then render log out, if not render log in, something like that */}
                {/* <a href="/login">Log In</a>  */}
                {/* <a href="/logout">Log Out</a> */} 
                </Routes> 
            </div>
        </div>
    )
}

export default Navbar;