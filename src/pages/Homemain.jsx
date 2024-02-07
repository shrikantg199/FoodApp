import React from "react";
import img from "../assets/img.png";
function Homemain() {
  return (
    <div>
      <div class="sm:flex sm:justify-between sm:px-8 md:px-16 lg:px-32">
        <div class="w-full sm:w-2/3 mb-8 sm:mb-0 ">
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium px-4 sm:px-0 py-8 sm:py-20 lg:w-[50%]">
            The <span class="text-red-500">taste</span> of tradition's with a
            <span class="text-yellow-400/80"> modern twist...</span>
          </h1>
          <h3 class="px-4 sm:px-0 py-4 sm:py-10 text-lg sm:text-2xl md:text-3xl lg:w-[50%] lg:mb-52">
            Food delivery app that's convenient and simple, for a restaurant
            that focuses on high quality with affordable prices..
          </h3>
        </div>
        <div class="sm:w-1/3">
          <img
            src={img}
            alt=""
            class="mx-auto w-[400px] h-[400px] sm:m-0 rounded-full lg:w-[80%] lg:h-[60%] lg:mt-32"
          />
        </div>
      </div>
    </div>
  );
}

export default Homemain;
