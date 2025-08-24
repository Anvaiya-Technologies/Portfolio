import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logoLight from "../..//assets/img/logo-light.png";
import logoDark from "../../assets/img/logo-dark.png";
import { useSectionObserver } from "../../hooks/useSectionObserver";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const activeSection = useSectionObserver();

  // Sections with light backgrounds
  const lightSections = ["highlights", "features", "about", "services"];
  const isLightBackground = lightSections.includes(activeSection) || hovered;
  const logoSrc = isLightBackground ? logoDark : logoLight;

  const menuItems = [
    { label: "Home", href: "/", type: "route" },
    { label: "Highlights", href: "#highlights", type: "anchor" },
    { label: "Features", href: "#features", type: "anchor" },
    { label: "About", href: "#about", type: "anchor" },
    { label: "Blogs", href: "/blogs", type: "route" },
    { label: "Contact", href: "#contact", type: "anchor" },
  ];

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

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              {item.type === "route" ? (
                <Link
                  to={item.href}
                  className={`transition-colors duration-300 hover:underline ${
                    isLightBackground
                      ? "text-gray-800 hover:text-brand"
                      : "text-white hover:text-brand"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className={`scroll-mt-navbar transition-colors duration-300 hover:underline ${
                    isLightBackground
                      ? "text-gray-800 hover:text-brand"
                      : "text-white hover:text-brand"
                  }`}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-colors duration-300 focus:outline-none ${
            isLightBackground
              ? "text-gray-800 hover:text-brand"
              : "text-white hover:text-brand"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md transition-all duration-300">
          <ul className="flex flex-col items-center space-y-4 py-6">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                {item.type === "route" ? (
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-800 hover:text-brand transition-colors duration-300 hover:underline"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-800 hover:text-brand transition-colors duration-300 hover:underline scroll-mt-navbar"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
