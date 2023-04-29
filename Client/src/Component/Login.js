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
        console.log(data);
        history("/");

        // Login successful
      } else if (response.status === 400) {
        alert("Incorrect password");
      } else if (response.status === 404) {
        // User does not exist
        alert("User does not exist");
      } else {
        alert("An error occurred");
      }

      console.log(data);
    } catch (err) {
      console.error(err);
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
