import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Features from "./components/Features";
import About from "./components/About";
import Contact from "./components/Contact";
import AnimatedBackground from "./components/AnimatedBackground";
import Footer from "./components/Footer";
import Services from "./components/Services";
import SplashScreen from "./components/SplashScreen";
import Blogs from "./pages/Blogs";
import BlogPost from "./components/BlogPost";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white relative"
            >
              <AnimatedBackground />
              <Hero />
              <Highlights />
              <Services />
              <Features />
              <About />
              <Contact />
            </motion.div>
          }
        />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/:slug" element={<BlogPost />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <div className="relative min-h-screen text-white">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="splash"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <SplashScreen setLoading={setLoading} />
            </motion.div>
          ) : (
            <motion.div
              key="app"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col min-h-screen"
            >
              <Navbar />
              <AnimatedRoutes />
              <Footer className="mt-28" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
  