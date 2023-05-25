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
        // Verify user role and redirect to the corresponding panel
        if (data.userType === "admin") {
          // Save user session to local storage
          localStorage.setItem("user", JSON.stringify(data));
          console.log("Token:", data.token); // Display token in the console
          history("/AdminDashboard");
        } else if (data.userType === "user") {
          // Save user session to local storage
          localStorage.setItem("user", JSON.stringify(data));
          console.log("Token:", data.token); // Display token in the console
          history("/");
        } else {
          console.error("Invalid user role");
        }
      } else {
        if (response.status === 400) {
          // Incorrect password
          alert("Incorrect password");
        } else if (response.status === 404) {
          // User does not exist
          alert("User does not exist");
        } else {
          console.error(data.error);
        }
      }
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
        <div className="login-form-links">
          <a href="/forgotpassword">Forgot Password?</a>
          <a href="/SignUp">Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
