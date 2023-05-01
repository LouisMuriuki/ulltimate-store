import React from "react";

const HeroTwo = () => {
  return (
    <div className="flex gap-4">
      <div className="flex w-2/3 p-5 bg-gray-100 gap-4">
        <div className="flex w-1/2 ">
          <img
            className="mix-blend-multiply object-contain"
            src="https://assets.xboxservices.com/assets/af/2e/af2e6de5-7421-4f4b-a99b-1b067a1af382.jpg?n=10202018_Image-1084_Fam_1920x944.jpg"
          />
        </div>
        <div className="flex w-1/2">
          <div className="flex flex-col gap-5">
            <div className="bg-orange-50 rounded-full w-min">
              <p className="text-orange-400 w-min px-2">test</p>
            </div>
            <h2 className="text-2xl font-bold">
              Xbox Elitw Wireless Controller Series 2
            </h2>
            <div className="flex items-center gap-5">
              <p className="text-orange-400 font-bold">$100</p>
              <p className="line-through font-bold">$100</p>
            </div>
            <p>
              lorem ipsum dolor sit amet consectetur adipisicing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
              ad minim veniam quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat Duis aute irure dolor in
              reprehenderit in voluptate velit
            </p>
            <div>
              <p>Offer ends in</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-1/3">
        <div className="flex flex-col gap-5">
          <div className="flex relative w-full bg-gray-100">
            <div className="w-1/2 h-[187px] flex flex-col justify-around">
              <div className="flex flex-col">
                <h2 className="text-base font-bold pl-5">
                  Mi Smart Compact Projector
                </h2>
              </div>
              <div className="flex flex-col pl-5">
                <p className="text-gray-500">Weekend Discount</p>
                <div className="flex items-center gap-5">
                  <p className="text-orange-400 font-bold">$100</p>
                  <p className="line-through font-bold">$100</p>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex items-center justify-center ">
              <img
                className="mix-blend-multiply object-cover w-full "
                src="https://assets.xboxservices.com/assets/1e/38/1e38ff43-b33c-4697-b523-cb9750184d78.jpg?n=200542_Hub_Content-Placement-0_788x444.jpg"
              />
            </div>
          </div>
          <div className="flex relative w-full bg-gray-100">
            <div className="w-1/2 h-[187px] flex flex-col  justify-around">
              <div className="flex flex-col">
                <h2 className="text-base font-bold pl-5">
                  Mi Smart Compact Projector
                </h2>
              </div>
              <div className="flex flex-col pl-5">
                <p className="text-gray-500">Weekend Discount</p>
                <div className="flex gap-5">
                  <p className="text-orange-400 font-bold">$100</p>
                  <p className="line-through font-bold">$100</p>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex items-center justify-center ">
              <img
                className=" mix-blend-multiply object-cover w-full "
                src="https://gmedia.playstation.com/is/image/SIEPDC/DualSense-Edge-image-block-01-en-24aug22?$1600px$"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
