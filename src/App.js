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
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Menu></Menu>
      <Reservation></Reservation>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </>
  );
}

export default App;
