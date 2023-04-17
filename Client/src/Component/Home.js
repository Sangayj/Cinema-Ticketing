import React from "react";
import "./Home.css";
import HeroSlider, { Slide } from "hero-slider";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import image1 from "../Image/image1.jpg";
import image2 from "../Image/image2.jpg";
import image3 from "../Image/image3.jpg";
import image4 from "../Image/image4.jpg";

const Home = () => {
  return (
    <>
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide, nextSlide)
      }
      onChange={(nextSlide) => console.log("onChange", nextSlide)}
      onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.33)",
        marginTop: "-64px",
      }}
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: "100vh",
        buttonStyles: {
          backgroundColor: "transparent",
          border: "none",
        },
        buttonIconStyles: {
          fill: "white",
        },
      }}
    >
    
      <Slide
        background={{
          backgroundColor: "black",
        }}
      >
        <img src={image1} alt="slide-image" />
      </Slide>
      <Slide
        background={{
          backgroundColor: "black",
        }}
      >
        <img src={image2} alt="slide-image" />
      </Slide>
      <Slide
        background={{
          backgroundColor: "black",
        }}
      >
        <img src={image3} alt="slide-image" />
      </Slide>
      <Slide
        background={{
          backgroundColor: "black",
        }}
      >
        <img src={image4} alt="slide-image" />
      </Slide>
      <div
        className="slider-button slider-button-left"
        style={{ left: "5%" }}
      >
        <FaArrowLeft size={32} />
      </div>
      <div
        className="slider-button slider-button-right"
        style={{ right: "5%" }}
      >
        <FaArrowRight size={32} />
      </div>  
    </HeroSlider>
    <div class="Heading">
      <p>All Movies List</p>
      <form>
        <input type="text" placeholder="Search for any Movies" />
        <button type="submit"><i className="fa fa-search"></i>Search</button>
      </form>
    </div>

    <p></p>
    <p></p>
    <div className="parent-container">
      <div className="child-container">
        <img src="../Image/dorozam.jpg" alt="img" />
      <button class="view-details-btn">View Details</button>
      </div>

      <div className="child-container">Column 2, Row 1
      <button class="view-details-btn">View Details</button>
      </div>

      <div className="child-container">Column 3, Row 1
      <button class="view-details-btn">View Details</button>
      </div>

      <div className="child-container">
      <img src="../Image/superman.jpg" alt="img" />
      <button class="view-details-btn">View Details</button>
      </div>

      <div className="child-container">
      <img src="" alt="" />
      <button class="view-details-btn">View Details</button>
      </div>

      <div className="child-container">Column 3, Row 2
      <button class="view-details-btn">View Details</button>
      </div>
    </div>
    
    </>
  );
};

export default Home;
