import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { FaCartPlus } from "react-icons/fa";
function Cart() {
  const [activeCart, setActiveAcart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  console.log(cartItems);

  return (
    <>
      <div
        className={` overflow-y-scroll fixed z-20 right-0 w-full h-full bg-white top-20 lg:w-96 rounded-xl ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all`}
      >
        <div className="flex justify-between mt-3 mb-4 ml-4 text-xl font-bold">
          My Order
          <IoIosCloseCircle
            onClick={() => setActiveAcart(!activeCart)}
            className="mr-6 text-3xl cursor-pointer hover:text-red-500"
          />
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((food) => (
            <ItemCard
              key={food.id}
              id={food.id}
              name={food.name}
              img={food.img}
              price={food.price}
              rating={food.rating}
              qty={food.qty}
            />
          ))
        ) : (
          <h3 className="text-4xl text-center text-gray-300 mt-60">
            Cart is Empty
          </h3>
        )}

        <div className="absolute bottom-28">
          <div className="m-4 ml-8 text-sm font-bold">
            <h3 className="text-xl">Items:-</h3>
            <h3 className="text-xl">Total Amount:-</h3>
            <hr className="m-2 w-[18vw]" />
          </div>

          <button className=" sticky p-3 bg-green-500 lg:px-[130px] px-[150px] rounded-xl text-white text-2xl m-[2px] mr-1 lg:ml-3">
            Checkout
          </button>
        </div>
      </div>
      <div>
        <FaCartPlus
          onClick={() => setActiveAcart(!activeCart)}
          className="fixed p-3 text-5xl bg-white rounded-full cursor-pointer outline-zinc-100 right-5 bottom-10 lg:right-20 lg:p-6"
        />
      </div>
    </>
  );
}

export default Cart;
