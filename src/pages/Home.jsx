import React from "react";
import Header from "../Component/Header";
import Hero from "../Component/Hero";
import Services from "../Component/Services";
import Info from "../Component/Info";
import Portfolio from "../Component/Portfolio";
import About from "../Component/About";
import Steps from "../Component/Steps";
import Filler from "../Component/Filler";
import FaqPart from "../Component/FaqPart";
import Sorce from "../Component/Sorce";
import ContactUs from "../Component/ContactUs";
import Footer from "../Component/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <FaqPart />

      <Filler
        title="Need some conceptual design ideas?"
        desc="We are here to help you with your design needs. Our team of experts is ready to assist you in bringing your vision to life."
        buttonText="WhatsApp Us"
      />
      <Info />
      <Portfolio />
      <About />
      <Steps />
      <Filler
        title="Ready to transform your space?"
        desc="Contact us today to schedule a consultation and let us help you create the space of your dreams."
        buttonText="Schedule a Site Visit"
      />

      <Sorce />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
