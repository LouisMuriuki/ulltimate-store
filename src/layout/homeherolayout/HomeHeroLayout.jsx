import React, { useState } from "react";

import Categorylist from "./components/Categorylist";
import Navbar from "./components/Navbar";

const HomeHeroLayout = ({ children }) => {
  const [categories, setCategories] = useState([
    "Clothing & Accessories",
    "Shoes",
    "Electronics",
    "Home & Garden",
    "Beauty & Personal Care",
    "Sports & Outdoors",
    "Toys & Games",
    "Health & Wellness",
    "Food & Beverages",
    "Automotive",
  ]);

  const [Pages, setPages] = useState([
    "Home",
    "Today's Deals",
    "Trending Products",
    "Blog",
    "Special Offers",
  ]);
  return (
    <div className="w-full ">
      <div className="w-full flex h-min gap-4">
        <div className="flex  w-1/4 ">
          <Categorylist categories={categories} />
        </div>

        <div className="flex flex-col w-3/4 ">
          <Navbar Pages={Pages} />

          {children}
        </div>
      </div>
    </div>
  );
};

export default HomeHeroLayout;
