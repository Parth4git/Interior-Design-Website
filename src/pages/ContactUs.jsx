import React from "react";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import ContactUs from "../Component/ContactUs";

const ContactUsPage = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-50 mb-6 mt-20">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
};

export default ContactUsPage;
