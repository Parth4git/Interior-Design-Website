import React, { useState } from "react";

const FAQs = [
  {
    question: "Living Room Interior Design",
    answer:
      "Transform your living room into a sanctuary of comfort and style, blending aesthetic appeal with functional elegance.",
  },
  {
    question: "Commercial Office Room Interior Design",
    answer:
      "Create productive and inspiring office environments tailored to your brand and team’s dynamic needs.",
  },
];

const FaqPart = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Designing Your Dream With Brilliance
          </h1>
          <p className="text-lg text-gray-800 leading-relaxed font-light mb-6">
            Elevate your spaces with bespoke interior designs that reflect your
            unique style and aspirations, crafted with precision and brilliance
            for an unforgettable living experience.
          </p>

          {/* Sub-sections */}
          <div className="space-y-4">
            {FAQs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-md p-4 shadow-sm bg-white"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left text-xl font-semibold text-gray-900 flex justify-between items-center"
                >
                  {faq.question}
                  <span className="text-gray-500">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </button>
                {activeIndex === index && (
                  <p className="mt-2 text-gray-700">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="/RENDER 1.jpg"
            alt="Interior Design"
            className="w-full rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FaqPart;
