import React from "react";

const HomeHero = () => {
  return (
    <div className="flex w-full gap-2 items-center justify-center mt-6">
      <div className="flex w-2/3 p-5 bg-gray-100">
        <div className="flex w-1/2 h-[357px] p-3">
          <div className="flex flex-col justify-center gap-5">
            <div className="">
              <p className="text-orange-400 w-min">test</p>
            </div>
            <h2 className="text-2xl font-bold">
              Xbox Elitw Wireless Controller Series 2
            </h2>
            <p>
              lorem ipsum dolor sit amet consectetur adipisicing elit sed do
              eiusmod
            </p>
            <div>
              <button className="w-max px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-1/2">
          <img
            className="mix-blend-multiply object-contain"
            src="https://gmedia.playstation.com/is/image/SIEPDC/playstation-5-horizontal-product-shot-01-ps5-en-23nov20?$1600px$"
          />
        </div>
      </div>
      <div className="flex w-1/3 h-[395px]">
        <div className="flex flex-col gap-5">
          <div className="flex relative w-full bg-blue-200">
            <div className="w-1/2 h-[187px] flex flex-col items-center justify-around">
              <div className="flex flex-col">
                <h2 className="text-base font-bold pl-5">
                  Mi Smart Compact Projector
                </h2>
              </div>
              <div className="flex flex-col">
                <p className="text-gray-500">Weekend Discount</p>
                <div className="flex items-center gap-5">
                  <p className="text-orange-400 font-bold">$100</p>
                  <p className="line-through font-bold">$100</p>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex items-center justify-center ">
              <img
                className=" object-cover w-full "
                src="https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Library-Sites-SharedLibrary-JB/en_US/dw31b7d146/partybox-series-category_120120.png"
              />
            </div>
          </div>
          <div className="flex relative w-full bg-gray-100">
            <div className="w-1/2 h-[187px] flex flex-col items-center justify-around">
              <div className="flex flex-col">
                <h2 className="text-base font-bold pl-5">
                  Mi Smart Compact Projector
                </h2>
              </div>
              <div className="flex flex-col">
                <p className="text-gray-500">Weekend Discount</p>
                <div className="flex items-center gap-5">
                  <p className="text-orange-400 font-bold">$100</p>
                  <p className="line-through font-bold">$100</p>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex items-center justify-center ">
              <img
                className=" object-cover w-full mix-blend-multiply"
                src="https://gmedia.playstation.com/is/image/SIEPDC/DualSense-Edge-image-block-01-en-24aug22?$1600px$"
              />
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
