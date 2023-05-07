import { Route, Routes, useLocation } from "react-router-dom";
import SignUp from "./Component/SignUp";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import Login from "./Component/Login";
import Home from "./Component/Home";
import AdminDashboard from "./Admin/AdminDashboard";
import UserInfo from "./Admin/UserInfo"; // Remove extra space
import Movies from "./Admin/Movies";
import View from "./Component/View";
import MovieDetails from "./Admin/MovieDetails";

function App() {
  const location = useLocation();
  const isDashboardPage = location.pathname === "/AdminDashboard";
  const isUserInfoPage = location.pathname === "/UserInfo";
  const isMoviesPage = location.pathname === "/Movies";
  const isMovieDetailsPage = location.pathname.includes("/MovieDetails");
  const isLoginPage = location.pathname === "/Login";
  const isSignUpPage = location.pathname === "/SignUp";

  return (
    <div>
      {!isDashboardPage &&
        !isUserInfoPage &&
        !isMoviesPage &&
        !isMovieDetailsPage &&
        !isLoginPage &&
        !isSignUpPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/UserInfo" element={<UserInfo />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/View/:id" element={<View />} />
        <Route path="/MovieDetails" element={<MovieDetails />} />
      </Routes>
      {!isDashboardPage &&
        !isUserInfoPage &&
        !isMoviesPage &&
        !isMovieDetailsPage &&
        !isLoginPage &&
        !isSignUpPage && <Footer />}
    </div>
  );
}

export default App;
