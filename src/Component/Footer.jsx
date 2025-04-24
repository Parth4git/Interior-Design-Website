import React from "react"; // Assuming you're using React Router for navigation
import { Instagram, Facebook, Twitter } from "lucide-react"; // Example social icons

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6 md:px-12 border-t border-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* First Column: Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
          {/* <p className="text-sm mb-2">Your Interior Design Studio</p>
          <p className="text-sm mb-2">123 Design Street, Kanpur, UP</p>
          <p className="text-sm mb-2">Email: info@yourdesign.com</p>
          <p className="text-sm">Phone: +91 9876543210</p> */}
          <div className="flex space-x-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Second Column: Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Navigation</h3>
          <ul className="text-sm">
            <li className="mb-2">Home</li>
            <li className="mb-2">About Us</li>
            <li className="mb-2">Services</li>
            <li className="mb-2">Projects</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Third Column: Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
          <ul className="text-sm">
            <li className="mb-2">Residential Design</li>
            <li className="mb-2">Commercial Design</li>
            <li className="mb-2">Space Planning</li>
            <li className="mb-2">Furniture Selection</li>
            <li>Interior Styling</li>
          </ul>
        </div>

        {/* Fourth Column: Social Media */}
        <div>
          {/* <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex space-x-4"> */}
          {/* <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <Instagram className="w-6 h-6" />
            </a> */}
          {/* <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <Facebook className="w-6 h-6" />
            </a> */}
          {/* <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <Twitter className="w-6 h-6" />
            </a> */}
          {/* </div> */}
          <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
          <p className="text-sm mb-4">Get the latest design and ideas.</p>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-md bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-500 transition duration-300">
              Email Now
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        <p>
          &copy; {new Date().getFullYear()} Your Interior Design Studio. All
          rights reserved.
        </p>
        <p className="mt-1">
          Designed & Developed by{" "}
          <a
            href="https://yourdeveloperwebsite.com" // Replace with your or your developer's website
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Your Name/Company Name
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
