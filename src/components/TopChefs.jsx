import React from "react";

const allTopChefs = [
  { name: "Anna Watson", image: "/imgs/chef1.png" },
  { name: "Julia Child", image: "/imgs/chef2.png" },
  { name: "Gordon Ramsay", image: "/imgs/chef3.png" },
  { name: "Alfredo Bolognese", image: "/imgs/chef4.png" },
  { name: "Emeril Lagasse", image: "/imgs/chef5.png" },
  { name: "Wolfgang Puck", image: "/imgs/chef6.png" },
  { name: "Rachael Ray", image: "/imgs/chef7.png" },
  { name: "Ina Garten", image: "/imgs/chef8.png" },
];
const TopChefs = () => {
  const stagger = [
    "lg:mt-3",
    "lg:mt-30",
    "lg:mt-3",
    "lg:mt-30",
    "lg:mt-3",
    "lg:mt-30",
  ];
  return (
    <div>
      {/* Heading */}
      <div className="container mx-auto pt-10">
        <div className="flex items-center gap-2 md:gap-4 max-w-7xl mx-auto px-7">
          <h2 className="text-base md:text-xl font-medium text-black">
            Our Top Chefs
          </h2>
          <div className="w-8 md:w-20 h-px border-[#006A5A] border-b-3"></div>
        </div>
      </div>
      {/* Images of Chef */}
      <div className="flex justify-center items-center gap-10 flex-wrap pt-20 lg:pt-0">
        {allTopChefs.map((chef, index) => {
          return (
            <div
              key={index}
              className={`relative group transition-all duration-300 ${stagger[index]}`}
            >
              <img
                src={chef.image}
                alt={chef.name}
                className="w-full h-full object-cover overflow-hidden flash-dim-img"
              />

              <div className="absolute top-1/2 -right-8 -translate-y-1/2 origin-center rotate-270 opacity-0 group-hover:opacity-100 transition duration-300 text-white font-medium text-lg">
                {chef.name}
              </div>
            </div>
          );
        })}
      </div>
      <div className="relative flex justify-between items-center">
        <img
          src="../../imgs/hamburger.png"
          className="w-[2rem] h[2rem] sm:w-[10rem] sm:h-[10rem] overflow-hidden object-contain"
          alt="hambuger"
        />
        <button className="bg-[#006A5A] hover:cursor-pointer hover:bg-[#006a5acc] text-[#F2FaD3] px-10 py-2.5 sm:px-20 sm:py-5 rounded-full font-medium">
          Become a Cook
        </button>
        <img
          src="../../imgs/cake.png"
          className="w-[2rem] h[2rem] sm:w-[10rem] sm:h-[10rem] overflow-hidden object-contain"
          alt="cake"
        />
      </div>
    </div>
  );
};

export default TopChefs;
