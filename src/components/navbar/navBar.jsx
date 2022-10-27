import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import About from "../pages/About/About";
import DigitalArt from "../pages/Artwork - Digital/DigitalArt";
import TraditionalArt from "../pages/Artwork - Traditional/TraditionalArt";
import Sketches from "../pages/Artwork - Sketches/Sketches";
import Contact from "../pages/Contact/Contact";
import { LiFix, NavWrapper, SectionPadding, StyledLink } from "./styleNavBar";

function NavBar() {
  return (
    <Router>
      <NavWrapper>
        <SectionPadding>
          <h3>Chris SanBre</h3>
        </SectionPadding>
        <section>
          <LiFix>
            <StyledLink exact to="/" end>
              Home
            </StyledLink>
          </LiFix>
          <LiFix>
            <StyledLink to="/about">About</StyledLink>
          </LiFix>
          <LiFix>
            <StyledLink to="/digital-art">Digital Art</StyledLink>
          </LiFix>
          <LiFix>
            <StyledLink to="/traditional-art">Traditional Art</StyledLink>
          </LiFix>
          <LiFix>
            <StyledLink to="/sketches">Sketches</StyledLink>
          </LiFix>
          <LiFix>
            <StyledLink to="/contact">Contact</StyledLink>
          </LiFix>
        </section>
      </NavWrapper>
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
