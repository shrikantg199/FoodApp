import React from "react";
import Navbar from "../components/Navbar";
import Category from "../components/Category";
import FoodItems from "../components/FoodItems";
import Cart from "../components/Cart";

import wallpaper from "../assets/wallpaper.png";
function Home() {
  return (
    <>
      <div className="w-screen h-full bg-gray-200">
        <Navbar />
        <img src={wallpaper} alt="" className=" w-screen h-[32%] " />
        <Category />
        <FoodItems />
        <Cart />{" "}
      </div>
    </>
  );
}

export default Home;
