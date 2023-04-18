import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div>
        <div className="parent">
          <div className="child">
            <Link to="/Login">
              <button>View</button>
            </Link>
          </div>
          <div className="child">2</div>
          <div className="child">3</div>
        </div>
      </div>
    </>
  );
};

export default Home;
