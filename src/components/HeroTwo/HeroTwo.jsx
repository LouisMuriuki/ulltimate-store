import React from "react";

const HeroTwo = () => {
  return (
    <div className="flex">
      <div className="flex w-2/3 p-5 bg-gray-300">
        <div className="flex w-1/2">
          <img
            className="object-contain"
            src="https://images.unsplash.com/photo-1595859944471-e7b8b2c9c9f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx"
          />
        </div>
        <div className="flex w-1/2">
          <div className="flex flex-col">
            <div className="bg-orange-50 rounded">
              <p className="bg-orange-300 w-min">test</p>
            </div>
            <h2>Xbox Elitw Wireless Controller Series 2</h2>
            <div className="flex w-full gap-4">
              <h3>$100</h3>
              <h3 className="line-through">$200</h3>
            </div>
            <p>
              lorem ipsum dolor sit amet consectetur adipisicing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
              ad minim veniam quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur Excepteur sint occaecat cupidatat non proident sunt
              in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <div>
              <p>Offer ends in</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-1/3">
        <div className="flex flex-col  gap-2">
          <div className="relative w-full h-full">
            <img
              className=" object-cover"
              src="https://images.unsplash.com/photo-1595859944471-e7b8b2c9c9f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8M"
            />
            <div className="absolute top-0 left-0">
              <div className="flex flex-col">
                <h2 className="text-xl gap-2">Mi Smart Comapct Projector</h2>
                <p>Weekend Discount</p>
                <p>$100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
