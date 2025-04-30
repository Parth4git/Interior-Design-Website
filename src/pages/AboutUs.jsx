import React from "react";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import About from "../Component/About";
import Info from "../Component/Info";
import Filler from "../Component/Filler";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-50 mb-6 mt-20">
        <About />

        <Filler
          title="Ready to transform your space?"
          desc="Contact us today to schedule a consultation and let us help you create the space of your dreams."
          buttonText="Schedule a Site Visit"
        />
        <Info />
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
