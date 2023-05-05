// import React from "react";
// import "./Home.css";

// const movieData = [
//   {
//     title: "Doro Zam",
//     imageUrl: "./Image/image1.jpg",
//   },
//   {
//     title: "Dema Tsho",
//     imageUrl: "./Image/Dema.jpg",
//   },
//   {
//     title: "Nigthob",
//     imageUrl: "./Image/Nigtob.jpg",
//   },
//   {
//     title: "Super Star",
//     imageUrl: "./Image/Star.jpg",
//   },
//   {
//     title: "Rolong",
//     imageUrl: "./Image/rolong.jpg",
//   },
//   {
//     title: "Lekzin",
//     imageUrl: "./Image/one.jpg",
//   },
//   {
//     title: "Dorozam",
//     imageUrl: "./Image/dorozam.jpg",
//   },
//   {
//     title: "Upalama",
//     imageUrl: "./Image/Yalama.jpg",
//   },
//   {
//     title: "Yalama Nga",
//     imageUrl: "./Image/rolong.jpg",
//   },
//   {
//     title: "One Night In Thimphu",
//     imageUrl: "./Image/one.jpg",
//   },
// ];

// function MovieCard({ title, imageUrl }) {
//   const [isHovering, setIsHovering] = React.useState(false);

//   return (
//     <div
//       className="card"
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//     >
//       <img
//         src={imageUrl}
//         alt={title}
//         className={isHovering ? "card-img zoom-in" : "card-img"}
//       />
//       <h4>{title}</h4>
//     </div>
//   );
// }

// export default function Home() {
//   return (
//     <div className="movie-container">
//       {movieData.map((movie) => (
//         <MovieCard
//           key={movie.title}
//           title={movie.title}
//           imageUrl={movie.imageUrl}
//         />
//       ))}
//     </div>
//   );
// }

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css";

const movieData = [
  {
    title: "Doro Zam",
    imageUrl: "./Image/image1.jpg",
  },
  {
    title: "Dema Tsho",
    imageUrl: "./Image/Dema.jpg",
  },
  {
    title: "Nigthob",
    imageUrl: "./Image/Nigtob.jpg",
  },
  {
    title: "Super Star",
    imageUrl: "./Image/Star.jpg",
  },
  {
    title: "Rolong",
    imageUrl: "./Image/rolong.jpg",
  },
  {
    title: "Lekzin",
    imageUrl: "./Image/one.jpg",
  },
  {
    title: "Dorozam",
    imageUrl: "./Image/dorozam.jpg",
  },
  {
    title: "Upalama",
    imageUrl: "./Image/Yalama.jpg",
  },
  {
    title: "Yalama Nga",
    imageUrl: "./Image/rolong.jpg",
  },
  {
    title: "One Night In Thimphu",
    imageUrl: "./Image/one.jpg",
  },
];

function MovieCard({ title, imageUrl }) {
  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <div
      className="card"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img
        src={imageUrl}
        alt={title}
        className={isHovering ? "card-img zoom-in" : "card-img"}
      />
      <h4>{title}</h4>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (!loggedIn) {
      navigate("/login"); // redirect to login page if user is not logged in
    }
  }, [navigate]);

  return (
    <div className="movie-container">
      {movieData.map((movie) => (
        <MovieCard
          key={movie.title}
          title={movie.title}
          imageUrl={movie.imageUrl}
        />
      ))}
    </div>
  );
}
