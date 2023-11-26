import React from "react";
import "../Scss/components/_card.scss";
function Card({ id, image, brand, name, type, price }) {
  return (
    <>
      <div className="div" id={id}>
        <div className="like_icon">
          <i className="fa-regular fa-heart"></i>
        </div>
        <div className="change_icon">
          <div className="left i">
            <i className="fa-regular fa-angle-left"></i>
          </div>
          <div className="right i">
            <i className="fa-regular fa-angle-right"></i>
          </div>
        </div>
        <div className="shopping_bag">
          <i className="fa-sharp fa-regular fa-bag-shopping"></i>
        </div>
        <div className="product">
          <div className="image_container">
            <img src={image} alt="" />
          </div>
          <div className="product_info">
            <p className="brand">{brand}</p>
            <p className="bold">{name}</p>
            <p className="type">{type}</p>
            <span className="price">{price}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;