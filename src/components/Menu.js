import React from "react";
import { images } from "../utils/demo_images";

const Menu = () => {
  return (
    <>
      <div className="container py-5">
        <div className="section-header relative text-center pt-28 pb-9">
          <div className="text-2xl tracking-[5px] text-[#DA9F5B] font-medium uppercase mb-2">
            Menu & Pricing
          </div>
          <div className="text-5xl font-bold mb-2 text-[#33211D]">
            Competitive Pricing
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 text-center md:text-left gap-12">
          <div>
            <div className="mb-12 font-bold text-[2.5rem] text-[#33211D]">
              Hot Coffee
            </div>
            <div className="flex justify-center items-center">
              <div className="relative">
                <img
                  src={images.menu1}
                  className="rounded-full h-full w-full"
                  alt=""
                />
                <div className="w-[45px] h-[45px] bg-[#DA9F5B] rounded-full absolute top-0 right-0 text-center flex justify-center items-center text-[#33211D]">$5</div>
              </div>
              <div className="flex justify-center items-center">
                <div>
                  <div className="flex px-4 items-center text-lg lg:text-2xl font-medium mb-2 font-roboto">
                    <div className="text-[#33211D]">Black Coffee</div>
                  </div>
                  <div className="px-4 text-[#555] text-left">
                    Sit lorem ipsum et diam elitr est dolor sed duo guberg sea
                    et et lorem dolor
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
