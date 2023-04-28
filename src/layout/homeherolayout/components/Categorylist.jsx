import React from "react";
import { AiOutlineMenu ,AiOutlineRight} from "react-icons/ai";
const Categorylist = ({categories}) => {
  return (
    <div className="w-full h-full">
      <div className="bg-orange-700 gap-2 flex p-1">
        <AiOutlineMenu size={30} color="white" />
        <h2 className="text-white">Browse Categories</h2>
      </div>
      <div className="flex flex-col ">
        {categories.map((item, i) => {
          return (
            <div key={i} className="flex items-center justify-between w-full p-1">
              <h1>{item}</h1>
              <AiOutlineRight />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categorylist;
