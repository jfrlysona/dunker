import React, { useState } from "react";
import "./index.css";
import Menubar from "../Menubar";
import DiscountForUsers from "../DiscountForUsers";
function Navbar() {
  const [openMenubar, setOpenMenubar] = useState(false);
  return (
    <>
      {openMenubar ? null : <DiscountForUsers />}
      <nav>
        <div className={`menu-logo ${openMenubar && `opened-menubar`}`}>
          <div
            className="menu-icon"
            onClick={() => {
              setOpenMenubar((opened) => !opened);
              document.body.classList.toggle("scroll");
            }}
          >
            {openMenubar ? (
              <i className="fa-regular fa-xmark"></i>
            ) : (
              <i className="fa-regular fa-bars"></i>
            )}
          </div>
          <div className="logo">
            <a href="/index.html">
              <img
                src="https://dunker.qodeinteractive.com/wp-content/uploads/2023/02/Dunker-logo-dark.png"
                alt=""
              />
            </a>
          </div>
        </div>
        {openMenubar && <Menubar />}
        <div className="pages-list">
          <ul>
            <li>HOME</li>
            <li>PAGES</li>
            <li>SHOP</li>
            <li>BLOG</li>
            <li>PORTFOLIO</li>
          </ul>
        </div>
        <div className="navbar-icons">
          <i className="fa-regular fa-magnifying-glass"></i>
          <i className="fa-regular fa-user"></i>
          <i className="fa-regular fa-heart"></i>
          <div className="bag-shop">
            <i className="fa-sharp fa-regular fa-bag-shopping"></i>
            <span
              style={{
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "18px",
              }}
              className="count-item"
            >
              0
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
