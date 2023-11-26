import React from "react";
import "./style.scss";
import FeaturedPosts from "../FeaturedPosts";
import FeaturedProducts from "../FeaturedProducts";
import FeaturedVideo from "../FeaturedVideo";


function Section2() {
  return (
    <>
      <section id="Featured">
        <FeaturedPosts />
        <FeaturedProducts />
        <FeaturedVideo />
      </section>
    </>
  );
}

export default Section2;
