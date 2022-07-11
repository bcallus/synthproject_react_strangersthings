import React, { useState } from 'react';
import { registerUser } from '../api';


const Register = ({ setToken }) => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async event => {
        event.preventDefault();
        
        const data = await registerUser({
            username,
            password
        });
        const token = data.data.token;
        // console.log("username", username, "password", password)
        console.log("data", data)
        console.log("Token in Register", token)
        console.log("set Token in Register", setToken)
        localStorage.setItem("token", JSON.stringify(token))
        setToken(token);

    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register New Account</h2>
            <label>
                <p>Username</p>
                <input type="text" onChange={event => setUsername(event.target.value)} />
            </label>
            <label>
                <p>Password</p>
                <input type="password" onChange={event => setPassword(event.target.value)} />
            </label>
            <div>
                <button type="submit" >Submit</button>
            </div>
        </form>
    )
}

export default Register;