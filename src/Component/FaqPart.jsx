import React, { useState } from "react";

const FAQs = [
  {
    question: "Interior Design",
    answer:
      "We specialize in creating stunning and functional interior spaces that reflect your unique style and needs.",
  },
  {
    question: "Hospitality Design",
    answer:
      "We design luxurious and elegant hospitality spaces that cater to your business needs and expectations.",
  },
  {
    question: "Residential Design",
    answer:
      "We create beautiful and comfortable residential spaces that enhance your lifestyle and well-being.",
  },
  {
    question: "Commercial Design",
    answer:
      "We design efficient and effective commercial spaces that meet your business goals and enhance productivity.",
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
            unique style and aspirations, crafted with precision for an
            unforgettable living experience.
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
            src="https://res.cloudinary.com/dghvyniz8/image/upload/v1747484798/new2_ydu7xl.jpg"
            alt="Interior Design"
            className="w-full  pt-4 rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FaqPart;
