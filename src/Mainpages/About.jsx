import React from "react";
import photo from "../assets/foodapppic.jpeg";
import Navbar from "../components/Navbar";
const About = () => {
  return (
    <div>
      <Navbar />
      <div class="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
        <div class="w-full h-96 lg:w-[100vh] lg:h-[80vh]">
          <img
            class="h-full w-full object-cover"
            src={photo}
            alt="Winding mountain road"
          />
        </div>

        <div class="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-1/2 lg:left-0 lg:mt-20  xl:mt-24">
          <div class="flex flex-col p-8 md:px-8">
            <h2 class="text-2xl font-medium uppercase text-green-800 lg:text-4xl">
              Food App
            </h2>
            <p class="mt-4">
              Introducing our cutting-edge food delivery app, delivering
              culinary delights to your doorstep with just a tap. Experience a
              seamless journey from menu exploration to doorstep delivery, with
              an intuitive interface and real-time tracking. Our user-friendly
              app prioritizes convenience, offering secure payment options and
              swift deliveries. Elevate your dining experience with our app –
              where flavor meets technology, creating a gastronomic adventure at
              your fingertips. Savor the convenience, savor the moment.
            </p>
            <div class="mt-8">
              <a
                href="/"
                class="inline-block rounded-lg w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48"
              >
                Order Food
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
