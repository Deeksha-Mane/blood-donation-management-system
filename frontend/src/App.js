import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Donors from "./pages/Donors";
import RequestList from "./pages/RequestList";
import RequestBlood from "./pages/RequestBlood";
import Login from "./pages/Login"; 
import Signup from "./pages/Signup";
import DonateNow from "./pages/DonateNow";
import FindDonor from "./pages/FindDonor";
import About from "./pages/About";
import "./styles/Navbar.css";

function App() {
    return (
        <Router>
            <nav className="navbar">
                <Link to="/home">Home</Link>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/requests">View Blood Requests</Link>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/register">Register Donor</Link>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; 
                <Link to="/donors">View Donors</Link>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; 
                <Link to="/request-blood">Request Blood</Link>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; 
                <Link to="/login">Login</Link>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; 
                <Link to="/signup">Signup</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/requests" element={<RequestList/>} />
                <Route path="/register" element={<Register />} />
                <Route path="/donors" element={<Donors />} />
                <Route path="/donate" element={<DonateNow />} />
                <Route path="/find-donor" element={<FindDonor />} />
                <Route path="/request-blood" element={<RequestBlood />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;
