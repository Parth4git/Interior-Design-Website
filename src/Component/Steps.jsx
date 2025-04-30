import React from "react";
import { BiArch } from "react-icons/bi";
import { BiBuildingHouse } from "react-icons/bi";
import { BiHomeSmile } from "react-icons/bi";

const Steps = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
            Designing Your Dream in Three Simple Steps
          </h1>
          {/* Sub-sections */}
          <div className="space-y-6">
            <div>
              <div className="flex gap-4">
                <BiArch className="text-4xl" />

                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  Start Project
                </h2>
              </div>
              <p className="text-gray-700">
                Embark on your design adventure by initiating your project.
                Share your vision and set the stage for a bespoke design
                experience
              </p>
            </div>
            <div>
              <div className="flex gap-4">
                <BiHomeSmile className="text-4xl" />
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  Craft
                </h2>
              </div>
              <p className="text-gray-700">
                Collaborate closely to achieve design excellence refining your
                vision and crafting brilliance into every aspect of your space
              </p>
            </div>
            <div>
              <div className="flex gap-4">
                <BiBuildingHouse className="text-4xl" />
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  Deliver
                </h2>
              </div>
              <p className="text-gray-700">
                Experience the culmination of your vision as we deliver a
                meticulously crafted design that transforms your space into a
                masterpiece.
              </p>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="/SONU JI 12.jpg"
            alt="Interior Design"
            className="w-full rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Steps;
