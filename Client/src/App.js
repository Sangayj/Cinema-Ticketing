import { Routes, Route,  } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Landing from "./Component/Landing";
import SignUp from "./Component/SignUp";
import Login from "./Component/Login";
import Footer from "./Component/Footer";
import Ticket from "./Component/Ticket";
import Movie2 from "./Component/Movie2";
import Movie3 from "./Component/Movie3";
import Movie4 from "./Component/Movie4";
import Movie5 from "./Component/Movie5";
import Movie6 from "./Component/Movie6";
import Movie1 from "./Component/Movie1";
import Home from "./Component/Home";
import Adminpage from "./Adminpage";
import Movies from "./Component/Movies";


function App() {
  const isAdminPage = false; // Define isAdminPage as a boolean variable

  return (
    <div>
      {isAdminPage ? null : <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Ticket" element={<Ticket />} />
        <Route path="/Movie1" element={<Movie1 />} />
        <Route path="/Movie2" element={<Movie2 />} />
        <Route path="/Movie3" element={<Movie3 />} />
        <Route path="/Movie4" element={<Movie4 />} />
        <Route path="/Movie5" element={<Movie5 />} />
        <Route path="/Movie6" element={<Movie6 />} />
        <Route path="/admin" element={<Adminpage />} />
        <Route path="/Movies" element={<Movies />} />


      </Routes>
      {isAdminPage ? null : <Footer />}
    </div>
  );
}

export default App;
