import React, { useState } from "react";
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
  const [role, setRole] = useState("");
  const [secretKey, setSecretKey] = useState("");

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

  const submit = async (e) => {
    e.preventDefault();
    if (role === "Admin" && secretKey !== "12345") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();

      try {
        const response = await fetch("http://localhost:8000/api/SignUp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            role,
            name,
            username,
            gender,
            email,
            phone,
            password,
            confirmPassword,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          // Successful signup
          console.log(data);
          history("/Login");
        } else {
          // Signup failed
          if (response.status === 409) {
            alert("User already exists.");
          } else {
            alert("Signup failed.");
          }
        }
      } catch (error) {
        console.error("Error signing up:", error);
      }
    }
  };

  return (
    <div className="signin-form-container">
      <div className="radios">
        Register As
        <input
          type="radio"
          name="role"
          value="user"
          onChange={(e) => setRole(e.target.value)}
        />
        User
        <input
          type="radio"
          name="role"
          value="admin"
          onChange={(e) => setRole(e.target.value)}
        />
        Admin
      </div>

      <form className="signin-form " action="post" onSubmit={submit}>
        {role === "admin" ? (
          <div className="mb-3">
            <label>Secret Key</label>
            <input
              type="text"
              className="form-control"
              placeholder="Secret Key"
              onChange={(e) => setSecretKey(e.target.value)}
            />
          </div>
        ) : null}
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
        <label htmlFor="email">Email (Optional)</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="phone">Phone (Optional)</label>
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
