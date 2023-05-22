import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import SignUp from "./Component/SignUp";
import Login from "./Component/Login";
import Home from "./Component/Home";
import Homepage from "./Component/Homepage";
import AdminDashboard from "./Admin/AdminDashboard";
import UserInfo from "./Admin/UserInfo";
import Movies from "./Admin/Movies";
import View from "./Component/View";
import View2 from "./Component/View2";
import MovieDetails from "./Admin/MovieDetails";
import Book from "./Component/Book";
import Seat from "./Admin/Seat";
import AdminTheatre from "./Admin/AdminTheatre";
import Ticket from "./Component/Ticket";
import ViewBooking from "./Admin/ViewBooking";
import PrivateRoutes from "./PrivateRoutes";

function App() {
  const location = useLocation();
  const isDashboardPage = location.pathname === "/AdminDashboard";
  const isUserInfoPage = location.pathname === "/UserInfo";
  const isMoviesPage = location.pathname === "/Movies";
  const isMovieDetailsPage = location.pathname.includes("/MovieDetails");
  const isLoginPage = location.pathname === "/Login";
  const isSignUpPage = location.pathname === "/SignUp";
  const isAdminTheatrePage = location.pathname === "/AdminTheatre";
  const isViewBookingPage = location.pathname === "/ViewBooking";
  const isViewSeatPage = location.pathname === "/Seat";



  return (
    <div>
      {!isDashboardPage &&
        !isUserInfoPage &&
        !isMoviesPage &&
        !isMovieDetailsPage &&
        !isLoginPage &&
        !isViewBookingPage &&
        !isSignUpPage &&
        !isAdminTheatrePage && <Navbar />}
      <Routes>
        {/* <Route element={<PrivateRoutes />}> */}
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        {/* </Route> */}
        <Route path="/" element={<Home />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/UserInfo" element={<UserInfo />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/View/:id" element={<View />} />
        <Route path="/View2/:id" element={<View2 />} />
        <Route path="/MovieDetails" element={<MovieDetails />} />
        <Route path="/Book/:id" element={<Book />} />
        <Route path="/Seat" element={<Seat />} />
        <Route path="/AdminTheatre" element={<AdminTheatre />} />
        <Route path="/Ticket" element={<Ticket />} />
        <Route path="/ViewBooking" element={<ViewBooking />} />
      </Routes>
      {!isDashboardPage &&
        !isUserInfoPage &&
        !isMoviesPage &&
        !isMovieDetailsPage &&
        !isLoginPage &&
        !isViewBookingPage &&
        !isSignUpPage &&
        !isAdminTheatrePage && <Footer />}
    </div>
  );
}

export default App;