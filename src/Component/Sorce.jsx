import React from "react";

const Sorce = () => {
  return (
    <div className="w-full bg-gray-50 py-16 px-6 md:px-12 pt-38 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mt-10">
          <h1 className="text-2xl md:text-2xl font-bold text-black mb-6">
            Designing Your Dream in Three Simple Steps
          </h1>
          <h2 className="text-xl md:text-xl font-bold text-black mb-1">
            Start Project
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed mt-4 mb-1">
            Embark on your design adventure by initiating your project. Share
            your vision and set the stage for a bespoke design experience
          </p>
          <h2 className="text-2xl md:text-xl font-bold text-black mb-1">
            Start Project
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed mt-4 mb-1">
            Embark on your design adventure by initiating your project. Share
            your vision and set the stage for a bespoke design experience
          </p>
          <h2 className="text-2xl md:text-xl font-bold text-black mb-1">
            Start Project
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed mt-4 mb-1">
            Embark on your design adventure by initiating your project. Share
            your vision and set the stage for a bespoke design experience
          </p>
          <button className=" bg-black text-gray-50 px-6 py-3 rounded-md hover:scale-110 transition duration-300 mt-2">
            Get Project
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="https://plus.unsplash.com/premium_photo-1674730952112-965c8e4decf4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHxpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Interior Design"
            className="w-full h-96 rounded-2xl shadow-lg shadow-green-500 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Sorce;
