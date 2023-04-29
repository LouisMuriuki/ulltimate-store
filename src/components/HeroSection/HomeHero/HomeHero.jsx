import React from 'react'

const HomeHero = () => {
  return (
    <div className='flex w-full gap-2 items-center justify-center mt-6'>
        <div className="flex w-2/3 p-5 bg-gray-100">
       
        <div className="flex w-1/2 h-[357px] p-3">
          <div className="flex flex-col justify-center gap-1">
            <div className="">
              <p className="text-orange-400 w-min">test</p>
            </div>
            <h2 className='text-2xl font-bold'>Xbox Elitw Wireless Controller Series 2</h2>
            <p>
              lorem ipsum dolor sit amet consectetur adipisicing elit sed do
              eiusmod
            </p>
            <div>
             <button className='w-max px-6 py-3 bg-sky-500 text-white'>SHOP NOW</button>
            </div>
          </div>
        </div>
        <div className="flex w-1/2">
          <img
            className="object-contain"
            src="https://images.unsplash.com/photo-1595859944471-e7b8b2c9c9f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx"
          />
        </div>
      </div>
      <div className="flex w-1/3">
        <div className="flex flex-col gap-2">
          <div className="relative w-full p-3 bg-gray-200">
            <img
              className=" object-cover"
              src="https://images.unsplash.com/photo-1595859944471-e7b8b2c9c9f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8M"
            />
            <div className="absolute top-0 left-0">
              <div className="flex flex-col">
                <h2 className="text-xl gap-2">Mi Smart Comapct Projector</h2>
              </div>
            </div>
            <div className="absolute bottom-0 left-0">
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
  )
}

export default HomeHero