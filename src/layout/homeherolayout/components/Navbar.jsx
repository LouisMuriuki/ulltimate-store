import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ Pages }) => {
  return (
    <div className="flex justify-end w-full ">
      {Pages.map((page, index) => (
        <span key={index} className="mr-4">
          <Link
            to={page.link}
            className="text-gray-600 hover:text-gray-900 mr-4"
          >
            {page}
          </Link>
        </span>
      ))}
    </div>
  );
};

export default Navbar;
