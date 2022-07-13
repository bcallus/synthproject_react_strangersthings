import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({token, isLoggedIn}) => {
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
                        {token ? <Link to="/profile" >Profile</Link> : null}
                    </li>
                    <li>
                        {isLoggedIn ? <Link to="/logout">Log Out</Link> : <Link to="/login">Log In</Link>}
                    </li>
                    {/* don't forget a register link, can be from within one of the tabs*/}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;