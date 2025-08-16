import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Features from "./components/Features";
import About from "./components/About";
import Contact from "./components/Contact";
import AnimatedBackground from "./components/AnimatedBackground"; 
import Footer from "./components/Footer";
import Services from "./components/Services";

function App() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Background animation behind everything */}
      <AnimatedBackground />

      {/* Your sections stay on top */}
      <Navbar />
      <Hero />
      <Highlights />
      <Services />
      <Features />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
