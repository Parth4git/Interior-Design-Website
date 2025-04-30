import React, { useState } from "react";

const services = [
  {
    name: "Architectural Design & Documentation",
    image: "/interior-design-service1.jpeg",
    description: [
      "Concept Design",
      "Schematic Layouts",
      " Detailed Working Drawings ",
      "GFC & Municipal Sets ",
      "BOQ, Cost Estimation ",
      "3D Visuals & Walkthroughs ",
      "Construction Coordination Sets",
    ],
  },
  {
    name: "Interior Design & Documentation",
    image: "/interior-design-service2.jpeg",
    description: [
      "Residential | Commercial | Retail | Hospitality ",
      "Layouts, RCPs, Elevations",
      "Furniture, Electrical, Plumbing Plans ",
      "Interior BOQs",
      "Material Boards & Execution Drawings",
      "Interior BIM Services",
    ],
  },
  {
    name: "BIM Services",
    image: "/interior-design-service3.jpeg",
    description: [
      "Scan to BIM",
      "BIM Modeling: Architecture, Interior, Structure",
      "BIM Engineering (MEPF, Structural)",
      "Clash Detection & 4D/5D Integration",
      "Parametric Families, LOD 100-500",
      "Automation & AI in BIM",
    ],
  },
  {
    name: "Structural Design & Coordination",
    image: "/interior-design-service4.jpeg",
    description: [
      "Structural Design",
      "Foundation & RCC Details ",
      "Steel & Composite Systems",
      "Structural Reports",
      "Coordination Drawings",
    ],
  },
  {
    name: "BOQ, Estimation & Tender Docs",
    image: "/interior-design-service5.jpeg",
    description: [
      " Itemized BOQ ",
      "Rate Analysis ",
      "Tender Packages",
      "Vendor Comparison & Selection Support ",
    ],
  },
  {
    name: " MEPF Design & BIM Engineering",
    image: "/interior-design-service6.jpeg",
    description: [
      "Mechanical (HVAC) Design",
      "Electrical Load & Lighting Design",
      "Fire Fighting Design",
      "Plumbing & Public Health Design",
      "BOQs, Load Calculations, Drawings",
      "Coordinated BIM Models",
      "BIM Engineering Expertise",
    ],
  },
];

const Service = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Our Services</h2>
        <p className="text-gray-800">Delivering solutions to help you grow</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const isFlipped = flippedIndex === index;

          return (
            <div
              key={index}
              className="group [perspective:1000px] cursor-pointer"
              onClick={() => handleFlip(index)}
            >
              <div
                className={`relative w-full h-72 transition-transform duration-700 [transform-style:preserve-3d] ${
                  isFlipped ? "[transform:rotateY(180deg)]" : ""
                } group-hover:[transform:rotateY(180deg)]`}
              >
                {/* Front Side */}
                <div
                  className="absolute w-full h-full bg-cover bg-center rounded-xl flex items-center justify-center text-white text-2xl font-bold [backface-visibility:hidden]"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    filter: "brightness(0.9) ",
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center rounded-xl text-white text-2xl text-center font-bold bg-gradient-to-t from-gray-950 via-transparent to-transparent ">
                    {service.name}
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute w-full h-full bg-gradient-to-bl from-gray-100 via-gray-400 to-gray-900 rounded-xl p-6 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <h3 className="text-2xl font-bold mb-2 text-center">
                    {service.name}
                  </h3>
                  <ul className="text-white text-md">
                    {service.description.map((desc, i) => (
                      <li key={i} className="mb-2 list-none">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
