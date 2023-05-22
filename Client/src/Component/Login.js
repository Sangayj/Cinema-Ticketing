import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt";

import axios from "axios";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/Login", {
        username,
        password,
      });
      const { token } = response.data;
      console.log(token);
      // Set the JWT token in local storage
      localStorage.setItem("token", token);

      // Navigate to the appropriate page based on the user's role
      if (decodeToken(token).role === "admin") {
        navigate("/AdminDashboard");
        window.location.reload();
      } else if (decodeToken(token).role === "user") {
        navigate("/Homepage");
        window.location.reload();
      }
    } catch (error) {
      console.log("Invalid credentials");
    }
  };

  return (
    <div>
      <div className="login-form-container">
        <form className="login-form" action="post">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" onClick={submit}>
            Login
          </button>
          <div className="login-form-links">
            <a href="/forgotpassword">Forgot Password?</a>
            <a href="/SignUp">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
