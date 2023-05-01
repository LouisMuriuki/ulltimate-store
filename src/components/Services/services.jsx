import React, { useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import {FcOnlineSupport} from "react-icons/fc";
import { SiMoneygram } from "react-icons/si";
import { MdCardMembership } from "react-icons/md";
const servicesOffered = [
  {
    img: TbTruckDelivery,
    text: " Free Delivery",
    subText: "Free shipping on all orders ",
  },
  {
    img: FcOnlineSupport,
    text: " Online Support 24/7",
    subText: "Support online 24 Hours  a day",
  },
  {
    img: SiMoneygram,
    text: "Money Return",
    subText: "Back guarantee under 7 days",
  },
  {
    img: MdCardMembership,
    text: "Member Discount",
    subText: "On every order over $100 ",
  },
];
const Services = () => {
  return (
    <div className="flex items-center justify-between">
      {servicesOffered.map((service,i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100">
            <service.img className=" w-6 h-6 flex items-center text-orange-300 " />
          </div>

          <div className="flex flex-col items-start justify-center">
            <p className="text-gray-400 text-sm">{service.text}</p>
            <h2 className="font-bold">{service.subText}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
