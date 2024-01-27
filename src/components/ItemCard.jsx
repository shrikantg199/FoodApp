import React from "react";
import { MdDeleteForever } from "react-icons/md";
function ItemCard() {
  return (
    <>
      <div className="flex p-3 m-4 mt-5 shadow-md rounded-xl ">
        <MdDeleteForever className="absolute cursor-pointer right-10" />
        <img
          src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
          alt=""
          className="w-[80px] h-[60px]"
        />
        <div className="leading-5 ">
          <h3 className="font-bold">Onion pizza</h3>

          <div className="flex justify-between ">
            <span className="mt-2 font-normal text-green-500">₹200</span>

            <div className="absolute flex items-center justify-center gap-2 mt-2 right-7">
              <button className="p-[2px] border-solid border-black border-1 rounded-md px-2 hover:bg-green-500 hover:text-white">
                +
              </button>
              <span className="text-xl text-black">1</span>
              <button className="p-[2px] border-solid border-black border-1 rounded-md px-2 hover:bg-green-500 hover:text-white">
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCard;
