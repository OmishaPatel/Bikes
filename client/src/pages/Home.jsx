import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
export const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Hero />
      <Slider />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};
