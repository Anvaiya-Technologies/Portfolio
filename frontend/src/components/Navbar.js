import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logoLight from "../pages/assets/img/logo-light.png";
import logoDark from "../pages/assets/img/logo-dark.png";
import { useSectionObserver } from "../hooks/useSectionObserver";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
 const activeSection = useSectionObserver();

  const isLightBackground = ["highlights", "features", "about", "services", "contact", "footer"].includes(activeSection) || hovered;
  const logoSrc = isLightBackground ? logoDark : logoLight;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isLightBackground ? "bg-teal-100" : "bg-transparent"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ height: "64px" }}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-full">
        <a href="#hero" className="flex items-center flex-shrink-0">
          <img
            src={logoSrc}
            alt="Anvaiya Logo"
            className="h-8 sm:h-10 w-auto transition-all duration-300"
          />
        </a>

        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {["Home", "Highlights", "Features", "About", "Contact"].map((item, idx) => (
            <li key={idx}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`scroll-mt-navbar transition-colors duration-300 hover:underline ${
                  isLightBackground ? "text-gray-800 hover:text-brand" : "text-white hover:text-brand"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`md:hidden transition-colors duration-300 focus:outline-none ${
            isLightBackground ? "text-gray-800 hover:text-brand" : "text-white hover:text-brand"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md transition-all duration-300">
          <ul className="flex flex-col items-center space-y-4 py-6">
            {["Home", "Highlights", "Features", "About", "Contact"].map((item, idx) => (
              <li key={idx}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-800 hover:text-brand transition-colors duration-300 hover:underline scroll-mt-navbar"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
