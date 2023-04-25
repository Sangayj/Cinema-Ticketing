import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Signin.css";

const Signin = () => {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:8000/SignIn", {
          name,
          gender,
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            alert("user already exist");
          } else if (res.data === "not exist") {
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
          type="name"
          name="name"
          id="name"
          placeholder="name"
          value={name}
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <select
          id="gender"
          name="gender"
          value={gender}
          required
          onChange={(e) => {
            setGender(e.target.value);
          }}
        >
          <option value="">Please select a gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          value={email}
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          id="password"
          placeholder="password"
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
