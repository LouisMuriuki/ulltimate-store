import React from "react";
import { AiOutlineMenu ,AiOutlineRight} from "react-icons/ai";
const Categorylist = ({categories}) => {
  return (
    <div className="w-full h-full">
      <div className="items-center  bg-orange-400 gap-4 flex p-3 px-5">
        <AiOutlineMenu size={30} color="white" />
        <h2 className="text-white">Browse Categories</h2>
      </div>
      <div className="flex flex-col bg-gray-100 ">
        {categories.map((item, i) => {
          return (
            <div key={i} className="flex items-center justify-between w-full p-2 px-5 cursor-pointer  text-slate-800 hover:text-black hover:bg-slate-200">
              <h1 className=" ">{item}</h1>
              <AiOutlineRight className="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categorylist;
