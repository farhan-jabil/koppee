import React, { useState } from "react";
import { images } from "../utils/demo_images";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    person: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email.includes("@")) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.date) {
      newErrors.date = "Please select a date.";
    }
    if (!formData.time) {
      newErrors.time = "Please select a time.";
    }
    if (!formData.person || formData.person <= 0) {
      newErrors.person = "Please enter a valid number of persons.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Reservation submitted successfully!");
    }
  };

  return (
    <div data-aos="fade-up" className="reservation container overlay-both relative">
      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{
          backgroundImage: `linear-gradient(rgba(51, 33, 29, 0.9), rgba(51, 33, 29, 0.9)), url(${images.background})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex justify-center items-center text-white font-monserrat p-8 md:p-12 text-center md:text-left">
          <div data-aos="fade-right">
            <div className="font-roboto mb-6">
              <div className="text-4xl md:text-5xl lg:text-6xl text-[#DA9F5B] font-bold md:text-left">
                30% OFF
              </div>
              <div className="text-xl md:text-2xl lg:text-[2.5rem] font-bold">
                For Online Reservation
              </div>
            </div>
            <div className="mb-4 text-sm md:text-base leading-relaxed">
              Lorem justo clita erat lorem labore ea, justo dolor lorem ipsum ut
              sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed
              diam. Ea et erat ut sed diam sea
            </div>
            <div className="space-y-2 text-sm md:text-base flex md:block justify-center items-center">
              <div>
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="flex items-center">
                    <i className="fa-solid fa-check mr-4 text-[#DA9F5B] font-black"></i>
                    <span>Lorem ipsum dolor sit amet</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="p-6 md:p-12 text-white"
          style={{ background: "rgba(51, 33, 29, 0.8)" }}
          data-aos="fade-left"
        >
          <div className="text-center font-bold text-xl md:text-2xl lg:text-[2.5rem] mt-4 md:mt-12 mb-4 md:mb-6">
            Book Your Table
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border ${
                errors.name ? "border-red-500" : "border-[#DA9F5B]"
              } focus:outline-none focus:ring-2 bg-transparent focus:ring-[#DA9F5B] px-4 py-3 md:p-4`}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border ${
                errors.email ? "border-red-500" : "border-[#DA9F5B]"
              } focus:outline-none focus:ring-2 bg-transparent focus:ring-[#DA9F5B] px-4 py-3 md:p-4`}
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={`w-full border ${
                errors.date ? "border-red-500" : "border-[#DA9F5B]"
              } focus:outline-none focus:ring-2 bg-transparent focus:ring-[#DA9F5B] px-4 py-3 md:p-4`}
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className={`w-full border ${
                errors.time ? "border-red-500" : "border-[#DA9F5B]"
              } focus:outline-none focus:ring-2 bg-transparent focus:ring-[#DA9F5B] px-4 py-3 md:p-4`}
            />
            <input
              type="number"
              name="person"
              placeholder="Number of Persons"
              value={formData.person}
              onChange={handleChange}
              min="1"
              className={`w-full border ${
                errors.person ? "border-red-500" : "border-[#DA9F5B]"
              } focus:outline-none focus:ring-2 bg-transparent focus:ring-[#DA9F5B] px-4 py-3 md:p-4`}
            />
            <button
              type="submit"
              className="bg-[#DA9F5B] text-[#212529] hover:bg-[#e78e28] font-bold font-roboto py-4 w-full transition-colors duration-150 ease-in-out"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
