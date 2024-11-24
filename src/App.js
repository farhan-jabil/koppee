import React, { useState, useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
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
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: true,
      anchorPlacement: "top-bottom",
    });

    const handleScroll = () => {
      setShowTopButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    // Set up Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id); // Update current section
            console.log(`You are in: ${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.6, // Trigger when 60% of the component is visible
      }
    );

    const sections = document.querySelectorAll(".observe-section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
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
        <div id="hero" className="observe-section">
          <Hero />
        </div>
        <div className="py-3 lg:py-12" />
        <div id="about" className="observe-section">
          <About />
        </div>
        <div className="py-3 lg:py-12" />
        <div id="services" className="observe-section">
          <Services />
        </div>
        <div className="py-3 lg:py-12" />
        <div id="offer" className="observe-section">
          <Offer />
        </div>
        <div className="py-3 lg:py-12" />
        <div id="menu" className="observe-section">
          <Menu />
        </div>
        <div className="py-3 lg:py-12" />
        <div id="reservation" className="observe-section">
          <Reservation />
        </div>
        <div className="py-3 lg:py-12" />
        <div id="testimonial" className="observe-section">
          <Testimonial />
        </div>
        <div className="py-3 lg:py-12" />
        <div id="contact" className="observe-section">
          <Contact />
        </div>
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
