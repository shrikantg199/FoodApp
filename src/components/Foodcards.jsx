import { TiStarFullOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";
function Foodcards({ img, rating, category, desc, price, id, name }) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, img, price, rating, qty: 1 }));
  };
  return (
    <>
      <div className="mx-4 w-[250px] rounded-3xl bg-white p-5 flex  mb-8 flex-col">
        <img
          src={img}
          alt=""
          className="w-full h-[130px] object-cover hover:scale-110 cursor-grab transition-all duration-500 ease-in-out mb-4"
        />
        <div className="flex justify-between font-semibold">
          <h2>{name}</h2>
          <span className="text-green-600">₹{price}</span>
        </div>
        <p>{desc.slice(0, 50)}...</p>

        <div className="flex justify-center mt-2 font-semibold">
          <span>
            <TiStarFullOutline className="text-xl text-yellow-300" />
          </span>
          {rating}
          <button
            onClick={handleAddToCart}
            className="px-2 py-1 ml-12 text-white bg-green-500 rounded-lg"
          >
            {" "}
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Foodcards;
