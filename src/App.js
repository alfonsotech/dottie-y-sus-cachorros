import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import PhotoGallery from "./PhotoGallery";
import Adopt from "./Adopt/Adopt";
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
        <Route path="/adopt" element={<Adopt />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/care" element={<PupCare />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
