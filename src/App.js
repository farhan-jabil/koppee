import React, { useState, useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import Reservation from "./components/Reservation";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";

function App() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <div className="py-3 lg:py-12" />
        <About />
        <div className="py-3 lg:py-12" />
        <Services />
        <div className="py-3 lg:py-12" />
        <Offer />
        <div className="py-3 lg:py-12" />
        <Menu />
        <div className="py-3 lg:py-12" />
        <Reservation />
        <div className="py-3 lg:py-12" />
        <Testimonial />
        <div className="py-3 lg:py-12" />
        <Contact />
      </div>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 bg-[#DA9F5B] text-black p-3 rounded-lg shadow-lg hover:bg-[#c2864f] transition-all duration-300 ${
          showTopButton ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        aria-label="Scroll to Top"
      >
        <i className="fa-solid fa-chevron-up"></i>
      </button>
    </>
  );
}

export default App;
