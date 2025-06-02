import React from "react";
import { Routes, Route, BrowserRouter } from "react-router";
import Home from "../../pages/Home/Home";
// import OurMenu from "../../pages/OurMenu/OurMenu";
import HowItWork from "../../pages/HowItWork/HowItWork";
import BecomeACook from "../../pages/BecomeACook/BecomeACook";
import FindAMeal from "../../pages/FindAMeal/FindAMeal";
import Faq from "../../pages/Faq/Faq";

import { Navbar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { ScrollToTop } from "../../components/ScrollToTop";
import AppWrapper from "../../../UseLoader/AppWrapper";
import OrderDetails from "../../pages/OrderDetails/OrderDetails";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <AppWrapper>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-menu" element={<FindAMeal />} />
            <Route path="/how-it-work" element={<HowItWork />} />
            <Route path="/become-a-chef" element={<BecomeACook />} />
            {/* <Route path="/find-meal" element={<FindAMeal/>} /> */}
            <Route path="/faq" element={<Faq />} />
            <Route path="/order-details" element={<OrderDetails />} />
          </Routes>
          <Footer />
        </AppWrapper>
      </BrowserRouter>
    </>
  );
};

export default Routers;
