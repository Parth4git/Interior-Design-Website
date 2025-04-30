import React from "react";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import Portfolio from "../Component/Portfolio";

const PortfolioPage = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-50 mb-6 mt-20">
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
