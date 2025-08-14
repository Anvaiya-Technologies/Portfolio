import React, { useState } from "react";
import { Menu, X } from 'lucide-react'; 

const Navbar = () => {
    // State to manage the visibility of the mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the mobile menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed w-full bg-white bg-opacity-90 backdrop-blur-sm z-10 p-4 shadow-md rounded-b-lg">
            <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
                {/* Logo or Brand Name */}
                <div className="text-gray-900 text-2xl font-bold rounded-md">
                    MyBrand
                </div>

                {/* Desktop Navigation Links */}
                <ul className="hidden md:flex space-x-8 p-4">
                    <li className="text-gray-800 hover:text-blue-600 cursor-pointer font-medium transition duration-300 ease-in-out">
                        Home
                    </li>
                    <li className="text-gray-800 hover:text-blue-600 cursor-pointer font-medium transition duration-300 ease-in-out">
                        Services
                    </li>
                    <li className="text-gray-800 hover:text-blue-600 cursor-pointer font-medium transition duration-300 ease-in-out">
                        Contact
                    </li>
                    <li className="text-gray-800 hover:text-blue-600 cursor-pointer font-medium transition duration-300 ease-in-out">
                        About
                    </li>
                </ul>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md">
                        {isMenuOpen ? (
                            <X size={28} /> // 'X' icon when menu is open
                        ) : (
                            <Menu size={28} /> // Hamburger 'Menu' icon when menu is closed
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Links (conditionally rendered) */}
            {isMenuOpen && (
                <ul className="md:hidden flex flex-col items-end space-y-4 px-4 pb-4 bg-white bg-opacity-90 backdrop-blur-sm shadow-inner rounded-b-lg">
                    <li className="text-gray-800 hover:text-blue-600 cursor-pointer font-medium py-2 w-full text-right transition duration-300 ease-in-out">
                        Home
                    </li>
                    <li className="text-gray-800 hover:text-blue-600 cursor-pointer font-medium py-2 w-full text-right transition duration-300 ease-in-out">
                        Services
                    </li>
                    <li className="text-gray-800 hover:text-blue-600 cursor-pointer font-medium py-2 w-full text-right transition duration-300 ease-in-out">
                        Contact
                    </li>
                    <li className="text-gray-800 hover:text-blue-600 cursor-pointer font-medium py-2 w-full text-right transition duration-300 ease-in-out">
                        About
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
