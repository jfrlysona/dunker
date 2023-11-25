import React from "react";
import "../Scss/layout/_trendingNow.scss";
import Cards from '../Cards/index'
function TrendingNow() {
  return (
    <section id="trending">
      <div className="head_text">
        <p>FIND WHAT IS</p>
        <h2>TRENDING NOW</h2>
      </div>
      <Cards/>
     
    </section>
  );
}

export default TrendingNow;
