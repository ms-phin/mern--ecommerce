import React from "react";
import Navabar from "../components/Navabar";
import Feed from "../components/Feed";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Fotter from "../components/Fotter";

const Home = () => {
  return (
    <div>
      <Navabar />
      <Feed />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Fotter />
    </div>
  );
};

export default Home;
