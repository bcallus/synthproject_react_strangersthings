import React from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api";

const Register = ({
  setToken,
  username,
  setUsername,
  password,
  setPassword,
}) => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (confirmPassword()) {
      const data = await registerUser({
        username,
        password,
      });
      const token = data.data.token;
      localStorage.setItem("token", JSON.stringify(token));
      setToken(token);
      data.success
        ? alert(`${data.data.message}`)
        : alert(`${data.error.message}`);
      if (token) {
        navigate("/login");
      }
    }
  };

  const confirmPassword = () => {
    const password = document.querySelector("input[name=password]");
    const confirm = document.querySelector("input[name=confirm]");
    if (confirm.value !== password.value) {
      alert("Passwords must match.");
      return false;
    } else {
      return true;
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Register New Account</h2>
      <label>
        <p>Username:</p>
        <input
          type="text"
          minLength="5"
          onChange={(event) => setUsername(event.target.value)}
          required
        />
      </label>
      <label>
        <p>Password:</p>
        <input
          type="password"
          name="password"
          minLength="5"
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </label>
      <label>
        <p>Confirm Password:</p>
        <input type="password" name="confirm" minLength="5" required />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Register;
