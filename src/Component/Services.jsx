import React from "react";

const Services = () => {
  return (
    <div className="w-full bg-gray-50 py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-black">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Interior Design</h3>
            <p className="text-gray-600">
              Transform your space with our expert interior design services.
            </p>
            <img
              src="https://media.istockphoto.com/id/860064214/photo/smart-home-renovation-real-estate-with-technology-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=dYezNxzcOS-CQL3Evmk0oWAk5x7TX8hUusEin3syexQ="
              alt="Interior Design"
              className="mt-4 rounded-lg shadow-md max-w-full"
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Architecture</h3>
            <p className="text-gray-600">
              Innovative architectural solutions tailored to your needs.
            </p>
            <img
              src="https://media.istockphoto.com/id/2166074880/photo/smooth-focus-group-of-web-designers-are-working-together-to-develop-mobile-responsive-website.jpg?s=612x612&w=0&k=20&c=KLL-M4tEfm7GBnnVLSEKVn9g2LA95NKV64E8ETbEQi0="
              alt="Architecture"
              className="mt-4 rounded-lg shadow-md"
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Consultation</h3>
            <p className="text-gray-600">
              Get professional advice for your design projects.
            </p>
            <img
              src="https://media.istockphoto.com/id/2101875993/photo/home-inspector-or-engineer-examines-the-building-structure-and-ceiling-home-construction.jpg?s=612x612&w=0&k=20&c=XA8cFqJXuFphWWlELhCfhFZvXZy4MjSXelHNf3ozBjc="
              alt="Consultation"
              className="mt-4 rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
