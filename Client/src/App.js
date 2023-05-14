import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

import SignUp from "./Component/SignUp";
import Login from "./Component/Login";
import Home from "./Component/Home";
import AdminDashboard from "./Admin/AdminDashboard";
import UserInfo from "./Admin/UserInfo";
import Movies from "./Admin/Movies";
import View from "./Component/View";
import MovieDetails from "./Admin/MovieDetails";
import Book from "./Component/Book";
import Seat from "./Admin/Seat";
// import AdminTheatre from "./Admin/AdminTheatre";

function App() {
  const location = useLocation();
  const isDashboardPage = location.pathname === "/AdminDashboard";
  const isUserInfoPage = location.pathname === "/UserInfo";
  const isMoviesPage = location.pathname === "/Movies";
  const isMovieDetailsPage = location.pathname.includes("/MovieDetails");
  const isLoginPage = location.pathname === "/Login";
  const isSignUpPage = location.pathname === "/SignUp";
  const isAdminTheatrePage = location.pathname === "/AdminTheatre";

  return (
    <div>
      {!isDashboardPage &&
        !isUserInfoPage &&
        !isMoviesPage &&
        !isMovieDetailsPage &&
        !isLoginPage &&
        !isSignUpPage &&
        !isAdminTheatrePage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/UserInfo" element={<UserInfo />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/View/:id" element={<View />} />
        <Route path="/MovieDetails" element={<MovieDetails />} />
        <Route path="/Book/:id" element={<Book />} />
        <Route path="/Seat" element={<Seat />} />
        {/* <Route path="/AdminTheatre" element={<AdminTheatre />} /> */}
      </Routes>
      {!isDashboardPage &&
        !isUserInfoPage &&
        !isMoviesPage &&
        !isMovieDetailsPage &&
        !isLoginPage &&
        !isSignUpPage &&
        !isAdminTheatrePage && <Footer />}
    </div>
  );
}

export default App;