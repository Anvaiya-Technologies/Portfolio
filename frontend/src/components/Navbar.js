import React from "react";

const Navbar = () => {
    return (
        <nav className="fixed w-full bg-transparent z-10">
            <ul className="flex justify-end space-x-8 p-4 mr-8">
                <li className="text-gray-800 hover:text-blue-600 cursor-pointer font-medium">Home</li>
                <li className="text-gray-800 hover:text-blue-600 cursor-pointer font-medium">Services</li>
                <li className="text-gray-800 hover:text-blue-600 cursor-pointer font-medium">Contact</li>
                <li className="text-gray-800 hover:text-blue-600 cursor-pointer font-medium">About</li>
            </ul>
        </nav>
    )
}

export default Navbar;