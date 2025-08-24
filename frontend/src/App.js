import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Features from "./components/Features";
import About from "./components/About";
import Contact from "./components/Contact";
import AnimatedBackground from "./components/AnimatedBackground";
import Footer from "./components/Footer";
import Services from "./components/Services";
import SplashScreen from "./components/SplashScreen"; // ✅ Import splash

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen text-white">
      <AnimatePresence>
        {loading ? (
          <SplashScreen setLoading={setLoading} /> 
        ) : (
          <>
            <AnimatedBackground />
            <Navbar />
            <div className="relative z-10">
              <Hero />
              <Highlights />
              <Services />
              <Features />
              <About />
              <Contact />
              <Footer />
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
