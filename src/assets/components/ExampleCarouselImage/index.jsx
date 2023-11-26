import React from "react";
import "./index.css";
function CarouselFadeExample({ className, title, text }) {
  return (
    <div className={`slide ${className}`}>
      <div className="slide-content">
        <h1>{title}</h1>
        <p>{text}</p>
        <button id="shop-btn">SHOP NOW</button>
      </div>
    </div>
  );
}

export default CarouselFadeExample;
