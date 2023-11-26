import React from "react";
import "../Scss/components/_streetVibeText.scss"

function Text() {
  return (
    <div className="text_container">
      <div className="text">
      <p className="first_line">GOING OUT ON THE STREET</p>
      <p className="second_line">THE ULTIMATE STREET VIBE</p>
      <p className="third_line">Lorem ipsum dolor sit amet, consectetur adipiscing elit ellent, esque eget massa ac urna finibus fringilla nonpon mauris sit amet nisl in nunc pharetra.</p>
      </div>
      <div className="text_button">
        <button className="btn">SHOP NOW</button>
      </div>
    </div>
  );
}

export default Text;
