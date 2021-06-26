import React from "react";
import Navbar from "./Navbar/Navbar";
import VerticalSlider from "./VerticalSlider/VerticalSlider";
import GridSection from "./GridSection/GridSection";

function Body() {
  return (
    <div className="theme-black h-100 position-relative overflow-auto">
      <Navbar className="py-3 px-3" />
      <VerticalSlider />
      <GridSection />
    </div>
  );
}

export default Body;
