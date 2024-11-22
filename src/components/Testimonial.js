import React from "react";
import Slider from "react-slick";
import { images } from "../utils/demo_images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      image: images.testimonial1,
      name: "Jessica",
      designation: "Engineer",
    },
    {
      id: 2,
      image: images.testimonial2,
      name: "Jane Smith",
      designation: "Doctor",
    },
    {
      id: 3,
      image: images.testimonial3,
      name: "Jennifer Wilson",
      designation: "Lawyer",
    },
    {
      id: 4,
      image: images.testimonial4,
      name: "Max Johnson",
      designation: "Businessman",
    },
  ];

  return (
    <div className="testimonial container py-5">
      <div className="section-header relative text-center pt-24 md:pt-28 pb-9">
        <div className="text-2xl tracking-[5px] text-[#DA9F5B] font-medium uppercase mb-2">
          Testimonial
        </div>
        <div className="text-5xl font-bold mb-2 text-[#33211D]">
          Our Client Says
        </div>
      </div>
      <Slider {...settings} className="cursor-pointer">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="p-4">
            <div className="flex justify-center lg:justify-start">
              <div>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 mx-auto mb-4"
                />
              </div>
              <div className="flex flex-col items-start ml-4">
                <div className="mt-2 mb-2 font-medium text-2xl text-[#33211D]">
                  {testimonial.name}
                </div>
                <div className="text-gray-500 italic">
                  {testimonial.designation}
                </div>
              </div>
            </div>
            <div className="font-monserrat text-[#555]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis officiis eligendi eum molestiae a odit quis minima
              dignissimos corrupti laboriosam.
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
