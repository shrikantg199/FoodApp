function Category() {
  return (
    <div className="flex gap-4 mx-4 mt-6 mb-12 overflow-x-scroll lg:m-8 lg:overflow-x-hidden scroll-smooth scroll ">
      <button className="bg-[#fc8019] px-4 rounded-lg  lg: py-1  text-lg text-white font-medium ">
        All
      </button>
      <button className="bg-[#fc8019] px-4  lg: py-1 rounded-lg text-md text-white font-medium">
        Pizza
      </button>
      <button className="bg-[#fc8019] px-4 rounded-lg  lg: py-1  text-md text-white font-medium ">
        Healthy Foods
      </button>
      <button className="bg-[#fc8019] px-4 rounded-lg  lg: py-1  text-md text-white font-medium">
        Burger
      </button>
      <button className="bg-[#fc8019] px-4 rounded-lg  lg: py-1  text-md text-white font-medium">
        Ice Cream
      </button>
      <button className="bg-[#fc8019] px-4 rounded-lg  lg: py-1  text-md text-white font-medium">
        Coffee
      </button>
    </div>
  );
}

export default Category;
