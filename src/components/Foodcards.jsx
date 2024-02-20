import { TiStarFullOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";
function Foodcards({
  img,
  rating,
  category,
  desc,
  price,
  id,
  name,
  handleToast,
}) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, img, price, rating, qty: 1 }));
    handleToast(name);
  };
  return (
    <>
      <div className=" justify-center w-40 lg:h-full h-auto lg:w-[250px] rounded-3xl bg-white mb-3 p-2 lg:p-5 flex   flex-wrap">
        <img
          src={img}
          alt=""
          className="lg:w-screen lg:h-[130px] object-cover hover:scale-110 cursor-grab transition-all duration-500 ease-in-out mb-4"
        />
        <div className="flex justify-between  gap-4 font-semibold">
          <h2>{name}..</h2>
          <span className="text-green-600">₹{price}</span>
        </div>
        <p>{desc.slice(0, 40)}...</p>

        <div className="flex justify-center mt-2 font-semibold">
          <span>
            <TiStarFullOutline className="text-xl text-yellow-300" />
          </span>
          {rating}
          <button
            onClick={handleAddToCart}
            className="lg:w-20 h-auto lg:h-10 w-20 lg: lg:py-1 ml-6 lg:ml-12 text-sm text-white bg-green-500 rounded-lg"
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
