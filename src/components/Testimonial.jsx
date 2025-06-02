import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    rating: "★★★★",
    opinion:
      "I love the variety and the home-cooked taste — it feels like a warm hug in every bite!",
    name: "Fatima Ahmed",
    dp: "../../imgs/testimonialDP.png",
  },
  {
    rating: "★★★★",
    opinion:
      "I love the variety and the home-cooked taste — it feels like a warm hug in every bite!",
    name: "Fatima Ahmed",
    dp: "../../imgs/testimonialDP.png",
  },
  {
    rating: "★★★★",
    opinion:
      "I love the variety and the home-cooked taste — it feels like a warm hug in every bite!",
    name: "Fatima Ahmed",
    dp: "../../imgs/testimonialDP.png",
  },
  {
    rating: "★★★★",
    opinion:
      "I love the variety and the home-cooked taste — it feels like a warm hug in every bite!",
    name: "Fatima Ahmed",
    dp: "../../imgs/testimonialDP.png",
  },
];

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };
  return (
    <div className="w-full h-full bg-[url('../../imgs/TestimonialBack.png')] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 py-15">
        <div className="flex items-center gap-2 pb-10 pl-3">
          <h2 className="text-base md:text-xl font-medium text-black">
            Testimonials
          </h2>
          <div className="w-8 md:w-20 h-px border-[#006A5A] border-b-3"></div>
        </div>
        <Slider {...settings}>
          {reviews.map((item, index) => {
            return (
              <div key={index} className="p-2">
                <div className="h-40 border border-[#006A5A] bg-[#FCFEF2] rounded-lg shadow-md overflow-hidden p-2">
                  <div className="p-2 space-y-1">
                    <div className="flex justify-between items-center">
                      <div className="text-[#FADC00] text-2xl font-semibold">
                        {item.rating}
                      </div>
                    </div>
                    <p className="text-black text-[12px] w-full lg:w-70">
                      {item.opinion}
                    </p>
                    <div className="flex justify-between items-center pt-3">
                      <div className="flex items-center space-x-2">
                        <img
                          src={item.dp}
                          alt="User Reviews"
                          className="rounded-full w-6 h-6"
                        />
                        <span className="font-medium text-[12px] text-black">
                          {item.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
