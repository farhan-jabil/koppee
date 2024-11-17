import React from "react";
import { images } from "../utils/demo_images";

const Contact = () => {
  return (
    <>
      <div
        className="text-white font-monserrat overlay-top relative pt-12"
        style={{
          backgroundImage: `linear-gradient(rgba(51, 33, 29, 0.9), rgba(51, 33, 29, 0.9)), url(${images.background})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-6 md:p-12 text-center md:text-left space-y-5 md:space-y-0 gap-y-10">
          <div className="px-[15px]">
            <div className="uppercase font-roboto tracking-[3px] font-medium mb-5 text-lg md:text-2xl">
              Get In Touch
            </div>
            <div className="flex flex-col items-center md:items-start space-y-4">
              <div className="flex items-center space-x-2">
                <i className="fa-solid fa-location-dot"></i>
                <span>123 Street, New York, USA</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fa-solid fa-phone"></i>
                <span>+012 345 67890</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fa-solid fa-envelope"></i>
                <span>info@example.com</span>
              </div>
            </div>
          </div>

          <div className="px-[15px]">
            <div className="uppercase font-roboto tracking-[3px] font-medium mb-5 text-lg md:text-2xl">
              Follow us
            </div>
            <div className="mb-4">
              Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum
            </div>
            <div className="flex space-x-2 justify-center md:justify-start">
              {["twitter", "facebook-f", "linkedin", "instagram"].map(
                (icon, index) => (
                  <div
                    key={index}
                    className="border border-white rounded-[4px] h-10 w-10 md:h-11 md:w-11 flex justify-center items-center transition-all duration-300 hover:bg-white hover:text-black cursor-pointer"
                  >
                    <i
                      className={`fa-brands fa-${icon} text-lg md:text-xl`}
                    ></i>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="px-[15px]">
            <div className="uppercase font-roboto tracking-[3px] font-medium mb-5 text-lg md:text-2xl">
              Open Hours
            </div>
            <div className="space-y-4 uppercase font-roboto text-sm md:text-base">
              <div>
                <div>Monday - Friday</div>
                <div>8.00AM - 8.00PM</div>
              </div>
              <div>
                <div>Saturday - Sunday</div>
                <div>2.00AM - 8.00PM</div>
              </div>
            </div>
          </div>

          <div className="px-[15px]">
            <div className="uppercase font-roboto tracking-[3px] font-medium mb-5 text-2xl">
              Newsletter
            </div>
            <div>
              <div className="mb-4">
                Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0 h-auto md:h-[60px] text-[#212529]">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="w-full md:w-auto border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DA9F5B] px-4 md:px-6 py-2 md:h-full"
                />
                <button className="bg-[#DA9F5B] text-[#212529] hover:bg-[#e78e28] font-bold text-base px-4 py-2 md:h-full transition-colors duration-150 ease-in-out">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-[1px] border-[rgba(255, 255, 255, .1)] mt-6"></div>

        {/* Footer */}
        <div className="py-6 text-center text-sm md:text-base">
          <div>
            Copyright © <span className="text-[#DA9F5B]">Domain</span>. All
            Rights Reserved.
          </div>
          <div>
            Designed by{" "}
            <span className="text-[#DA9F5B]">Farhan Hassan Jabil</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
