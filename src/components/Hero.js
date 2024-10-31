import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "../utils/demo_images";

// const PrevArrow = ({ onClick }) => {
//   return (
//     <button
//       className="absolute text-2xl left-20 top-1/2 transform -translate-y-1/2 z-10 text-white rounded-full p-2"
//       onClick={onClick}
//     >
//       <i class="fa-solid fa-chevron-left"></i>
//     </button>
//   );
// };

// const NextArrow = ({ onClick }) => {
//   return (
//     <button
//       className="absolute text-2xl right-20 top-1/2 transform -translate-y-1/2 z-10 text-white rounded-full p-2"
//       onClick={onClick}
//     >
//       <i class="fa-solid fa-chevron-right"></i>
//     </button>
//   );
// };

const Hero = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />, 
  };

  return (
    <div className="slider-container w-full overflow-hidden relative">
      <Slider {...settings}>
        <div className="w-full">
          <img src={images.hero1} className="w-full" alt="Hero 1" />
        </div>
        <div className="w-full">
          <img src={images.hero2} className="w-full" alt="Hero 2" />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
