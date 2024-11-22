import React from "react";
import { images } from "../utils/demo_images";

const Services = () => {
  return (
    <>
      <div className="service container py-5">
        <div className="section-header relative text-center pt-24 md:pt-28 pb-9">
          <div className="text-2xl tracking-[5px] text-[#DA9F5B] font-medium uppercase mb-2">
            Our Service
          </div>
          <div className="text-5xl font-bold mb-2 text-[#33211D]">
            Fresh & Organic Beans
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 text-center md:text-left gap-12">
          <div className="flex">
            <div className="">
              <img src={images.service1} alt="" />
            </div>
            <div className="flex justify-center items-center">
              <div>
                <div className="flex px-4 items-center text-lg lg:text-2xl font-medium mb-2 font-roboto">
                  <div className="mr-4 w-11 h-11 bg-[#DA9F5B] flex justify-center items-center rounded-full">
                    <i className="fa-solid fa-truck text-xl text-[#33211D]"></i>
                  </div>
                  <div className="text-[#33211D]">Fastest Door Delivery</div>
                </div>
                <div className="px-4 text-[#555] text-left">
                  Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et
                  et lorem dolor sed est sit invidunt, dolore tempor diam ipsum
                  takima erat tempor
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="">
              <img src={images.service2} alt="" />
            </div>
            <div className="flex justify-center items-center">
              <div>
                <div className="flex px-4 items-center text-lg lg:text-2xl font-medium mb-2 font-roboto">
                  <div className="mr-4 w-11 h-11 bg-[#DA9F5B] flex justify-center items-center rounded-full">
                    <i className="fa-solid fa-coffee text-xl text-[#33211D]"></i>
                  </div>
                  <div className="text-[#33211D]">Fresh Coffee Beans</div>
                </div>
                <div className="px-4 text-[#555] text-left">
                  Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et
                  et lorem dolor sed est sit invidunt, dolore tempor diam ipsum
                  takima erat tempor
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="">
              <img src={images.service3} alt="" />
            </div>
            <div className="flex justify-center items-center">
              <div>
                <div className="flex px-4 items-center text-lg lg:text-2xl font-medium mb-2 font-roboto">
                  <div className="mr-4 w-11 h-11 bg-[#DA9F5B] flex justify-center items-center rounded-full">
                    <i className="fa-solid fa-award text-xl text-[#33211D]"></i>
                  </div>
                  <div className="text-[#33211D]">Best Quality Coffee</div>
                </div>
                <div className="px-4 text-[#555] text-left">
                  Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et
                  et lorem dolor sed est sit invidunt, dolore tempor diam ipsum
                  takima erat tempor
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="">
              <img src={images.service4} alt="" />
            </div>
            <div className="flex justify-center items-center">
              <div>
                <div className="flex px-4 items-center text-lg lg:text-2xl font-medium mb-2 font-roboto">
                  <div className="mr-4 w-11 h-11 bg-[#DA9F5B] flex justify-center items-center rounded-full">
                    <i className="fa-solid fa-table text-xl text-[#33211D]"></i>
                  </div>
                  <div className="text-[#33211D]">Online Table Booking</div>
                </div>
                <div className="px-4 text-[#555] text-left">
                  Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et
                  et lorem dolor sed est sit invidunt, dolore tempor diam ipsum
                  takima erat tempor
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
