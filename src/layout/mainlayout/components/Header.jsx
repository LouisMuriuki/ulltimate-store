import React from "react";
import { BsPerson, BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">E.Shop</h1>
      </div>
      <div className="flex flex-row items-center justify-center w-fit mx-36 ">
        <input
          className="w-[400px] p-2 rounded-md border border-e"
          type="text"
          placeholder="Search for products..."
        />
        <div className="flex bg-sky-500 w-10 h-10">
          <BsSearch size={20} color="white" className="m-auto" />
        </div>
      </div>

      <div className="flex items-center justify-around gap-4 w-fit">
        <div className="flex items-center justify-center gap-1 cursor-pointer">
          <BsPerson size={30} color="gray" />
          <div className="flex flex-col items-start justify-center">
            <p className="text-gray-400 text-sm">sign-in</p>
            <h2 className="font-bold text-sm">Account</h2>
          </div>
        </div>
        <div className="flex items-center justify-center gap-1">
          <AiOutlineShoppingCart size={30} color="gray" />
          <div className="flex flex-col items-start justify-center">
            <p className="text-gray-400 text-sm">total</p>
            <h2 className="font-bold text-sm">ksh 0.00</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
