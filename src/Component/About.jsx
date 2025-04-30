import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Main Image */}
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1580312068767-ebae16ef7af1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Team working"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>

        {/* Right: Text + Small Image */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-6xl font-bold text-black mb-18">
            About Us
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-6 ">
            D.K. Architects is a leading architectural and design firm founded
            by Ar. Deepak Kaushik, delivering timeless, functional, and visually
            compelling spaces through creativity, technology, and accuracy. We
            specialize in design excellence, thorough documentation, and
            cutting-edge BIM implementation to ensure every project is built on
            clarity and innovation.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            Our mission is to transform your living and working environments
            into beautiful, functional spaces that reflect your personality and
            lifestyle.
          </p>
          <button
            className="bg-black text-gray-50 px-6 py-3 rounded-md hover:scale-110 transition duration-300 mb-6 mt-4"
            onClick={() => {
              navigate("/contact");
            }}
          >
            Learn More
          </button>
          <img
            src="https://images.unsplash.com/photo-1600508772927-723e3ba305c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Design detail"
            className="w-full h-auto mt-10 mx-auto md:mx-0 rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
