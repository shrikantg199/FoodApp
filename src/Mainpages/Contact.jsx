<div>
  import React from "react"; import {"{"} Input {"}"} from "@nextui-org/react";
  import Navbar from "../components/Navbar"; const Contact = () =&gt; {"{"}
  const variants = ["bordered"]; return (
  <div name="contact" classname="w-full h-screen    bg-white">
    <navbar>
      <div classname="flex flex-col justify-center h-full max-w-screen-lg mx-auto  ">
        <div classname="pb-8 ">
          <p classname=" text-4xl text-black font-bold  border-gray-500 text-center">
            Food Preferences
          </p>
          <p classname="py-3 text-black text-center">
            Tell us about your food preferences below
          </p>
        </div>
        <div classname="flex items-center justify-center">
          <form
            action="https://example.com/submit-food-preferences"
            method="POST"
            classname="flex flex-col w-full gap-2 md:w-1/2"
          >
            <div classname="flex flex-col w-full gap-4">
              {"{"}variants.map((variant) =&gt; (
              <div
                key="{variant}"
                classname="flex flex-wrap w-full gap-4 mb-6 md:flex-nowrap md:mb-0"
              >
                <input
                  type="text"
                  variant="{variant}"
                  label="Name"
                  classname="border-white"
                />
              </div>
              )){"}"}
            </div>
            <div classname="flex flex-col w-full">
              {"{"}variants.map((variant) =&gt; (
              <div
                key="{variant}"
                classname="flex flex-wrap w-full gap-4 mb-6 md:flex-nowrap md:mb-0"
              >
                <input
                  type="email"
                  variant="{variant}"
                  label="Email"
                  classname="border-white"
                />
              </div>
              )){"}"}
            </div>
            <div classname="flex flex-col w-full">
              {"{"}variants.map((variant) =&gt; (
              <div
                key="{variant}"
                classname="flex flex-wrap w-full gap-4 mb-6 md:flex-nowrap md:mb-0"
              >
                <input
                  type="text"
                  variant="{variant}"
                  label="Favorite Cuisine"
                  classname="border-white"
                />
              </div>
              )){"}"}
            </div>
            <textarea
              name="message"
              placeholder="Additional Comments"
              rows={10}
              classname="p-2 text-white bg-transparent border-2 rounded-xl focus:outline-none"
              defaultValue={""}
            />
            <button classname="flex items-center px-6 py-3 mx-auto my-8 text-white duration-300 rounded-md bg-gradient-to-b from-cyan-500 to-blue-500 hover:scale-110">
              Submit Preferences
            </button>
          </form>
        </div>
      </div>
    </navbar>
  </div>
  );
  {"}"}; export default Contact;
</div>;
