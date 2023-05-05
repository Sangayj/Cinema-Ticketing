import { Route, Routes, useLocation } from "react-router-dom";
import SignUp from "./Component/SignUp";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import Login from "./Component/Login";
import Home from "./Component/Home";
import AdminDashboard from "./Admin/AdminDashboard";
import Customer from "./Admin/Customer";
import Movies from "./Admin/Movies";
import Moviedetails from "./Admin/Moviedetails";
import View from "./Component/View";
import MovieDetails from "./Admin/MovieDetails";

function App() {
  const location = useLocation();
  const isDashboardPage = location.pathname === "/AdminDashboard";
  const isCustomerPage = location.pathname === "/Customer";
  const isMoviesPage = location.pathname === "/Movies";
  const isMovieDetailsPage = location.pathname.includes("/MovieDetails");

  return (
    <div>
      {!isDashboardPage &&
        !isCustomerPage &&
        !isMoviesPage &&
        !isMovieDetailsPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/Customer" element={<Customer />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/View/:id" element={<View />} />
        <Route path="/MovieDetails" element={<MovieDetails />} />
      </Routes>
      {!isDashboardPage &&
        !isCustomerPage &&
        !isMoviesPage &&
        !isMovieDetailsPage && <Footer />}
    </div>
  );
}

export default App;
