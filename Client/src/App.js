import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import SignIn from "./Component/SignIn";
import Login from "./Component/Login";
//import View from "./Component/View";
import Footer from "./Component/Footer";
import View from "./Component/View";
import Ticket from "./Component/Ticket";
import Class_Props from "./Component/Class_Props";
import React_Props from "./Component/React_Props";
import Movie1 from "./Component/Movie1";


function App() {
  return (
    <div>
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/View" element={<View />} />
        <Route path="/Ticket" element={<Ticket />} />
      </Routes>
      <div>
      <Footer />
      </div> */}
      {/* <React_Props />
      <View /> */}
      <Movie1 />
    </div>
  );
}

export default App;
