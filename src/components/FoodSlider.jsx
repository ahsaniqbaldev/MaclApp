import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { EmptyArrow, NextArrow } from "./NextArrow";

const foodItems = [
  {
    title: "Potato Sticks",
    description: "A creamy, comforting pasta tossed in rich herbs and spices",
    image: "../../imgs/Card-1.png",
    rating: 4.3,
  },
  {
    title: "Chicken Burger",
    description: "A creamy, comforting pasta tossed in rich herbs and spices",
    image: "../../imgs/Card-2.png",
    rating: 4.9,
  },
  {
    title: "Pasta Delicious",
    description: "A creamy, comforting pasta tossed in rich herbs and spices",
    image: "../../imgs/Card-3.png",
    rating: 4.2,
  },
  {
    title: "European Pasta",
    description: "A creamy, comforting pasta tossed in rich herbs and spices",
    image: "../../imgs/Card-4.png",
    rating: 4.0,
  },
];
const FoodSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <EmptyArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center gap-2 mt-10 pb-10 pl-3">
        <h2 className="text-base md:text-xl font-medium text-black">
          Food of your Taste
        </h2>
        <div className="w-8 md:w-20 h-px border-[#006A5A] border-b-3"></div>
      </div>
      <Slider {...settings}>
        {foodItems.map((item, index) => {
          return (
            <div key={index} className="p-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[235px] object-cover rounded-2xl"
                />
                <div className="p-2 space-y-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-lg">{item.title}</h3>
                    <div className="text-[#FADC00] font-semibold">
                      ★{" "}
                      <span className="text-black font-medium">
                        {item.rating}
                      </span>
                    </div>
                  </div>
                  <p className="text-black text-[12px] w-50">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center pt-10">
                    <div className="flex items-center space-x-2">
                      <img
                        src="../../imgs/chefAlwin.png"
                        alt="chef"
                        className="rounded-full w-6 h-6"
                      />
                      <span className="font-semibold text-[12px] text-black">
                        Chef Andres Elvin
                      </span>
                    </div>
                    <button className="bg-[#006A5A] text-[#FAf2D3] text-sm font-medium px-3 py-2 rounded-full hover:bg-[#006a5abb] hover:cursor-pointer transition">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default FoodSlider;
