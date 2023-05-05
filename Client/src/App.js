import { Routes, Route, Switch } from "react-router-dom";
import Navbar from "./Component/Navbar";
import SignUp from "./Component/SignUp";
import Login from "./Component/Login";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import AddMovie from "./Component/AddMovies";
import Car from "./Component/Car"
// import Movie1 from "./Component/Movie3";
// import Movie2 from "./Component/Movie3";
// import Movie3 from "./Component/Movie3";
// import Movie4 from "./Component/Movie3";
// import Movie5 from "./Component/Movie3";
// import Movie6 from "./Component/Movie3";



function App() {
  const isAdminPage = false; // Define isAdminPage as a boolean variable

  return (
    <div>
      {isAdminPage ? null : <Navbar />}
      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/" element={<Car />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/AddMovies" element={<AddMovie />} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Car" element={<Car />} />
        {/* <Route path="/Ticket" element={<Ticket />} /> */}
        {/* <Route path="/Movie1" element={<Movie1 />} />
        <Route path="/Movie2" element={<Movie2 />} />
        <Route path="/Movie3" element={<Movie3 />} />
        <Route path="/Movie4" element={<Movie4 />} />
        <Route path="/Movie5" element={<Movie5 />} />
        <Route path="/Movie6" element={<Movie6 />} /> */}
        {/* <Route path="/admin" element={<Adminpage />} />
        <Route path="/movieform" element={<AddMovieForm />} /> */}
      </Routes>
      {isAdminPage ? null : <Footer />}
    </div>
  );
}

export default App;
