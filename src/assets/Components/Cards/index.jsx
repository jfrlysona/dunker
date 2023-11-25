import React from "react";
import "../Scss/components/_cards.scss";
import Card from "../Card/index";
function Cards() {
  return (
    <>
      <div className="card_Container">
        <Card id="div1" image="https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/shop-list-sidebar-54.jpg" brand="KICKZ" name="SHORT TROUSERS" type="Clothes" price="$45" />
        <Card id="div2" image="https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/shop-list-sidebar-29.jpg" brand="REBOOK" name="TRAINING BAG" type="Bags | Sport" price="$75" />
        <Card id="div3" image="https://dunker.qodeinteractive.com/wp-content/uploads/2023/01/main-home-product-23.jpg" brand="SALOMON" name="RUN FAST SHOES" type="Bags | Sport" price="$250" />
        <Card id="div4" image="https://dunker.qodeinteractive.com/wp-content/uploads/2023/01/main-home-product-24.jpg" brand="" name="JORDAN SHOES" type="Bags | Sport" price="$165" />
        <Card id="div5" image="https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/shop-list-sidebar-23.jpg" brand="SALOMON" name="MONEY BAG" type="Bags | Sport" price="$50" />
        <Card id="div6" image="https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/shop-list-sidebar-48.jpg" brand="KICKZ" name="CITY SUNGLASSES" type="Glasses | Sport" price="$45" />
      </div>
    </>
  );
}

export default Cards;
