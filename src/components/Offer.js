import React from "react";
import { images } from "../utils/demo_images";

const Offer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${images.background})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat"
      }}
    ></div>
  );
};

export default Offer;
