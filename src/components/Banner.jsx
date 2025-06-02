const Banner = ({ BannerTitle, showSearch, TitleStyle }) => {
  return (
    <>
      <div className="pt-[5rem] w-full h-full py-[126px] bg-no-repeat bg-[length:100%] bg-[url('/imgs/bbq-banner.png')] bg-cover">
        <div className="container mx-auto">
          <div className="mt-10 mb-2 flex justify-center items-center text-center">
            <p
              className={`inline-block px-4 pb-5 text-white text-md ${TitleStyle}`}
            >
              {BannerTitle}
            </p>
          </div>
          {showSearch && (
            <div className="w-full px-4 pb-10">
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
          )}
          {/* <div className="w-full px-4 pb-10">
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
                  className="block w-full px-4 py-3 sm:py-3 md:py-4 ps-10 text-sm sm:text-sm md:text-base text-gray-900 border border-[#006A5A] rounded-full bg-gray-50 focus:ring-[#006A5A] focus:border-[#006A5A] dark:bg-gray-700 dark:border-[#006A5A] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#006A5A] dark:focus:border-[#006A5A] placeholder:text-[10px] sm:placeholder:text-[14px] md:placeholder:text-[16px] "
                  placeholder="Search by location, food or cook"
                  required
                />
                <button
                  type="submit"
                  className="text-[#E0F0C0] absolute end-[0.3rem] bottom-[0.3rem] sm:bottom-[0.3rem] sm:end-[0.3rem] md:bottom-[0.45rem] lg:bottom-[0.35rem] xl:bottom-[0.35rem] py-2 px-4 sm:py-2 sm:px-6 md:px-6 md:py-[0.6rem] lg:px-8 lg:py-[0.7rem] bg-[#006A5A] hover:bg-[#006a5ae5] hover:pointer-cursor focus:ring-4 focus:outline-none focus:ring-[#006A5A] font-medium rounded-full text-sm md:text-base dark:bg-[#006A5A] dark:hover:bg-[#006A5A] dark:focus:ring-[#006A5A]"
                >
                  Find Food
                </button>
              </div>
            </form>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Banner;
