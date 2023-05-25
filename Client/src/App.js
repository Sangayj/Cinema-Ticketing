import { Route, Routes, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/Authcontext";
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
import Payment from "./Component/Payment";
import Profile from "./Component/Profile";
import Search from "./Component/Search";
import Pending from "./Component/Pending";

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

  return (
    <AuthProvider>
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
          <Route path="/AdminTheatre" element={<AdminTheatre />} />
          <Route path="/Ticket" element={<Ticket />} />
          <Route path="/ViewBooking" element={<ViewBooking />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/View2/:id" element={<View2 />} />{" "}
          {/* Add the parameter :id to match the route */}
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Pending" element={<Pending />} />
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
    </AuthProvider>
  );
}

export default App;
