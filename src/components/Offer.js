import React from "react";
import { images } from "../utils/demo_images";

const Offer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${images.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}
    ></div>
  );
};

export default Offer;
