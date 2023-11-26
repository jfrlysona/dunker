import React from "react";
import Navbar from "../Navbar";
import "./index.css";
import CarouselFadeExample from "../Carousel";
function Header() {
  return (
    <header>
      <Navbar />
      <CarouselFadeExample/>
    </header>
  );
}

export default Header;
