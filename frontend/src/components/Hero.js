import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        Welcome to <span className="text-cyan-400">Anvaiya Technologies</span>
      </h1>
      <p className="text-lg md:text-xl max-w-2xl">
        Empowering businesses with cutting-edge solutions to scale faster, smarter, and better.
      </p>
      <div className="mt-8 flex space-x-4">
        <a href="#features" className="bg-cyan-500 px-6 py-3 rounded-lg shadow-md hover:bg-cyan-600 transition">
          Get Started
        </a>
        <a href="#about" className="bg-gray-700 px-6 py-3 rounded-lg shadow-md hover:bg-gray-600 transition">
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
