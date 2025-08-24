import React from "react";

const About = () => {
  return (
   <section
  id="about"
  className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900"
>
  <div className="max-w-5xl mx-auto px-6 text-center bg-white/5 backdrop-blur-md p-10 rounded-2xl shadow-[0_0_30px_rgba(0,255,255,0.2)] border border-cyan-400/20">
    <h2 className="text-4xl font-bold text-white mb-6">About Us</h2>
    <p className="text-lg text-white/90">
      We are a passionate team of innovators dedicated to helping businesses thrive 
      in the digital age. Our mission is to create powerful, easy-to-use tools that 
      empower companies to unlock their full potential.
    </p>
  </div>
</section>

  );
};

export default About;
