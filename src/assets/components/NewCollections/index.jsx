import React from "react";
import "./style.css";

function NewCollections() {
  return (
    <div className="newCollection">
      <div className="newCollectionTexts">
        <p className="p1">EXPLORE OUR WORLD</p>
        <p className="p2">NEW COLLECTIONS</p>
      </div>
      <div className="cards">
        <div className="card">
          <div className="cardTop">
            <img
              src="https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/h1-ibanner-3.jpg"
              alt=""
            />
            <p className="p1">NORTH FACE</p>
            <p className="p2">GYM BACKPACK</p>
          </div>
          <div className="cardBottom">
            <p>EXPLORE COLLECTION</p>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className="card">
          <div className="cardTop">
            <img
              src="https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/h1-banner-1.jpg"
              alt=""
            />
            <p className="p3">ADIDAS</p>
            <p className="p4">RUN DIVISION</p>
          </div>
          <div className="cardBottom">
            <p>EXPLORE COLLECTION</p>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className="card">
          <div className="cardTop">
            <img
              src="https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/h1-ibanner-02.jpg"
              alt=""
            />
            <p className="p1">NIKE</p>
            <p className="p2">DRI-FIT SPORT BC</p>
          </div>
          <div className="cardBottom">
            <p>EXPLORE COLLECTION</p>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCollections;
