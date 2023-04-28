import React, { useState } from "react";
const servicesOffered=([
  {
    img: "",
    text: " Free Delivery",
    subText: "Free shipping on all orders ",
  },
  {
    img: "",
    text: " Online Support 24/7",
    subText: "Support online 24 Hours  a day",
  },
  {
    img: "",
    text: "Money Return",
    subText: "Back guarantee under 7 days",
  },
  {
    img: "",
    text: "Member Discount",
    subText: "On every order over $100 ",
  },
]);
const Services = () => {
  return (
    <div className="flex items-center justify-between">
      {servicesOffered.map((service) => (
         <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-orange-100">
            <img src="" className=" w-6 h-6 flex items-center object-contain" />
          </div>

          <div className="flex flex-col items-start justify-center">
            <p className="text-gray-400 text-sm">{service.text}</p>
            <h2 className="font-bold">{service.subText}</h2>
          </div>
        </div>
      ))
       
      }
    </div>
  );
};

export default Services;
