import React from "react";
import { HeroSection } from "../../components/HeroSection";
import HowItWork from "../../components/HowItWork";
import FoodSlider from "../../components/FoodSlider";
import Testimonial from "../../components/Testimonial";
import TopChefs from "../../components/TopChefs";
import DownloadSection from "../../components/DownloadSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <HowItWork />
      <FoodSlider />
      <Testimonial />
      <TopChefs />
      <DownloadSection />
    </>
  );
};

export default Home;
