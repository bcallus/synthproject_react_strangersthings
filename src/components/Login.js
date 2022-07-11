import React from 'react';
import { logInUser } from '../api'


const Login = ({username, password, setUsername, setPassword}) => {

    const handleSubmit = async event => {
        event.preventDefault();
        
        const data = await logInUser({
            username,
            password
        });
        console.log(data)
        data.success ? alert("You have successfully Logged In!") : alert("Incorrect Log In information. Please try again.")
    }

        return (
            <form onSubmit={handleSubmit}>
                <h2>Log In</h2>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={event => setUsername(event.target.value)} required />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={event => setPassword(event.target.value)} required />
                </label>
                <div>
                    <button type="submit" >Submit</button>
                </div>
            </form>
        )
    }
 export default Login;