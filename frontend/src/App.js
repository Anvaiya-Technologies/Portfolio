import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Features from "./components/Features";
import About from "./components/About";
import Contact from "./components/Contact";
import AnimatedBackground from "./components/AnimatedBackground";
import Footer from "./components/Footer";
import Services from "./components/Services";
import { ClipLoader } from "react-spinners";
import Blogs from "./pages/Blogs";
import BlogPost from "./components/BlogPost";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen">
        <AnimatePresence>
          {loading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1 }}
              className="fixed inset-0 flex flex-col items-center justify-center bg-black z-[9999]"
            >
              {/* Animated text */}
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-4xl md:text-6xl font-extrabold text-cyan-400 mb-6"
              >
                Anvaiya Technologies
              </motion.h1>

              {/* Spinner */}
              <ClipLoader color="#22d3ee" size={60} />
            </motion.div>
          ) : (
            <>
              {/* Navigation - available on all pages */}
              <Navbar />
              
              {/* Routes for different pages */}
              <Routes>
                <Route path="/" element={
                  <div className="text-white relative">
                    {/* Background animation only on home page */}
                    <AnimatedBackground />
                    <Hero />
                    <Highlights />
                    <Services />
                    <Features />
                    <About />
                    <Contact />
                  </div>
                } />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/:slug" element={<BlogPost />} />
                {/* Add more routes as needed */}
              </Routes>
              
              {/* Footer - available on all pages */}
              <Footer className="mt-28" />
            </>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;