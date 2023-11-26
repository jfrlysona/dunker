//aysel
import React from "react";
import "./style.scss";

function FeaturedPost() {
  return (
    <>
      <div className="featuredPost">
        <h2>Featured</h2>
        <div className="photo">
          <img
            src="https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/main-home-product-1.jpg"
            alt=""
          />
          <div className="cardhover">
            <div className="iconheart">
              <i class="fa-regular fa-heart"></i>
            </div>
            <div className="text">
              <span>SALOMON</span>
              <p>CASUAL T-SHIRT</p>
              <span>Fashion</span>
              <h3>$180</h3>
            </div>
          </div>
        </div>
        <div className="icon">
          <i class="fa-sharp fa-regular fa-bag-shopping"></i>
        </div>
      </div>
      <div className="featuredPost">
        <h2 className="collections">New Collections</h2>
        <div className="photo">
          <img
            src="https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/main-home-product-2.jpg"
            alt=""
          />
          <div className="cardhover">
            <div className="iconheart">
              <i class="fa-regular fa-heart"></i>
            </div>
            <div className="text">
              <span>ADIDAS | NIKE</span>
              <p>ADDIDAS SNEAKERS</p>
              <span>Fashion</span>
              <h3>$95</h3>
            </div>
          </div>
        </div>
        <div className="icon">
          <i class="fa-sharp fa-regular fa-bag-shopping"></i>
        </div>
      </div>
    </>
  );
}

export default FeaturedPost;
