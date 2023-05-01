import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const history = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        history("/");
        // Successful login
        console.log(data);
      } else {
        // Login failed
        if (response.status === 404) {
          alert("User not found.");
        } else if (response.status === 401) {
          alert("Incorrect password.");
        } else {
          alert("Login failed.");
        }
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  return (
    <div className="login-form-container">
      <form className="login-form" action="post">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        <button type="submit" onClick={submit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
