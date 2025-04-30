import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Home", "Portfolio", "Services", "About Us", "Contact Us"];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-gray-800">
          <img
            src="/DK ARCHITECTS LOGO FILE(1).png"
            alt="Logo"
            className="h-12 w-36 object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {links.map((link) => (
            <li key={link} className="hover:text-gray-900 cursor-pointer">
              {link}
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <button className="hidden md:block bg-gray-900 text-white px-4 py-2 rounded-md hover:scale-105 transition duration-300">
          Start Project
        </button>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-6">
          <button className="w-full mt-4 bg-gray-900 text-white px-4 py-2 rounded-md hover:scale-105 transition duration-300">
            Start Project
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <ul className="space-y-2 text-gray-700 font-medium">
            {links.map((link) => (
              <li
                key={link}
                onClick={() => setIsOpen(false)}
                className="hover:text-gray-900 cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
