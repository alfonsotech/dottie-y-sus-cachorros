import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import PhotoGallery from "./PhotoGallery";
import PupPage from "./PupPage";
import AdoptProcess from "./AdoptProcess";
import Contact from "./Contact";
import Footer from "./Footer/Footer";
import PupCare from "./PupCare";
import Mama from "./Mama/Mama";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/gallery" element={<PhotoGallery />} />
        <Route path="/mama" element={<Mama />} />
        <Route path="/adopt" element={<AdoptProcess />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/care" element={<PupCare />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
