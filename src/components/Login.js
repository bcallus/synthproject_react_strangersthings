import React from "react";
import { useNavigate } from 'react-router-dom';
import { logInUser } from "../api";

const Login = ({ username, password, setUsername, setPassword, setToken, isLoggedIn, setIsLoggedIn }) => {

    const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = await logInUser({
      username,
      password,
    });
      if (data.success) {
          setIsLoggedIn(true)
        console.log("data", data)
        console.log("username: ", username, "password: ", password)
        const token = data.data.token
        setToken(token) 
        console.log("token in login", token)
        alert(`${data.data.message}`)
        navigate('/profile')
      } else {
        alert(`${data.error.message}`);
      } 
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Log In</h2>
      <label>
        <p>Username</p>
        <input
          type="text"
          onChange={(event) => setUsername(event.target.value)}
          required
        />
      </label>
      <label>
        <p>Password</p>
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
export default Login;
