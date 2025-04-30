import React from "react";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="/new2.jpg"
            alt="Elegant Interior"
            className="w-full h-auto rounded-2xl shadow-lg mt-2 shadow-grey-300 md:w-full md:mx-auto"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-4xl font-bold text-black mb-12">
            Our Philosophy
          </h2>
          <p className="text-2xl text-grey-800 leading-relaxed font-serif">
            “Precision in Every Line. Passion in Every Space.”
          </p>
          <p className="text-xl text-gray-800 leading-relaxed font-sans mt-4">
            We believe in precision-led design, where every idea is driven by
            creativity, efficiency, and technical soundness. From concept to
            execution, we prioritize your vision and deliver it with absolute
            precision.
          </p>
          <button
            className="mt-10 bg-black text-gray-50 py-2 px-4 rounded-lg hover:scale-125 transition duration-300"
            onClick={() => {
              navigate("/about");
            }}
          >
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
