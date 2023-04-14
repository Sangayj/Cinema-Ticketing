import React from "react";
import "./Home.css";
import image from "./c.jpg"
// import image1 from "./jamtsho.jpg"
const Home = () => {
  return (
    <>
      <div>
        <img src={image} alt='jangchub' />
        <div class="parent">
        <div class="child">
        </div>
        <div class="child">2</div>
        <div class="child">3</div>
        </div>
      </div>
      </>
      
  ); 
};

export default Home;
