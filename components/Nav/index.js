import React from "react";
import Header from "./Header";
import Tabs from "./Tabs";

const index = ({ children }) => {
  return (
    <div className="min-h-screen bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-poppins">
      <Header />
      <Tabs />

      {children}
    </div>
  );
};

export default index;
