import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Features from "./components/Features";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-animated text-white">
      <Navbar />
      <Hero />
      <Highlights />
      <Features />
      <About />
      <Contact />
    </div>
  );
}

export default App;
