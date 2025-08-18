import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger & close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Anvaiya Technologies</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#hero" className="hover:text-cyan-400">Home</a></li>
          <li><a href="#highlights" className="hover:text-cyan-400">Highlights</a></li>
          <li><a href="#features" className="hover:text-cyan-400">Features</a></li>
          <li><a href="#about" className="hover:text-cyan-400">About</a></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
        </ul>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md">
          <ul className="flex flex-col items-center space-y-4 py-6">
            <li><a href="#hero" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">Home</a></li>
            <li><a href="#highlights" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">Highlights</a></li>
            <li><a href="#features" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">Features</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">About</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
