import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='navbar'>
            <h1>Stranger's Things</h1>
            <nav className="navbar-tabs">
                <ul>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/posts" >Posts</Link>
                    </li>
                    <li>
                        <Link to="/profile" >Profile</Link>
                    </li>
                    <li>
                        <Link to="/login">Log In</Link>
                    </li>
                    {/* don't forget a register link, can be from within one of the tabs*/}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;