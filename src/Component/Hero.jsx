import React from "react";
import CountUp from "react-countup"; // Importing CountUp for animated counters

const HeroSection = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-6 md:px-12 pt-38">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            D.K. Architects
          </h1>
          <h2 className="text-2xl md:text-2xl font-semibold text-grey-800 mb-4 font-serif">
            Where Creativity Meets Precision
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed t font-light">
            Step into a world where the art of Interior Design is meticulously
            crafted to bring together timeless elegance and cutting-edge modern
            Innovation, allowing you to transform your living spaces into the
            epitome of luxury and sophistication.
          </p>
          <div className="flex items-center justify-center md:justify-start mt-6 space-x-4">
            <button className="bg-gray-900 text-gray-50 px-6 py-3 rounded-md hover:scale-110 hover:shadow-md shadow-grey-500 transition duration-300">
              Know More
            </button>
            <button className=" bg-gray-900 text-gray-50 px-6 py-3 rounded-md hover:scale-110 hover:shadow-md shadow-grey-500 transition duration-300">
              Get Project
            </button>
          </div>
          {/* Example Counters */}
          <div className="flex justify-center md:justify-start mt-10 gap-16">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-gray-900">
                <CountUp end={15} duration={2} />+
              </h3>
              <p className="text-gray-700 mt-1">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-gray-900">
                <CountUp end={120} duration={2.5} />+
              </h3>
              <p className="text-gray-700 mt-1">Projects Delivered</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-gray-900">
                <CountUp end={50} duration={2} />+
              </h3>
              <p className="text-gray-700 mt-1">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1350&q=80"
            alt="Interior Design"
            className="w-full h-auto rounded-2xl shadow-lg shadow-grey-500 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
