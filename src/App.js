import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import About from "./components/About";
import Experience from "./components/Experience";
import Offer from "./components/Offer";
import Featured from "./components/Featured";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <About />
      <Experience />
      <Offer />
      <Featured />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
