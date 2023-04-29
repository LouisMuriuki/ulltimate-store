import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ Pages }) => {
  return (
    <div className="flex justify-end w-full border-t border-slate-200">
      {Pages.map((page, index) => (
        <span key={index} className="mr-4 mt-2">
          <Link
            to={page.link}
            className="text-gray-600 hover:text-sky-600 mr-4 "
          >
            {page}
          </Link>
        </span>
      ))}
    </div>
  );
};

export default Navbar;
