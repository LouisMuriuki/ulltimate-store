import React from "react";

const TopSection = () => {
  return (
    <div className="flex w-full h-8 bg-gray-300 ">
      <div className="flex justify-between items-center container mx-auto px-16">
        <div className="flex ">
          <img src="/images/logo.png" alt="" className="w-8" />
          <h4 className="text-orange-400 animate-pulse">Up to 70% off on all products</h4>
        </div>
        <div className="flex items-center justify-between gap-5">
          <h5>USD</h5>
          <h5>English</h5>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
