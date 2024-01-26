function Category() {
  return (
    <div className="flex gap-4 mx-4 mt-6 mb-12 overflow-x-scroll lg:m-20 lg:overflow-x-hidden scroll-smooth scroll ">
      <button className="bg-[#fc8019] px-4 rounded-lg py-1  text-lg text-white font-medium ">
        All
      </button>
      <button className="bg-[#fc8019] px-4 py-1 rounded-lg text-md text-white font-medium">
        Lunch
      </button>
      <button className="bg-[#fc8019] px-4 rounded-lg py-1  text-md text-white font-medium ">
        Breakfast
      </button>
      <button className="bg-[#fc8019] px-4 rounded-lg py-1  text-md text-white font-medium">
        Dinner
      </button>
      <button className="bg-[#fc8019] px-4 rounded-lg py-1  text-md text-white font-medium">
        Dinner
      </button>
    </div>
  );
}

export default Category;
