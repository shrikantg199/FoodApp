import { useEffect, useState } from "react";
import FoodData from "./FoodData";
import { setCategory } from "../redux/slices/CategorySlice";
import { useDispatch } from "react-redux";

function Category() {
  const [categories, setCategories] = useState([]);
  const ListuniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];

    setCategories(uniqueCategories);
    console.log(uniqueCategories);
    // Example output: ["Pizza", "Ice cream", "Healthy Foods"]
  };

  useEffect(() => {
    ListuniqueCategories();
  }, []);

  const dispatch = useDispatch();

  return (
    <div className="flex gap-4 justify-center mt-6 mb-12 overflow-x-scroll lg:overflow-x-hidden scroll-smooth scroll ">
      <button
        onClick={() => dispatch(setCategory("All"))}
        className="px-3 py-2 text-white font-bold rounded-lg bg-[#fc8019] "
      >
        All
      </button>
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => dispatch(setCategory(category))}
          className="bg-[#fc8019] px-4 rounded-lg lg:py-1 text-lg text-white font-medium"
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Category;
