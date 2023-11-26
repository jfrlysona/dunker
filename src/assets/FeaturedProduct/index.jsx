//aysel
import React from "react";
import "./style.scss";

function FeaturedProduct({
  img,
  marka,
  name,
  category,
  price,
  like,
  shop,
  eticet,
  left,
  right,
  sale,
}) {
  return (
    <div>
      <div className="featuredProduct">
        {/* <div className="eticet">{eticet}</div> */}
        <i className={like}></i>
        <img src={img} alt="" />
        <i className={left}></i>
        <i className={right}></i>
        <span>{marka}</span>
        <h5>{name}</h5>
        <p>{category}</p>
        <span className="price">{price}</span>
        <span className="sale">{sale}</span>
        <i className={shop}></i>
      </div>
    </div>
  );
}

export default FeaturedProduct;
