import React from 'react';

const Logout = ({ setIsLoggedIn, setToken}) => {
    
    const handleLogout = () => {
        setIsLoggedIn(false)
        setToken();
        alert('You have successfully been logged out.')
    }

    return (
        <div>
            <h1>Thank's for visiting!</h1>
            <button onClick={handleLogout}>Click here to log out.</button>
        </div>
    )
}

export default Logout;