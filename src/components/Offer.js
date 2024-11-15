import React from "react";
import { images } from "../utils/demo_images";

const Offer = () => {
  return (
    <div
      className="overlay-both relative py-16 lg:py-24"
      style={{
        backgroundImage: `linear-gradient(rgba(51, 33, 29, 0.9), rgba(51, 33, 29, 0.9)), url(${images.background})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 text-center font-roboto">
        <div className="text-[#DA9F5B] text-5xl md:text-6xl lg:text-7xl font-bold mt-4">
          50% OFF
        </div>
        <div className="text-white font-bold text-xl md:text-2xl lg:text-[2.5rem] mb-4">
          Sunday Special Offer
        </div>
        <div className="text-white font-normal text-base md:text-lg lg:text-2xl pb-4 mb-3 lg:mb-6">
          Only for Sunday from 1st Jan to 30th Jan 2045
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0 h-auto md:h-[60px]">
          <input
            type="text"
            placeholder="Your Email"
            className="w-full md:w-auto border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DA9F5B] px-4 md:px-6 py-2 md:h-full"
          />
          <button className="bg-[#DA9F5B] text-[#212529] hover:bg-[#e78e28] font-bold text-base px-4 md:px-6 py-2 md:h-full transition-colors duration-150 ease-in-out">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
