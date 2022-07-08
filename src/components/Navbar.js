import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar'>
            <h1>Stranger's Things</h1>

            {/* turn these into links */}
            <div className='navbar-tabs'> 
                <h2>Home</h2>
                <h2>Posts</h2>
                <h2>Profile</h2>
                <h2>Log In(out)</h2> 
            </div>
        </div>
    )
}

export default Navbar;