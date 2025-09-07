import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoLight from "../..//assets/img/logo-light.png";
import logoDark from "../../assets/img/logo-dark.png";
import { useSectionObserver } from "../../hooks/useSectionObserver";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useSectionObserver();
  const location = useLocation();

  // Listen for scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sections with light backgrounds (for logo swap)
  const lightSections = ["highlights", "features", "about", "services"];

  // Detect current route
  const pathname = location.pathname;

  // Force glassy navbar for all pages except home "/"
  const alwaysGlassyNavbar =
    pathname !== "/" && !pathname.startsWith("#");

  // Determine if we should use light logo based on section and hover (only on home)
  const isLightBackground =
    !alwaysGlassyNavbar && (lightSections.includes(activeSection) || hovered);

  const logoSrc = isLightBackground ? logoDark : logoLight;

  // Navbar background logic
  let navbarBg = "bg-transparent"; // Initial, transparent
  if (scrolled || isLightBackground || alwaysGlassyNavbar) {
    navbarBg =
      "bg-gradient-to-r from-black/80 via-gray-900/85 to-indigo-900/80 backdrop-blur-lg shadow-md";
  }

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
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${navbarBg}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ height: "64px" }}
    >
      {/* Full-width inner bar with minimal side padding */}
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 flex justify-between items-center h-full">
        <a href="#hero" className="flex items-center flex-shrink-0">
          <img
            src={logoSrc}
            alt="Anvaiya Logo"
            className="h-8 sm:h-10 w-auto transition-all duration-300"
          />
        </a>

        {/* Desktop Menu (reduced spacing) */}
        <ul className="hidden md:flex space-x-4 lg:space-x-6 text-sm font-medium">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              {item.type === "route" ? (
                <Link
                  to={item.href}
                  className="transition-colors duration-300 hover:underline text-white hover:text-indigo-300"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className="scroll-mt-navbar transition-colors duration-300 hover:underline text-white hover:text-indigo-300"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden transition-colors duration-300 focus:outline-none text-white hover:text-indigo-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-black/95 via-gray-900/90 to-indigo-900/90 backdrop-blur-lg shadow-xl transition-all duration-300">
          <ul className="flex flex-col items-start space-y-4 py-6 px-6">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                {item.type === "route" ? (
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-indigo-300 transition-colors duration-300 hover:underline"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-indigo-300 transition-colors duration-300 hover:underline scroll-mt-navbar"
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