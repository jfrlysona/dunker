import React from "react";
import "./style.css";

function NewSale() {
  return (
    <div className="newSale">
      <div className="newSaleLeft">
        <img
          width={759.5}
          height={660}
          src="https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/h1-img-3.jpg"
          alt=""
        />
        <p>New</p>
      </div>
      <div className="newSaleRight">
        <img
          width={759.5}
          height={660}
          src="https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/h1-img-4.jpg"
          alt=""
        />
        <div className="texts">
          <p className="p1">Sale</p>
          <p className="p2">20% Off all Hoodies</p>
          <button>SHOP NOW</button>
        </div>
      </div>
    </div>
  );
}

export default NewSale;
