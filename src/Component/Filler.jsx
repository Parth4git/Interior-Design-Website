import React from "react";

const Filler = (props) => {
  return (
    <div className="bg-image bg-cover bg-center h-70 flex items-center justify-center relative">
      <div className="bg-gray-800 bg-opacity-50 p-10 rounded-lg text-center w-full">
        <h1 className="text-4xl font-bold text-white mb-4">{props.title}</h1>
        <p className="text-lg text-gray-300 mb-6">{props.desc}</p>
        <button className="bg-white text-black px-6 py-3 rounded-md hover:scale-110 transition duration-300">
          {props.buttonText}
        </button>
      </div>
    </div>
  );
};

export default Filler;
