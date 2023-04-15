import React from "react";
// import "./Home.css";
import HeroSlider, {Slide} from 'hero-slider';

//images
const Image1 = "https://media.istockphoto.com/id/1180701083/photo/friends-in-the-cinema.jpg?b=1&s=170667a&w=0&k=20&c=ZlsQNoE2NNGPGyXNZ_tLhi2VUR4Am_Rvsfi1N2k25Fs="
const Image2 = "https://media.istockphoto.com/id/1419730673/photo/young-couple-enjoying-a-fun-movie-at-the-cinema.jpg?b=1&s=170667a&w=0&k=20&c=eE9phk97M4xPZJ-Y6wX91h8gWK_Q-YaO_AK_ZHT5Q38="
const Image3 = "https://media.istockphoto.com/id/1406127371/photo/women-wearing-3d-glasses-watching-a-movie-and-her-giant-popcorn-3d-render-illustration.jpg?b=1&s=170667a&w=0&k=20&c=sOe1e0SkxCmB6HsDN_NbzH9hPGhQpzXAXesWs2a7jTA="
const Image4 = "https://media.istockphoto.com/id/1458636582/photo/excited-girl-watching-movie-in-cinema.jpg?b=1&s=170667a&w=0&k=20&c=PhjxTEU2i6BeNw6_WSkXKeumJbgkcu2v6hOCpaR1Oks="

// import image1 from "./jamtsho.jpg"
const Home = () => {
  return (
    <Home
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialslide={1}
      onBeforeChange={(previousSlide, nextSlide) => console.log("onBeforeChange", previousSlide, nextSlide)}
      onChange={nextSlide => console.log("onChange", nextSlide)} 
      onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.33)"
      }}
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        hight: "100vh"

      }}
    >
       
      <Slide 
        background={{
          backgroundImage: Image1,
          backgroundAttachment: "fixed"
        }}
        />
        <Slide 
        background={{
          backgroundImage: Image2,
          backgroundAttachment: "fixed"
        }}
        />
        <Slide 
        background={{
          backgroundImage: Image3,
          backgroundAttachment: "fixed"
        }}
        />
        <Slide 
        background={{
          backgroundImage: Image4,
          backgroundAttachment: "fixed"
        }}
        />
    </Home>
  );
};

export default Home;
