import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto py-20">
      <div className="grid grid-cols-12 w-full gap-8 items-center">
        <div className="sm:col-span-7 col-span-12 xl:w-[70%]">
          <div className="flex items-center gap-2 md:gap-4 mx-auto px-6 xl:py-6 py-3">
            <h2 className="text-base md:text-xl font-medium text-black">
              About Us
            </h2>
            <div className="w-8 md:w-20 h-px border-[#006A5A] border-b-3"></div>
          </div>
          <p className="pl-6 text-sm md:text-base">
            <b>At MaclApp</b>, we believe that the best meals come from the
            heart — not a factory. We're a platform that connects passionate
            home cooks with food lovers craving real, homemade dishes. Whether
            you're ordering your favorite comfort food or turning your cooking
            skills into income, MaclApp brings communities closer through food.
            Our mission is simple: support local talent, celebrate cultural
            flavors, and deliver authentic meals made with care — straight to
            your doorstep.
          </p>
        </div>
        <div className="sm:col-span-5 col-span-12">
          <img
            src="../../imgs/AboutUsPhoto.png"
            alt="aboutUs"
            className="w-full h-full object-contain overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
