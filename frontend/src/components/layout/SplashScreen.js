import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnvaiyaSplashScreen = ({ setLoading }) => {
  const [progress, setProgress] = useState(0);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Progress animation (slower now)
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setLoading(false), 800); // Fade out delay
          return 100;
        }
        return prev + Math.random() * 5; // slower increment
      });
    }, 80);

    // Show logo after initial delay
    setTimeout(() => setShowLogo(true), 500);

    return () => clearInterval(progressInterval);
  }, [setLoading]);

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
      scale: 0.8,
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
        bounce: 0.4,
      },
    }),
  };

  const logoPathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 0.5 },
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
      >
        {/* Animated background particles */}
        <div className="absolute inset-0">
          {[...Array(60)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full opacity-40"
              style={{
                backgroundColor:
                  i % 3 === 0 ? "#FFD700" : "#14b8a6", // Golden + Teal
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
              animate={{
                x: [
                  Math.random() *
                    (typeof window !== "undefined" ? window.innerWidth : 1000),
                  Math.random() *
                    (typeof window !== "undefined" ? window.innerWidth : 1000),
                ],
                y: [
                  Math.random() *
                    (typeof window !== "undefined" ? window.innerHeight : 800),
                  Math.random() *
                    (typeof window !== "undefined" ? window.innerHeight : 800),
                ],
                opacity: [0.1, 0.7, 0.1],
                scale: [0.5, 1.8, 0.5],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Glowing orbs - teal + golden theme */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-yellow-500/15 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center space-y-12">
          {/* Logo and Company Name */}
          <AnimatePresence>
            {showLogo && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 1.2,
                  type: "spring",
                  bounce: 0.3,
                  delay: 0.2,
                }}
                className="flex items-center space-x-2"
              >
                {/* Logo */}
                <motion.svg
                  width="150"
                  height="150"
                  viewBox="1100 900 1500 1700"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                  initial={{
                    filter: "drop-shadow(0 0 0 rgba(20, 184, 166, 0))",
                  }}
                  animate={{
                    filter: [
                      "drop-shadow(0 0 15px rgba(20, 184, 166, 0.4))",
                      "drop-shadow(0 0 25px rgba(255, 215, 0, 0.7))", // Golden glow
                      "drop-shadow(0 0 15px rgba(20, 184, 166, 0.4))",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.path
                           d="m2270.4 1362.41c-12.75-17.01-36.88-20.47-53.89-7.71l-320.26 240.09-59.18-157.41-43.07-114.32-92.32-245.53c-5.64-15.01-19.99-24.95-36.03-24.95q0 0 0 0c-16.04 0-30.39 9.93-36.04 24.94l-92.39 245.54-43 114.41-92.39 245.52-43.09 114.37-92.31 245.52-127.06 337.48c-7.49 19.9 2.57 42.1 22.47 49.6 4.46 1.68 9.05 2.48 13.55 2.48 15.57 0 30.23-9.52 36.04-24.95l127.07-337.49 92.3-245.51 43.09-114.37 92.4-245.54 43-114.41 56.34-149.74 56.31 149.75 43.07 114.32 67.24 178.87-313.73 243.5q-1.63 1.25-3.12 2.67-0.04 0.04-0.08 0.08-0.64 0.61-1.25 1.26-0.14 0.14-0.26 0.28-0.51 0.54-1 1.11-0.2 0.23-0.39 0.46-0.4 0.48-0.79 0.98-0.25 0.31-0.48 0.63-0.32 0.43-0.63 0.86-0.28 0.4-0.55 0.81-0.25 0.36-0.49 0.73-0.31 0.5-0.6 1.01-0.18 0.29-0.36 0.59-0.34 0.61-0.66 1.23-0.11 0.21-0.22 0.42-0.38 0.75-0.72 1.51-0.05 0.1-0.09 0.2-0.84 1.86-1.46 3.8l-92.42 280.39c-1.69 4.38-2.58 9.07-2.58 13.86v0.07c0 21.26 17.24 38.46 38.5 38.46 9.79 0 18.72-3.65 25.51-9.67l300.61-247.27 159.99 426.12c5.64 15.02 20 24.97 36.04 24.97h184.72c12.63 0 24.46-6.2 31.65-16.58 7.19-10.39 8.83-23.64 4.39-35.46l-209.47-557.55 157.58-118.1c17.01-12.75 20.47-36.88 7.71-53.89-12.75-17.02-36.88-20.47-53.89-7.72l-180.66 135.4c-3.98 2.98-7.27 6.68-9.79 10.83q-0.04 0.07-0.08 0.13-0.4 0.67-0.77 1.34-0.16 0.29-0.31 0.59-0.29 0.53-0.55 1.07-0.27 0.56-0.53 1.14-0.15 0.32-0.29 0.64-0.84 1.96-1.45 4.02-0.03 0.09-0.06 0.18-0.27 0.93-0.5 1.88-0.04 0.18-0.08 0.36-0.2 0.85-0.36 1.72-0.04 0.24-0.08 0.48-0.14 0.81-0.24 1.63-0.04 0.27-0.07 0.55-0.09 0.8-0.15 1.62-0.02 0.27-0.04 0.54-0.06 1.07-0.06 2.16 0 0.92 0.05 1.84 0.02 0.41 0.05 0.81 0.03 0.5 0.08 0.99 0.05 0.53 0.11 1.05 0.05 0.35 0.09 0.7 0.09 0.61 0.19 1.2 0.05 0.26 0.09 0.51 0.13 0.66 0.28 1.32 0.03 0.17 0.07 0.33 0.17 0.73 0.37 1.44 0.02 0.08 0.04 0.16 0.47 1.7 1.09 3.33l200 532.34-102.46-0.01-169.05-450.25q-1.44-4.33-3.95-8.31-0.01-0.02-0.02-0.03-0.43-0.69-0.9-1.36-0.16-0.23-0.32-0.46-0.34-0.47-0.69-0.94-0.3-0.38-0.6-0.76-0.14-0.19-0.29-0.37-0.12-0.15-0.25-0.29-0.38-0.45-0.77-0.89-0.24-0.27-0.49-0.54-0.41-0.44-0.84-0.87-0.25-0.26-0.51-0.52-0.4-0.39-0.82-0.77-0.3-0.28-0.61-0.56-0.37-0.32-0.75-0.64-0.36-0.3-0.74-0.6-0.33-0.26-0.66-0.52-0.43-0.32-0.86-0.64-0.3-0.21-0.61-0.42-0.47-0.32-0.94-0.63-0.31-0.2-0.63-0.39-0.47-0.3-0.94-0.58-0.39-0.22-0.78-0.43-0.4-0.22-0.81-0.44-0.56-0.28-1.12-0.55-0.24-0.12-0.49-0.24c-9.02-4.17-19.64-4.87-29.68-1.1-4.69 1.76-8.82 4.34-12.32 7.51l-239.15 196.71 47.77-144.94 326.77-253.62 361.05-270.67c17.02-12.76 20.47-36.89 7.71-53.9z"

                    fill="#4ba6a8"
                    stroke="#FEFEFE"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={logoPathVariants}
                    initial="hidden"
                    animate="visible"
                  />
                </motion.svg>

                {/* Vertical Divider */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "80px", opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="w-px bg-gray-600 mx-2"
                />
                {/* Company Name */}
                <div className="flex flex-col justify-center">
                  <div className="flex items-center">
                    {"ANVAIYA".split("").map((letter, i) => (
                      <motion.span
                        key={i}
                        custom={i}
                        variants={letterVariants}
                        initial="hidden"
                        animate={showLogo ? "visible" : "hidden"}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-400"
                        style={{
                          transformOrigin: "center",
                          fontFamily:
                            "'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
                          fontWeight: 700,
                          letterSpacing: "-0.025em",
                        }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      showLogo ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="flex items-center mt-1"
                  >
                    {"TECHNOLOGIES".split("").map((letter, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={showLogo ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 1.8 + i * 0.03, duration: 0.3 }}
                        className="text-lg sm:text-xl md:text-2xl font-normal text-gray-400"
                        style={{
                          fontFamily:
                            "'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
                          fontWeight: 400,
                          letterSpacing: "0.15em",
                        }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.6 }}
            className="flex flex-col items-center space-y-4 w-80"
          >
            <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-yellow-500 via-teal-500 to-yellow-400"
                initial={{ width: "0%" }}
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
                className="text-yellow-400"
              >
                Loading...
              </motion.span>
            </div>
            <div className="flex space-x-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-yellow-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
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
            Empowering businesses with scalable solutions, smart automation, and
            AI-driven growth.
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnvaiyaSplashScreen;
