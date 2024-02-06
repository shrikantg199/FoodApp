import React from "react";
import { Input } from "@nextui-org/react";

const Contact = () => {
  const variants = ["bordered"];

  return (
    <div name="contact" className="w-full h-screen  text-white  bg-white">
      <div className="flex flex-col justify-center h-full max-w-screen-lg p-4 mx-auto mt-14 ">
        <div className="pb-8 ">
          <p className="inline text-4xl text-black font-bold border-b-4 border-gray-500">
            Food Preferences
          </p>
          <p className="py-6 text-black">
            Tell us about your food preferences below
          </p>
        </div>

        <div className="flex items-center justify-center">
          <form
            action="https://example.com/submit-food-preferences"
            method="POST"
            className="flex flex-col w-full gap-2 md:w-1/2"
          >
            <div className="flex flex-col w-full gap-4">
              {variants.map((variant) => (
                <div
                  key={variant}
                  className="flex flex-wrap w-full gap-4 mb-6 md:flex-nowrap md:mb-0"
                >
                  <Input
                    type="text"
                    variant={variant}
                    label="Name"
                    className="border-white"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col w-full">
              {variants.map((variant) => (
                <div
                  key={variant}
                  className="flex flex-wrap w-full gap-4 mb-6 md:flex-nowrap md:mb-0"
                >
                  <Input
                    type="email"
                    variant={variant}
                    label="Email"
                    className="border-white"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col w-full">
              {variants.map((variant) => (
                <div
                  key={variant}
                  className="flex flex-wrap w-full gap-4 mb-6 md:flex-nowrap md:mb-0"
                >
                  <Input
                    type="text"
                    variant={variant}
                    label="Favorite Cuisine"
                    className="border-white"
                  />
                </div>
              ))}
            </div>

            <textarea
              name="message"
              placeholder="Additional Comments or Dietary Restrictions"
              rows="10"
              className="p-2 text-white bg-transparent border-2 rounded-xl focus:outline-none"
            ></textarea>

            <button className="flex items-center px-6 py-3 mx-auto my-8 text-white duration-300 rounded-md bg-gradient-to-b from-cyan-500 to-blue-500 hover:scale-110">
              Submit Preferences
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
