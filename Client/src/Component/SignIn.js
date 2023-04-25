import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./SignIn.css";

const Signin = () => {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:8000/SignIn", {
          email,
          password,
        })
        .then((res) => {
          if (res.data == "exist") {
            alert("user already exist");
          } else if (res.data == "not exist") {
            history("/#");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
    // Add your sign-in logic here
  }

  return (
    <div className="signin-form-container">
      <form className="login-form" action="post">
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type="submit" onClick={submit} />
      </form>
    </div>
  );
};

export default Signin;
