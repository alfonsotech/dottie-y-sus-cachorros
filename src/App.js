import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Puppies from "./Puppies/Puppies";
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
        <Route path="/dottie-y-sus-cachorros" element={<Home />} />
        <Route path="/puppies" element={<Puppies />} />
        <Route path="/mama" element={<Mama />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/care" element={<PupCare />} />
        {/* Default route for unmatched paths */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
