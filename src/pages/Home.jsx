import React from "react";
import Navbar from "../components/Navbar";
import Category from "../components/Category";
import FoodItems from "../components/FoodItems";
import Cart from "../components/Cart";
function Home() {
  return (
    <>
      <div className="w-full h-full bg-gray-200">
        <Navbar />
        <Category />
        <FoodItems />
        <Cart />{" "}
      </div>
    </>
  );
}

export default Home;
