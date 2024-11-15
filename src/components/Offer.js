import React from "react";
import { images } from "../utils/demo_images";

const Offer = () => {
  return (
    <div
  style={{
    backgroundImage: `linear-gradient(rgba(51, 33, 29, 0.9), rgba(51, 33, 29, 0.9)), url(${images.background})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat"
  }}
>
  <div className="container">
    <div>50% OFF</div>
    <div>Sunday Special Offer</div>
    <div>Only for Sunday from 1st Jan to 30th Jan 2045</div>
  </div>
</div>

  );
};

export default Offer;
