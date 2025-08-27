// src/pages/Home.js
import React from "react";
import ScrollGradient from "../components/transitions/ScrollGradient";
import AnimatedBackground from "../components/sections/AnimatedBackground";
import Hero from "../components/sections/Hero";
import Highlights from "../components/sections/Highlights";
import Services from "../components/sections/Services";
import Features from "../components/sections/Features";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import useHashScroll from "../hooks/useHashScroll";

const Home = () => {
  useHashScroll(); // handles scrolling to hash on load

  return (
    <div className="text-white relative overflow-hidden">
      {/* Scroll-reactive gradient */}
      <ScrollGradient />

      {/* Canvas animation */}
      <AnimatedBackground />

      <main className="relative z-10">
        <Hero />
        <Highlights />
        <Services />
        <Features />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
