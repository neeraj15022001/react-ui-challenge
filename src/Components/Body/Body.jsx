import React from "react";
import Navbar from "./Navbar/Navbar";
import VerticalSlider from "./VerticalSlider/VerticalSlider"

function Body() {
  return (
    <div className="theme-black h-100 py-2 px-3 position-relative">
      <Navbar />
      <VerticalSlider />
    </div>
  );
}

export default Body;
