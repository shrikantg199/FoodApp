import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import ItemCard from "./ItemCard";
function Cart() {
  return (
    <>
      <div className="fixed right-0 w-full h-full bg-white top-20 lg:w-96 rounded-xl">
        <div className="flex justify-between mt-3 mb-4 ml-4 text-xl font-bold">
          My Order
          <IoIosCloseCircle className="mr-6 text-3xl cursor-pointer hover:text-red-500" />
        </div>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <div className="absolute bottom-28">
          <div className="m-4 ml-8 text-sm font-bold">
            <h3>Items:-</h3>
            <h3>Total Amount:-</h3>
            <hr className="m-2 w-[18vw]" />
          </div>

          <button className="p-3 bg-green-500 lg:px-[130px] px-[150px] rounded-xl text-white text-2xl m-[2px] mr-1 lg:ml-3">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
