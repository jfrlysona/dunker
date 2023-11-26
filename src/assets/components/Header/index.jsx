import React from "react";
import Navbar from "../Navbar";
import "./index.css";
import CarouselFadeExample from "../CarouselSlider";
function Header() {
  return (
    <header>
      <Navbar />
      <CarouselFadeExample/>
    </header>
  );
}

export default Header;
