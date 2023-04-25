import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const history = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:8000/", {
          username,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            history("/");
          } else if (res.data === "not exist") {
            alert("User have not sign up");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
    // Add your login logic here
  }

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
        </button>{" "}
      </form>
    </div>
  );
};

export default Login;
