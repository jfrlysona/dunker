import React from "react";
import BestFashion from "../BestFashion";
import MarkaLogo from "../MarkaLogo";
import NewCollections from "../NewCollections";
import NewSale from "../NewSale";
import "./style.css";

function Section3() {
  return (
    <div className="section3">
      <NewCollections />
      <BestFashion />
      <NewSale />
      <MarkaLogo /> 
    </div>
  );
}

export default Section3;
