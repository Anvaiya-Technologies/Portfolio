import React, { useEffect } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
import DiagonalDivider from "../transitions/DiagonalDivider";
const Hero = () => {
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();
  const yOffset = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const timer = setTimeout(() => {
      controls.start({
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        opacity: 1,
        transition: {
          duration: 1.5,
          ease: [0.6, 0.01, -0.05, 0.95],
          type: "spring",
          bounce: 0.3,
        },
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [controls]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 pb-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gray-900">
        <AnimatedBackground />
      </div>

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

      {/* Real animated triangle pulse */}
      <motion.svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        className="absolute top-10 sm:top-16 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <polygon points="50,15 90,85 10,85" fill="url(#grad)" />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Content */}
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-6 relative z-10">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white"
        >
          Welcome to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
            Anvaiya Technologies
          </span>
        </motion.h1>

        {/* Glowing divider bar */}
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full mt-2 animate-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        />

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.8, 1] }}
          transition={{
            delay: 1.8,
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="text-base sm:text-lg md:text-xl max-w-2xl text-white/90"
        >
          Empowering businesses with{" "}
          <span className="font-semibold text-cyan-300">scalable solutions</span>,{" "}
          <span className="font-semibold text-purple-300">smart automation</span>, and{" "}
          <span className="font-semibold text-pink-300">AI-driven growth</span>.
        </motion.p>

        {/* Glow trail */}
        <motion.div
          style={{ y: yOffset }}
          className="absolute w-[300px] h-[300px] rounded-full bg-cyan-400 blur-3xl opacity-20 -z-10"
        />
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

  {/* Cinematic gradient fade into next section */}
<div className="absolute bottom-0 left-0 w-full h-32 z-10 pointer-events-none">
  <div className="w-full h-full bg-gradient-to-b from-transparent via-[#0f172a]/60 to-[#0f172a]" />
</div>


    </section>
  );
};

export default Hero;
