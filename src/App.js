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
  return (
    <>
      <div>
        {/* <Navbar></Navbar> */}
        {/* <Hero></Hero> */}
        <div className="py-3 lg:py-10" />
        <About/>
        <div className="py-3 lg:py-10" />
        <Services/>
        <div className="py-3 lg:py-10" />
        {/* <Offer/> */}
        <div className="py-3 lg:py-10" />
        <Menu/>
        <div className="py-3 lg:py-10" />
        {/* <Reservation></Reservation> */}
        {/* <Testimonial></Testimonial> */}
        {/* <Contact></Contact> */}
      </div>
    </>
  );
}

export default App;
