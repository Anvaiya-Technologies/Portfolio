import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Anvaiya Technologies</h1>
        <ul className="flex space-x-6">
          <li><a href="#hero" className="hover:text-cyan-400">Home</a></li>
          <li><a href="#highlights" className="hover:text-cyan-400">Highlights</a></li>
          <li><a href="#features" className="hover:text-cyan-400">Features</a></li>
          <li><a href="#about" className="hover:text-cyan-400">About</a></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
