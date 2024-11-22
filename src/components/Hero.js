import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "../utils/demo_images";

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-5 md:left-10 top-1/2 transform -translate-y-1/2 z-20 text-xl md:text-3xl font-bold text-white p-3 rounded-full"
    onClick={onClick}
    aria-label="Previous Slide"
  >
    <i className="fas fa-chevron-left"></i>
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-5 md:right-10 top-1/2 transform -translate-y-1/2 z-20 text-xl md:text-3xl font-bold text-white p-3 rounded-full"
    onClick={onClick}
    aria-label="Next Slide"
  >
    <i className="fas fa-chevron-right"></i>
  </button>
);

const Hero = () => {
  const slides = [
    {
      image: images.hero1,
      text: {
        subtitle: "We Have Been Serving",
        title: "Coffee",
        footer: "*Since 1950*",
      },
    },
    {
      image: images.hero2,
      text: {
        subtitle: "Experience The Best",
        title: "Brew",
        footer: "*Crafted With Love*",
      },
    },
  ];

  const settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="hero slider-container w-full overlay-bottom relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slider-container-elements relative w-full">
            <div>
              <img
                src={slide.image}
                className="w-full h-[60vh] md:h-[75vh] lg:h-full object-cover"
                alt={`Slide ${index + 1}`}
              />
            </div>
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center space-y-3 px-4">
              <div className="text-[#DA9F5B] font-medium text-lg md:text-2xl">
                {slide.text.subtitle}
              </div>
              <div className="uppercase text-white text-5xl md:text-7xl lg:text-9xl font-bold leading-tight">
                {slide.text.title}
              </div>
              <div className="uppercase text-lg md:text-xl lg:text-2xl text-white">
                {slide.text.footer}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
