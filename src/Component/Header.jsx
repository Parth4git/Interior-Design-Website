import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  const handleNav = (path) => {
    navigate(path);
    setIsOpen(false); // Close mobile menu
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer text-2xl font-bold text-gray-800"
        >
          <img
            src="/DK ARCHITECTS LOGO FILE(1).png"
            alt="Logo"
            className="h-12 w-36 object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {links.map(({ name, path }) => (
            <li
              key={name}
              onClick={() => handleNav(path)}
              className="hover:text-gray-900 cursor-pointer"
            >
              {name}
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <button
          onClick={() => handleNav("/start-project")}
          className="hidden md:block bg-gray-900 text-white px-4 py-2 rounded-md hover:scale-105 transition duration-300"
        >
          Start Project
        </button>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-6">
          <button
            onClick={() => handleNav("/start-project")}
            className="bg-gray-900 text-white px-4 py-2 rounded-md hover:scale-105 transition duration-300"
          >
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
            {links.map(({ name, path }) => (
              <li
                key={name}
                onClick={() => handleNav(path)}
                className="hover:text-gray-900 cursor-pointer"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
