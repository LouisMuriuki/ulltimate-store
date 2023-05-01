import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ Pages }) => {
  return (
    <div className="flex justify-end w-full border-t border-slate-200">
      {Pages.map((page, index) => (
        <div key={index} className="flex flex-col">
          <span className="mr-4 mt-2">
            <Link
              to={page.link}
              className="group text-gray-600 hover:text-sky-600 mr-4 "
            >
              {page}
            </Link>
          </span>
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
