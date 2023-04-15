import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import SignIn from "./Component/SignIn";
import Login from "./Component/Login";
import View from "./Component/View";
import Footer from "./Component/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Login" element={<Login />} S />
      </Routes>
      <div>
       <Footer />
      </div>
    </div>
  );
}

export default App;
