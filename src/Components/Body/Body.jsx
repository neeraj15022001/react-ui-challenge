import React from "react";
import Navbar from "./Navbar/Navbar";
import VerticalSlider from "./VerticalSlider/VerticalSlider";

function Body() {
  return (
    <div className="theme-black h-100 position-relative">
      <Navbar className="py-3 px-3" />
      <VerticalSlider />
    </div>
  );
}

export default Body;
