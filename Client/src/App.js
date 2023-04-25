import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Landing from "./Component/Landing";
import SignIn from "./Component/SignIn";
import Login from "./Component/Login";
import View from "./Component/View";
import Footer from "./Component/Footer";
import Ticket from "./Component/Ticket";
import Movie2 from "./Component/Movie2";
import Movie3 from "./Component/Movie3";
import Movie4 from "./Component/Movie4";
import Movie5 from "./Component/Movie5";
import Movie6 from "./Component/Movie6";
import Movie1 from "./Component/Movie1";
import Home from "./Component/Home";

function App() {
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/View" element={<View />} />
        <Route path="/Ticket" element={<Ticket />} />
        <Route path="/Movie1" element={<Movie1 />} />
        <Route path="/Movie2" element={<Movie2 />} />
        <Route path="/Movie3" element={<Movie3 />} />
        <Route path="/Movie4" element={<Movie4 />} />
        <Route path="/Movie5" element={<Movie5 />} />
        <Route path="/Movie6" element={<Movie6 />} />
      </Routes>
      <Footer />
      {/* <React_Props />
      <View /> */}
      {/* <Ticket /> */}
    </div>
  );
}

export default App;
