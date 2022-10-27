import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import About from "../pages/About/About";
import DigitalArt from "../pages/Artwork - Digital/DigitalArt";
import TraditionalArt from "../pages/Artwork - Traditional/TraditionalArt";
import Sketches from "../pages/Artwork - Sketches/Sketches";
import Contact from "../pages/Contact/Contact";

function NavBar() {
  return (
    <Router>
      <nav>
        <li>
          <NavLink exact to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/digital-art">Digital Art</NavLink>
        </li>
        <li>
          <NavLink to="/traditional-art">Traditional Art</NavLink>
        </li>
        <li>
          <NavLink to="/sketches">Sketches</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/digital-art" element={<DigitalArt />} />
        <Route path="/traditional-art" element={<TraditionalArt />} />
        <Route path="/sketches" element={<Sketches />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default NavBar;
