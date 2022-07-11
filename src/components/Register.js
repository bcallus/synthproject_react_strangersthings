import React, { useState } from 'react';
import { registerUser } from '../api';


const Register = ({ setToken, username, setUsername, password, setPassword }) => {

    // const [username, setUsername] = useState();
    // const [password, setPassword] = useState();

    const handleSubmit = async event => {
        event.preventDefault();
        
        const data = await registerUser({
            username,
            password
        });
        const token = data.data.token;
        console.log("username", username, "password", password)
        console.log("data", data)
        console.log("Token in Register", token)
        console.log("set Token in Register", setToken)
        localStorage.setItem("token", JSON.stringify(token))
        setToken(token);
        data.success ? alert("You have successfully registered. Click 'Log In' to continue.") : alert("Error creating account. Please try again.") //fix error alert

    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register New Account</h2>
            <label>
                <p>Username</p>
                <input type="text" minLength="5" onChange={event => setUsername(event.target.value)} required/>
            </label>
            <label>
                <p>Password</p>
                <input type="password" minLength="5" onChange={event => setPassword(event.target.value)} required/>
            </label>
            <div>
                <button type="submit" >Submit</button>
            </div>
        </form>
    )
}

export default Register;