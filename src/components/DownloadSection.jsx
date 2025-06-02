import React from "react";

const DownloadSection = () => {
  return (
    <div className="sm:h-[440px] mt-16">
      <div className="container flex items-center rounded-xl mx-auto bg-[#F2FAD3] p-5 sm:h-[306px]">
        <div className="grid grid-cols-12 w-full gap-8">
          <div className="sm:col-span-7 col-span-12 sm:text-start text-center w-[90%] sm:w-full">
            <h1 className="download-head text-2xl sm:text-3xl font-semibold text-black mb-1">
              Download our App Now
            </h1>
            <h2 className="text-xl font-semibold text-black mb-2">
              Crave it. Tap it. Enjoy it.
            </h2>
            <p className="text-[2px] sm:text-sm text-gray-700 mb-3">
              Order fresh, home-cooked meals anytime — right from your phone.
              Cook, order, or deliver with ease.
            </p>
            <div className="flex gap-2 sm:justify-start justify-center">
              <a href="/">
                <img
                  className="h-[32px]"
                  src="/imgs/Android.png"
                  alt="android"
                />
              </a>
              <a href="/">
                <img className="h-[32px]" src="/imgs/Apple.png" alt="apple" />
              </a>
            </div>
          </div>
          <div className="sm:col-span-5 col-span-12 relative w-[90%] sm:w-full">
            <img
              src="/imgs/phones.png"
              alt="App Preview"
              className="sm:absolute sm:top-[-167px] lg:top-[-180px] w-[90%] sm:w-full sm:h-[506px] h-[300px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
