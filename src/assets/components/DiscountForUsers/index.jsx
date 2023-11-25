import React, { useState } from "react";
import "./index.css";
function DiscountForUsers({ className }) {
  const [closeDiscount, setCloseDiscount] = useState(false);
  return (
    <div
      className={`discount ${className}`}
      style={{ display: closeDiscount ? "none" : null }}
    >
      <p>
        10% DISCOUNT FOR REGISTERED USERS & FREE SHIPPING FOR ORDERS OVER $70
        PLUS FREE RETURNS
      </p>
      <i
        onClick={() => setCloseDiscount(true)}
        className="fa-solid fa-xmark-large"
      ></i>
    </div>
  );
}

export default DiscountForUsers;
