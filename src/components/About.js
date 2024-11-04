import React from "react";
import { images } from "../utils/demo_images";

const About = () => {
  return (
    <>
      <div className="container py-5">
        <div className="section-header relative text-center pt-28 pb-9">
          <div className="text-2xl tracking-[5px] text-[#DA9F5B] font-medium uppercase mb-2">About Us</div>
          <div className="text-5xl font-bold mb-2 text-[#33211D] ">Serving Since 1950</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center md:text-left">
          <div className="px-4 py-6 lg:py-11 space-y-4">
            <div className="text-4xl font-bold">Our Story</div>
            <div className="text-xl font-normal font-roboto">
              Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet
              sed vero dolor sea
            </div>
            <div className="font-montserrat text-[#555]">
              Takimata sed vero vero no sit sed, justo clita duo no duo amet et,
              nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet
              no. Est nonumy sed labore eirmod sit magna Erat at est justo sit
              ut. Labor diam sed ipsum et eirmod
            </div>
            <div>
              <button
                type="button"
                className="text-white bg-[#33211D] hover:bg-[#33211D] focus:ring-4 focus:ring-[#33211D] font-medium text-lg px-5 py-2.5 me-2 mb-2 dark:bg-[#33211D] dark:hover:bg-[#33211D] focus:outline-none dark:focus:ring-[#33211D]"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="md:hidden lg:block">
            <div className="h-full w-full">
              <img
                src={images.about}
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
          </div>

          <div className="px-4 py-6 lg:py-11 space-y-4">
            <div className="mb-4 text-4xl font-bold">Our Vision</div>
            <div className="font-montserrat text-[#555]">
              Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
              dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
              Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
              dolor
            </div>
            <div className="text-xl">
              <div className="flex items-center">
                <i className="fa-solid fa-check mr-4 text-[#DA9F5B] font-black text-2xl"></i>
                <span>Lorem ipsum dolor sit amet</span>
              </div>
              <div className="flex items-center">
                <i className="fa-solid fa-check mr-4 text-[#DA9F5B] font-black text-2xl"></i>
                <span>Lorem ipsum dolor sit amet</span>
              </div>
              <div className="flex items-center">
                <i className="fa-solid fa-check mr-4 text-[#DA9F5B] font-black text-2xl"></i>
                <span>Lorem ipsum dolor sit amet</span>
              </div>
            </div>
            <div>
              <button
                type="button"
                className="text-black bg-[#DA9F5B] hover:bg-[#DA9F5B] focus:ring-4 focus:ring-[#DA9F5B] font-medium text-lg px-5 py-2.5 me-2 mb-2 dark:bg-[#DA9F5B] dark:hover:bg-[#DA9F5B] focus:outline-none dark:focus:ring-[#DA9F5B]"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
