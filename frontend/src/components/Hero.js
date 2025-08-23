// src/sections/Hero.jsx
import React, { useState, useEffect } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import AnimatedBackground from "../components/AnimatedBackground";

const Hero = () => {
  const [split, setSplit] = useState(false);
  const controls = useAnimation();

  // Scroll sync
  const { scrollYProgress } = useScroll();
  const yOffset = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const handleClick = () => {
    setSplit(true);
    controls.start({
      scale: [1, 1.2, 0.9, 1],
      rotate: [0, 10, -10, 0],
      transition: { duration: 0.6 },
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-navbar pb-16 scroll-mt-navbar overflow-hidden"
    >
      {/* Floating glow orbs */}
      <motion.div
        className="absolute top-20 left-10 w-24 h-24 rounded-full bg-cyan-400/20 blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-32 h-32 rounded-full bg-purple-400/20 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-6 relative z-10">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
        >
          Welcome to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient-x">
            Anvaiya Technologies
          </span>
        </motion.h1>

        {/* Subtext (typing style animation simulated with opacity steps) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.8, 1] }}
          transition={{ delay: 1.5, duration: 2, repeat: Infinity, repeatType: "mirror" }}
          className="text-base sm:text-lg md:text-xl max-w-2xl text-white/90"
        >
          Empowering businesses with{" "}
          <span className="font-semibold text-cyan-300">scalable solutions</span>,{" "}
          <span className="font-semibold text-purple-300">smart automation</span>,{" "}
          and <span className="font-semibold text-pink-300">AI-driven growth</span>.
        </motion.p>

        {/* Glow trail */}
        <motion.div
          style={{ y: yOffset }}
          className="absolute w-[300px] h-[300px] rounded-full bg-cyan-400 blur-3xl opacity-20 -z-10"
        />

        {/* Animated Triangle */}
        <motion.div
          initial={{ x: "-100vw", y: "-100vh", scale: 0.5, rotate: -45 }}
          animate={controls}
          transition={{
            duration: 1.2,
            ease: [0.6, 0.01, -0.05, 0.95],
            type: "spring",
            bounce: 0.4,
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(75, 166, 168, 0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
         className={`relative z-20 w-60 h-[15.5rem] sm:w-72 sm:h-64 lg:w-80 lg:h-72
            flex flex-col justify-center items-center
            [clip-path:polygon(50%_0%,100%_100%,0%_100%)]
            bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20
            border-2 border-cyan-300/50
            backdrop-blur-xl
            shadow-[0_8px_32px_rgba(0,0,0,0.35)]
            overflow-hidden mt-10 cursor-pointer transition-all duration-300`}

        >
          {/* Second border */}
          <div
            className="absolute inset-0 [clip-path:polygon(50%_0%,100%_100%,0%_100%)]
                       border-2 border-cyan-400 pointer-events-none"
          />

          {/* Gradient shimmer background inside triangle */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-cyan-400/30 via-purple-400/30 to-pink-400/30 opacity-50"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            <AnimatedBackground />
          </motion.div>

          {/* Buttons */}
          <div className="relative z-10 flex flex-col space-y-4">
            <motion.a
              href="#features"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 sm:px-8 sm:py-3 bg-cyan-500 text-white font-semibold shadow-md rounded-md hover:bg-cyan-600 transition"
            >
              Get Started
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 sm:px-8 sm:py-3 bg-gray-700 text-white font-semibold shadow-md rounded-md hover:bg-gray-800 transition"
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 flex flex-col items-center text-white/70"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-5 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2" />
        </div>
        <span className="text-sm mt-2">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
