import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Home", "Portfolio", "Services", "About Us", "Contact Us"];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <img
            src="/public/DK ARCHITECTS LOGO FILE(1).png"
            alt="Logo"
            className="h-12 w-36"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {links.map((link) => (
            <li key={link} className="hover:text-gray-900 cursor-pointer">
              {link}
            </li>
          ))}
        </ul>
        <button className="hidden md:block bg-gray-900 text-white px-4 py-2 rounded-md hover:scale-105 transition duration-300">
          Get Project
        </button>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <ul className="space-y-2 text-gray-400 font-medium">
            {links.map((link) => (
              <li
                key={link}
                className="hover:text-shadow-gray-900 cursor-pointer"
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
