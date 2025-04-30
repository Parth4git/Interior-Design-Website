import React, { useState } from "react";
import {
  services1,
  services2,
  services3,
  services4,
  services5,
  services6,
  services7,
} from "../assets/data";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

const FlipCardGrid = ({
  title,
  services,
  flippedIndex,
  handleFlip,
  baseIndex,
}) => (
  <div className="mb-20">
    <div className="max-w-5xl mx-auto mb-8 text-center">
      <h3 className="text-3xl font-bold mb-2 underline">{title}</h3>
    </div>
    <div className="grid md:grid-cols-4 gap-8">
      {services.map((service, index) => {
        const actualIndex = baseIndex + index;
        const isFlipped = flippedIndex === actualIndex;

        return (
          <div
            key={index}
            className="group [perspective:1000px] cursor-pointer"
            onClick={() => handleFlip(actualIndex)}
          >
            <div
              className={`relative w-full h-72 transition-transform duration-700 [transform-style:preserve-3d] ${
                isFlipped ? "[transform:rotateY(180deg)]" : ""
              }group-hover:[transform:rotateY(180deg)]`}
            >
              {/* Front Side */}
              <div
                className="absolute w-full h-full bg-cover bg-center rounded-xl flex items-center justify-center text-white text-2xl font-bold [backface-visibility:hidden]"
                style={{
                  backgroundImage: `url(${service.image})`,
                  filter: "brightness(0.9)",
                }}
              >
                <div className="w-full h-full flex items-center justify-center rounded-xl text-white text-2xl text-center font-bold bg-gradient-to-t from-gray-900 via-transparent-50 to-transparent  ">
                  {service.name}
                </div>
              </div>

              {/* Back Side */}
              <div className="absolute w-full h-full bg-gradient-to-bl from-gray-100 via-gray-400 to-gray-900 rounded-xl p-6 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {service.name}
                </h3>
                <p className="text-white">{service.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

const Services = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <div>
      <Header />
      <section className="bg-gray-50 py-28 px-4">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-800">Delivering solutions to help you grow</p>
        </div>

        <FlipCardGrid
          title="Architectural Design & Documentation"
          services={services1}
          flippedIndex={flippedIndex}
          handleFlip={handleFlip}
          baseIndex={0}
        />

        <FlipCardGrid
          title="Interior Design & Documentation"
          services={services2}
          flippedIndex={flippedIndex}
          handleFlip={handleFlip}
          baseIndex={services1.length}
        />

        <FlipCardGrid
          title="BIM Service"
          services={services3}
          flippedIndex={flippedIndex}
          handleFlip={handleFlip}
          baseIndex={services1.length + services2.length}
        />

        <FlipCardGrid
          title="MEPF Design & BIM Engineering"
          services={services4}
          flippedIndex={flippedIndex}
          handleFlip={handleFlip}
          baseIndex={services1.length + services2.length + services3.length}
        />

        <FlipCardGrid
          title="Structural Design & Coordination"
          services={services5}
          flippedIndex={flippedIndex}
          handleFlip={handleFlip}
          baseIndex={
            services1.length +
            services2.length +
            services3.length +
            services4.length
          }
        />

        <FlipCardGrid
          title="BOQ, Estimation & Tender Docs"
          services={services6}
          flippedIndex={flippedIndex}
          handleFlip={handleFlip}
          baseIndex={
            services1.length +
            services2.length +
            services3.length +
            services4.length +
            services5.length
          }
        />

        <FlipCardGrid
          title="Visualization"
          services={services7}
          flippedIndex={flippedIndex}
          handleFlip={handleFlip}
          baseIndex={
            services1.length +
            services2.length +
            services3.length +
            services4.length +
            services5.length +
            services6.length
          }
        />
      </section>
      <Footer />
    </div>
  );
};

export default Services;
