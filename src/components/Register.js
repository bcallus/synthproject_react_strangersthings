import React from 'react';

const Register = () => {
    return (
        <form>
            <h2>Register New Account</h2>
            <label>
                <p>Username</p>
                <input />
            </label>
            <label>
                <p>Password</p>
                <input />
            </label>
            <div>
                <button type="submit" >Submit</button>
            </div>
        </form>
    )
}

export default Register;