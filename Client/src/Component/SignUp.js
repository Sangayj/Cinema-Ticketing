import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./SignUp.css";

const SignUp = () => {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");

  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    if (value.length < 8) {
      setPasswordError("Password should be at least 8 characters long");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target;
    setConfirmPassword(value);
    if (value !== password) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  async function Submit(e) {
    e.preventDefault();
    if (password === confirmPassword) {
    } else {
      setPasswordError("Passwords do not match");
    }
    try {
      await axios
        .post("http://localhost:8000/Signup", {
          name,
          username,
          gender,
          email,
          phone,
          password,
          confirmPassword,
        })
        .then((res) => {
          if (res.data === "exist") {
            alert("user already exist");
          } else if (res.data === "not exist") {
            history("/");
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
      <form className="signin-form " action="post" onSubmit={Submit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
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
        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          name="gender"
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
          }}
          required
        >
          <option value="">-- Select Gender --</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />
        {passwordError && <div style={{ color: "red" }}>{passwordError}</div>}{" "}
        <button type="submit" disabled={passwordError}>
          Sign up
        </button>{" "}
      </form>
    </div>
  );
};

export default SignUp;
