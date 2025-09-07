import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnvaiyaSplashScreen = ({ setLoading }) => {
  const [progress, setProgress] = useState(0);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Progress animation (slower now)
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setLoading(false), 800); // Fade out delay
          return 100;
        }
        return prev + Math.random() * 5; // slower increment than before
      });
    }, 80); // slower interval than before

    // Show logo after initial delay
    setTimeout(() => setShowLogo(true), 500);

    return () => clearInterval(progressInterval);
  }, [setLoading]);

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -90,
      scale: 0.8
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        type: "spring",
        bounce: 0.4
      }
    })
  };

  const logoPathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 0.5 }
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden"
      >
        {/* Animated background particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
              animate={{
                x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
                y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
                opacity: [0.1, 0.6, 0.1],
                scale: [0.5, 1.5, 0.5]
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%'
              }}
            />
          ))}
        </div>

        {/* Glowing orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center space-y-8">
          
          {/* Logo */}
          <AnimatePresence>
            {showLogo && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, type: "spring", bounce: 0.3, delay: 0.2 }}
                className="relative"
              >
                <motion.div
                  className="absolute inset-0 w-40 h-40 border-4 border-cyan-400/30 rounded-full -m-8"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-0 w-32 h-32 border-2 border-purple-400/40 rounded-full -m-4"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />

                {/* SVG Logo */}
                <motion.svg
                  width="200"
                  height="120"
                  viewBox="0 0 400 240"
                  className="relative z-10"
                  initial={{ filter: "drop-shadow(0 0 0 rgba(6, 182, 212, 0))" }}
                  animate={{ 
                    filter: [
                      "drop-shadow(0 0 10px rgba(6, 182, 212, 0.3))",
                      "drop-shadow(0 0 30px rgba(6, 182, 212, 0.6))",
                      "drop-shadow(0 0 10px rgba(6, 182, 212, 0.3))"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.path
                    d="M20 200 L80 40 L140 200 M50 140 L110 140"
                    stroke="url(#logoGradient1)"
                    strokeWidth="12"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={logoPathVariants}
                    initial="hidden"
                    animate="visible"
                  />
                  <motion.path
                    d="M90 70 L130 30 M110 90 L150 50"
                    stroke="url(#logoGradient1)"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    variants={logoPathVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.5 }}
                  />
                  <motion.line
                    x1="180" y1="40" x2="180" y2="200"
                    stroke="url(#logoGradient2)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    variants={logoPathVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1 }}
                  />
                  <defs>
                    <linearGradient id="logoGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                    <linearGradient id="logoGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Company Name */}
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-1">
              {'ANVAIYA'.split('').map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate={showLogo ? "visible" : "hidden"}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
                  style={{ transformOrigin: "center" }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={showLogo ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="flex items-center space-x-1"
            >
              {'TECHNOLOGIES'.split('').map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={showLogo ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 1.8 + i * 0.05, duration: 0.3 }}
                  className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 tracking-wider"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.6 }}
            className="flex flex-col items-center space-y-4 w-80"
          >
            <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <div className="flex items-center justify-between w-full text-sm text-gray-400">
              <motion.span
                key={Math.floor(progress)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-mono"
              >
                {Math.floor(progress)}%
              </motion.span>
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-cyan-400"
              >
                Loading...
              </motion.span>
            </div>
            <div className="flex space-x-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: progress > 80 ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="text-gray-400 text-center max-w-md px-4 text-sm"
          >
            Empowering businesses with scalable solutions, smart automation, and AI-driven growth.
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnvaiyaSplashScreen;
