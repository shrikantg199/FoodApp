import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { incrementQTY, removeFromCart } from "../redux/slices/CartSlice";
import { decrementQTY } from "../redux/slices/CartSlice";
function ItemCard({ id, img, name, price, rating, qty }) {
  const dispatch = useDispatch();
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ id, img, name, price, rating, qty }));
  };

  return (
    <>
      <div className="flex p-3 m-4 mt-5 shadow-md rounded-xl ">
        <MdDeleteForever
          className="absolute cursor-pointer right-10"
          onClick={handleRemoveFromCart}
        />
        <img src={img} alt="" className="w-[80px] h-[60px]" />
        <div className="leading-5 ">
          <h3 className="font-bold">{name}</h3>

          <div className="flex justify-between ">
            <span className="mt-2 font-normal text-green-500">₹{price}</span>

            <div className="absolute flex items-center justify-center gap-2 mt-2 right-7">
              <button
                onClick={() =>
                  qty > 1 ? dispatch(decrementQTY({ id })) : (qty = 0)
                }
                className="p-[2px] border-solid border-black border-1 rounded-md px-2 hover:bg-green-500 hover:text-white"
              >
                -
              </button>
              <span className="text-xl text-black">{qty}</span>
              <button
                onClick={() => dispatch(incrementQTY({ id }))}
                className="p-[2px] border-solid border-black border-1 rounded-md px-2 hover:bg-green-500 hover:text-white"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCard;
