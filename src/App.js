import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Reservation from "./components/Reservation";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <div>
        {/* <Navbar></Navbar> */}
        {/* <Hero></Hero> */}
        <div className="py-10"/>
        <About></About>
        <div className="py-10"/>
        <Services></Services>
        <div className="py-10"/>
        {/* <Menu></Menu> */}
        {/* <Reservation></Reservation> */}
        {/* <Testimonial></Testimonial> */}
        {/* <Contact></Contact> */}
      </div>
    </>
  );
}

export default App;
