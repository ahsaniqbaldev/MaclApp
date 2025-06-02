import React from "react";

const HowItWork = () => {
  return (
    <div className="howItWork relative mt-10 bg-[#F2FAD34D] w-full overflow-x-hidden overflow-y-hidden">
      <img
        className="absolute bottom-[30rem] lg:bottom-[5rem] left-0 w-16 xl:w-28 lg:w-18 object-contain z-0 opacity-70"
        src="../../imgs/wheat.png"
        alt="Wheat"
      />

      <div className="container mx-auto pt-5 pb-5 px-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 pb-10">
          <h2 className="text-base md:text-xl font-medium text-black">
            How It Works
          </h2>
          <div className="w-8 md:w-20 h-px border-[#006A5A] border-b-2"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="flex flex-col text-center items-center my-[-1.5rem]">
            <img
              className="h-auto max-w-[80%] sm:max-w-[266px]"
              src="../../imgs/howitwork1.png"
              alt="Step 1"
            />
            <h2 className="mt-6 font-semibold">Find a Home Cook Near You</h2>
            <p className="max-w-xs text-center">
              Explore dishes and local home cooks by location or craving
            </p>
          </div>

          <div className="flex flex-col text-center items-center">
            <img
              className="h-auto max-w-[80%] sm:max-w-[264px]"
              src="../../imgs/howitwork2.png"
              alt="Step 2"
            />
            <h2 className="mt-6 font-semibold">Place Your Order</h2>
            <p className="max-w-xs text-center">
              Pick your favorites and place an order in just a few taps.
            </p>
          </div>

          <div className="flex flex-col text-center items-center">
            <img
              className="h-auto max-w-[80%] sm:max-w-[264px]"
              src="../../imgs/howitwork3.png"
              alt="Step 3"
            />
            <h2 className="mt-6 font-semibold">
              Enjoy Delicious Homemade Food
            </h2>
            <p className="max-w-xs text-center">
              Get fresh, homemade food delivered to your doorstep.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
