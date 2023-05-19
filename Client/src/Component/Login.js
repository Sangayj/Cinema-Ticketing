import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import "./Login.css";

const Login = () => {
  const history = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState(null); // State to store the current username

  useEffect(() => {
    // Check if the user is already logged in
    const token = Cookies.get("token");
    if (token) {
      const decodedToken = decodeToken(token);
      const username = decodedToken.username;
      setCurrentUser(username);
    }
  }, []);

  const decodeToken = (token) => {
    try {
      // Decode the token payload
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  };

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
        const token = data.token;
        Cookies.set("token", token, { expires: 7 });

        const decodedToken = decodeToken(token);
        const username = decodedToken.username;
        setCurrentUser(username);

        if (data.userType === "admin") {
          history("/AdminDashboard");
        } else {
          history("/Homepage");
        }
      } else {
        if (response.status === 400) {
          alert("Incorrect password");
        } else if (response.status === 404) {
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
    <div>
      {currentUser ? (
        <p>Welcome, {currentUser}</p>
      ) : (
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
      )}
    </div>
  );
};

export default Login;
