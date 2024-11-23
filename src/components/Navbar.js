import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 bg-transparent z-50 px-6 py-10 flex justify-between items-center font-monserrat">
      <div className="font-bold text-2xl lg:text-[3.5rem] text-white">
        KOFFEE
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        {[
          "Hero",
          "About",
          "Service",
          "Menu",
          "Reservation",
          "Testimonial",
          "Contact",
        ].map((item) => (
          <ScrollLink
            key={item}
            to={item.toLowerCase()}
            smooth={true}
            duration={500}
            spy={true}
            activeClass={item === "Hero" ? "text-[#DA9F5B]" : ""}
            className={`cursor-pointer font-bold ${
              item === "Hero" ? "text-[#DA9F5B]" : "text-white"
            } hover:text-[#DA9F5B]`}
          >
            {item}
          </ScrollLink>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-white"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.75h16.5m-16.5 6.5h16.5m-16.5 6.5h16.5"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black text-white p-6 md:hidden">
          <div className="flex flex-col space-y-6">
            {[
              "Hero",
              "About",
              "Service",
              "Menu",
              "Reservation",
              "Testimonial",
              "Contact",
            ].map((item) => (
              <ScrollLink
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                spy={true}
                activeClass={item === "Hero" ? "text-[#DA9F5B]" : ""}
                onClick={() => setIsMenuOpen(false)}
                className={`cursor-pointer ${
                  item === "Hero" ? "text-[#DA9F5B]" : "text-white"
                } hover:underline`}
              >
                {item}
              </ScrollLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
