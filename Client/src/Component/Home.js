import React from "react";
import "./Home.css";
import image from "./c.jpg"
// import image1 from "./jamtsho.jpg"
const Home = () => {
  return (
    <>
      <div>
        <img src={image} alt='jangchub' />
     <a href="/View" ><button className="btn btn-info">View</button></a>

      </div>
      </>
      
  ); 
};

export default Home;
