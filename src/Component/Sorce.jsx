import React from "react";

const Sorce = () => {
  return (
    <div className="w-full bg-gray-50 py-16 px-6 md:px-12 pt-38 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mt-10">
          <h1 className="text-2xl md:text-6xl font-bold text-black mb-6">
            Why Choose Us
          </h1>
          <ul className="list-disc list-outside pl-6 text-xl text-gray-800 leading-relaxed mb-6 font-serif">
            <li>Precision-Driven Documentation</li>
            <li>AI-Enabled BIM Workflows</li>
            <li> Multi-disciplinary Design Capabilities </li>
            <li> Transparent & Reliable Delivery</li>
            <li>Industry-Standard BOQs & Cost Sheets</li>
            <li> Future-Ready Smart Design Techniques </li>
            <li> Personalized Client Support</li>
          </ul>
          <button
            className=" bg-black text-gray-50 px-6 py-3 rounded-md hover:scale-110 transition duration-300 "
            onClick={() => (window.location.href = "/contact")}
          >
            Get Project
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="https://plus.unsplash.com/premium_photo-1674730952112-965c8e4decf4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHxpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Interior Design"
            className="w-full h-96 rounded-2xl shadow-lg shadow-grey-500 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Sorce;
