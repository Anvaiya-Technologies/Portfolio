import React from "react";
import { FaFacebook, FaLinkedinIn, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-maroon-700 text-gray-800 py-10 shadow-inner border-t border-gray-700 relative z-10">
      <div className="max-w-6xl mx-auto px-2 grid md:grid-cols-3 gap-10">
        
        {/* Our Services */}
        <div>
          <h3 className="text-xl font-semibold text-black mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>Web Design and Development</li>
            <li>Mobile App Development</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="md:col-span-2 flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold text-black mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="bg-green-500 p-3 rounded-full hover:opacity-80 transition">
              <FaWhatsapp className="text-black text-lg" />
            </a>
            <a href="#" className="bg-blue-600 p-3 rounded-full hover:opacity-80 transition">
              <FaFacebook className="text-black text-lg" />
            </a>
            <a href="#" className="bg-blue-700 p-3 rounded-full hover:opacity-80 transition">
              <FaLinkedinIn className="text-black text-lg" />
            </a>
            <a href="#" className="bg-pink-600 p-3 rounded-full hover:opacity-80 transition">
              <FaInstagram className="text-black text-lg" />
            </a>
            <a href="#" className="bg-sky-500 p-3 rounded-full hover:opacity-80 transition">
              <FaTwitter className="text-black text-lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 border-t border-gray-700 text-sm text-gray-900">
        © {new Date().getFullYear()} Anvaya Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
