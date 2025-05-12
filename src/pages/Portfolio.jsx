import React from "react";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import Portfolio from "../Component/Portfolio";

const PortfolioPage = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-50 mb-6 mt-20">
        <Portfolio />
        <div className="max-w-8xl mx-auto px-4 py-8 grid place-items-center">
          <h1 className="text-4xl font-bold text-center mt-10 mb-6">
            Our Sample Sketch
          </h1>
          <p className="text-center text-lg text-gray-700 mb-6 font-medium mt-6">
            Explore our sample sketches that showcase our design philosophy and
            creativity. Each sketch is a testament to our commitment to
            excellence in interior design.
          </p>
          <button
            className="bg-black text-gray-50 px-6 py-3 rounded-md hover:scale-110 transition duration-300 mb-6 mt-4"
            onClick={() => {
              window.location.href =
                "https://drive.google.com/drive/folders/1IadgW3IDeL9iufEVr7wAcIqzIxpgq3f6?usp=sharing";
            }}
          >
            Download The Sample Sketch
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
