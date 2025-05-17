import React from "react";

const imageUrls = [
  "https://plus.unsplash.com/premium_photo-1674480165860-f60bcf6aa2f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1678233517593-c6843255d28d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1711122842709-9568d5777804?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1667170049837-b3715b710559?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1716085486995-dd186927b822?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1734937743443-a50fff0c0b40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1711122842883-a5fb1cb164bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1730140123079-f1f9233fc5a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1667206761103-3c321c234eed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1743410973853-bdd0b5ca674e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1668438712649-ffd85f756de5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1680503397107-475907e4f3e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1678233517593-c6843255d28d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww",
  "https://res.cloudinary.com/dghvyniz8/image/upload/v1747484858/new3_hgnsr1.jpg",
  "/IMG-20250418-WA0040.jpg",
  "https://res.cloudinary.com/dghvyniz8/image/upload/v1747484798/new2_ydu7xl.jpg",
  "https://res.cloudinary.com/dghvyniz8/image/upload/v1747484661/new1_izfuot.jpg",
  "/SONU JI 22.jpg",
];

const Portfolio = () => {
  return (
    <section className="w-full bg-gray-50 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-10">
          Our Portfolio
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {imageUrls.map((url, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-lg">
              <img
                src={url}
                alt={`Interior ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
