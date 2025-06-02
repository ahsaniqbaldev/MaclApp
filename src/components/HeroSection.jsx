export const HeroSection = () => {
  return (
    <div className="pt-[5rem] w-full bg-no-repeat bg-[length:100%_30%] sm:bg-[length:100%] bg-[url('/imgs/Group45.png')]">
      <div className="container mx-auto">
        {/* Yummy Section with responsiveness */}
        <div className="hero-head flex flex-col items-center justify-center text-center px-4 py-5">
          <h1
            className="font-medium text-[#F40000] flex items-center justify-center relative 
            text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[8rem] leading-none"
          >
            <span className="relative inline-block">
              Y
              <span className="absolute -right-1 top-[0.9rem] sm:top-[1.6rem] sm:-right-[0.2rem] md:top-[2.5rem] md:-right-[0.5rem] lg:top-[3.5rem] xl:top-[3.5rem]">
                <img
                  src="/imgs/tabler_north-star.png"
                  alt=""
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-7 lg:h-7"
                />
              </span>
            </span>
            u
            <span className="relative inline-block">
              mmy
              <span className="absolute -top-[-0.5rem] right-[0.3rem] sm:top-[0.6rem] sm:right-[0.6rem] md:top-[1rem] md:right-[0.8rem] lg:top-[1.5rem] lg:right-[1.2rem] xl:-top-[-2rem] xl:right-[1.3rem]">
                <img
                  src="/imgs/tabler_north-star.png"
                  alt=""
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-7 lg:h-7"
                />
              </span>
            </span>
            <span className="ml-2 w-[5rem] sm:w-[10rem] md:w-[14rem] lg:w-[18rem] xl:w-[18rem] h-auto">
              <img
                src="/imgs/yummy.png"
                className="w-full h-full object-contain"
                alt="yummy"
              />
            </span>
          </h1>

          {/* Home Meals Line */}
          <h1
            className="font-medium text-black flex items-center justify-center relative mt-[-0.2rem]
            text-[2rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] xl:text-[7rem] leading-none"
          >
            H
            <span className="relative inline-block">
              o
              <span className="absolute -right-[-0.15rem] top-[0.3rem] sm:top-[0.8rem] sm:right-[0.5rem] md:top-[1.2rem] md:right-[0.6rem] lg:top-[1.5rem] lg:right-[1rem] xl:top-[2rem] xl:right-[1rem]">
                <img
                  src="/imgs/tabler_north-star.png"
                  alt=""
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-7 lg:h-7"
                />
              </span>
            </span>
            me
            <span className="ml-2">M</span>e
            <span className="relative inline-block">
              als
              <span className="absolute -top-[-0.5rem] right-[-0.7rem] sm:top-[1.2rem] sm:-right-[1rem] md:top-[1.7rem] md:-right-[1.5rem] lg:top-[2.5rem] lg:-right-[1.5rem] xl:-top-[-2.5rem] xl:-right-[1.7rem]">
                <img
                  src="/imgs/tabler_north-star.png"
                  alt=""
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-7 lg:h-7"
                />
              </span>
            </span>
          </h1>
        </div>
        {/* SearchBar with responsiveness */}
        <div className="w-full px-4 mt-10 pb-10">
          <form className="w-full max-w-[32rem] sm:max-w-[28rem] md:max-w-[32rem] lg:max-w-[36rem] xl:max-w-[40rem] mx-auto">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <input
                type="search"
                id="default-search"
                className="block w-full px-4 py-3 sm:py-3 md:py-4 ps-10 text-sm sm:text-sm md:text-base text-gray-900 border border-[#006A5A] rounded-full bg-gray-50 focus:ring-[#006A5A] focus:border-[#006A5A] placeholder:text-[10px] sm:placeholder:text-[14px] md:placeholder:text-[16px]"
                placeholder="Search by location, food or cook"
                required
              />
              <button
                type="submit"
                className="text-[#E0F0C0] absolute end-[0.3rem] bottom-[0.3rem] sm:bottom-[0.3rem] sm:end-[0.3rem] md:bottom-[0.45rem] lg:bottom-[0.35rem] xl:bottom-[0.35rem] py-2 px-4 sm:py-2 sm:px-6 md:px-6 md:py-[0.6rem] lg:px-8 lg:py-[0.7rem] bg-[#006A5A] hover:bg-[#006a5ae5] hover:pointer-cursor focus:ring-4 focus:outline-none focus:ring-[#006A5A] font-medium rounded-full text-sm md:text-base hover:cursor-pointer"
              >
                Find Food
              </button>
            </div>
          </form>
        </div>

        <div className="mt-10 mb-2 flex justify-center items-center text-center">
          <p className="inline-block px-4 border-b-3 border-[#D5D5D5] pb-5 text-sm">
            From comforting new classics to bold new flavours, find your perfect
            plate, anytime, anywhere
          </p>
        </div>

        <div className="w-full flex flex-col sm:flex-row items-center justify-center xl:gap-[9rem] lg:gap-[9rem] md:gap-[9rem] sm:gap-[5rem] gap-[1rem] px-4 py-6">
          {/* Satisfied Customers */}
          <div className="flex items-center gap-2">
            <div className="flex -space-x-5">
              <img
                src="/imgs/user1.png"
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <img
                src="/imgs/user2.png"
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <img
                src="/imgs/user3.png"
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div className="w-10 h-10 sm:w-10 sm:h-10 rounded-full bg-red-600 text-white text-xs sm:text-sm font-semibold flex items-center justify-center">
                10K
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-sm sm:text-base">
                Satisfied Customers
              </span>
            </div>
          </div>

          {/* Famous Dishes */}
          <div className="flex items-center gap-2">
            <div className="flex -space-x-5">
              <img
                src="/imgs/food1.png"
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <img
                src="/imgs/food2.png"
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <img
                src="/imgs/food3.png"
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div className="w-10 h-10 sm:w-10 sm:h-10 rounded-full bg-red-600 text-white text-xs sm:text-sm font-semibold flex items-center justify-center">
                100+
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-sm sm:text-base">
                Famous Dishes
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
