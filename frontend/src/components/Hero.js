import React, { useState, useEffect } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";

// Your AnimatedBackground component
const AnimatedBackground = () => {
  const canvasRef = React.useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const lines = [];
    const lineCount = 30;

    for (let i = 0; i < lineCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const speed = 0.5 + Math.random();
      lines.push({ x, y, speed });
    }

    function draw() {
      ctx.fillStyle = "rgba(10, 10, 30, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      lines.forEach((line) => {
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x + 200, line.y + 200);
        ctx.strokeStyle = "rgba(75, 166, 168, 0.4)";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(line.x + 100, line.y + 100, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(75, 166, 168, 0.8)";
        ctx.fill();

        line.x -= line.speed;
        line.y -= line.speed;

        if (line.x < -200 || line.y < -200) {
          line.x = canvas.width;
          line.y = Math.random() * canvas.height;
        }
      });

      requestAnimationFrame(draw);
    }

    draw();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <div className="absolute inset-0">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

const Hero = () => {
  const controls = useAnimation();

  // Scroll sync
  const { scrollYProgress } = useScroll();
  const yOffset = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Auto-animate on load
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
      {/* Main Background */}
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

      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-6 relative z-10">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white"
        >
          Welcome to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
            Anvaiya Technologies
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.8, 1] }}
          transition={{
            delay: 1.5,
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
    </section>
  );
};

export default Hero;
