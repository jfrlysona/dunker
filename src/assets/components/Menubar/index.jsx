import React, { useState } from "react";
import "./index.css";
function Menubar() {
  const [showListHome, setShowListHome] = useState(false);
  const [showListPages, setShowListPages] = useState(false);
  const [showListShop, setShowListShop] = useState(false);
  const [showListBlog, setShowListBlog] = useState(false);
  const [showListFormats, setShowListFormats] = useState(false);
  const [showListPortfolio, setShowListPortfolio] = useState(false);
  const [showListLayouts, setShowListLayouts] = useState(false);
  const [showListTypes, setShowListTypes] = useState(false);
  function handleClickHome(e) {
    e.preventDefault();
    setShowListHome((show) => !show);
  }
  function handleClickPages(e) {
    e.preventDefault();
    setShowListPages((show) => !show);
  }
  function handleClickShop(e) {
    e.preventDefault();
    setShowListShop((show) => !show);
  }
  function handleClickBlog(e) {
    e.preventDefault();
    setShowListBlog((show) => !show);
  }
  function handleClickFormats(e) {
    e.preventDefault();
    setShowListFormats((show) => !show);
  }
  function handleClickPortfolio(e) {
    e.preventDefault();
    setShowListPortfolio((show) => !show);
  }
  function handleClickLayouts(e) {
    e.preventDefault();
    setShowListLayouts((show) => !show);
  }
  function handleClickTypes(e) {
    e.preventDefault();
    setShowListTypes((show) => !show);
  }
  const spanStyle={
    color: '#EEEDEB',
    fontSize: '12px',
    fontWeight: '700',
    display: 'block',
    textAlign: 'center',
  }
  return (
    <div className="menubar">
      <ul className="mainlist">
        <li className="list">
          <span className="list-title">HOME</span>{" "}
          <i
            className={`fa-regular fa-chevron-right ${showListHome ? 'rotate':'remove-rotate'} `}
            onClick={handleClickHome}
          ></i>
          {showListHome && (
            <ul className="sublist">
              <li className="sublist-item">
                <a href="/index.html">MAIN HOME</a>
              </li>
              <li className="sublist-item">
                <a href="https://dunker.qodeinteractive.com/sportswear-home/">
                  SPORTSWEAR HOME
                </a>
              </li>
              <li className="sublist-item">
                <a href="https://dunker.qodeinteractive.com/urban-clothing/">
                  URBAN CLOTHING
                </a>
              </li>
              <li className="sublist-item">
                <a href="https://dunker.qodeinteractive.com/street-fashion/">
                  STREET FASHION
                </a>
              </li>
              <li className="sublist-item">
                <a href="https://dunker.qodeinteractive.com/sneaker-store/">
                  SNEAKER STORE
                </a>
              </li>
              <li className="sublist-item">
                <a href="https://dunker.qodeinteractive.com/shop-home/">
                  SHOP HOME
                </a>
              </li>
              <li className="sublist-item">
                <a href="https://dunker.qodeinteractive.com/clothing-store/">
                  CLOTHING STORE
                </a>
              </li>
              <li className="sublist-item">
                <a href="https://dunker.qodeinteractive.com/fullscreen-slider/">
                  FULLSCREEN SLIDER
                </a>
              </li>
              <li className="sublist-item">
                <a href="https://dunker.qodeinteractive.com/left-menu-shop/">
                  LEFT MENU SHOP
                </a>
              </li>
            </ul>
          )}
        </li>
        <li className="list">
          <span className="list-title">PAGES</span>{" "}
          <i
            className={`fa-regular fa-chevron-right ${showListPages ? 'rotate':'remove-rotate'} `}
            onClick={handleClickPages}
          ></i>
          {showListPages && (
            <ul className="sublist">
              <li className="sublist-item">
                <a href="https://dunker.qodeinteractive.com/about-us/">
                  ABOUT US
                </a>
              </li>
              <li className="sublist-item">
                <a href="https://dunker.qodeinteractive.com/contact-us/">
                  CONTACT US
                </a>
              </li>
              <li className="sublist-item">
                <a href="https://dunker.qodeinteractive.com/our-brands/">
                  OUR BRANDS
                </a>
              </li>
              <li className="sublist-item">
                <a href="https://dunker.qodeinteractive.com/our-team/">
                  OUR TEAM
                </a>
              </li>
              <li className="sublist-item">
                <a href="https://dunker.qodeinteractive.com/get-in-touch/">
                  GET IN TOUCH
                </a>
              </li>
              <li className="sublist-item">
                <a href="https://dunker.qodeinteractive.com/pricing-plans/">
                  PRICING PLANS
                </a>
              </li>
              <li className="sublist-item">
                <a href="https://dunker.qodeinteractive.com/faq-page/">
                  FAQ PAGE
                </a>
              </li>
              <li className="sublist-item">
                <a href="https://dunker.qodeinteractive.com/terms-conditions/">
                  TERMS & CONDITIONS
                </a>
              </li>
              <li className="sublist-item">
                <a href="https://dunker.qodeinteractive.com/coming-soon/">
                  COMING SOON
                </a>
              </li>
            </ul>
          )}
        </li>
        <li className="list">
          <span className="list-title">SHOP</span>
          <i
            className={`fa-regular fa-chevron-right ${showListShop ? 'rotate':'remove-rotate'} `}
            onClick={handleClickShop}
          ></i>
          {showListShop && (
            <div className="sublist-container">
              {" "}
              <ul className="sublist">
                <span style={{spanStyle}}>PRODUCT TYPES</span>
                <li className="sublist-item">
                  <a href="https://dunker.qodeinteractive.com/product/react-infinity-run-flyknit-3/">
                    STANDART
                  </a>
                </li>
                <li className="sublist-item">
                  <a href="https://dunker.qodeinteractive.com/product/variable-sneakers-sport-time/">
                    VARIABLE
                  </a>
                </li>
                <li className="sublist-item">
                  <a href="https://dunker.qodeinteractive.com/product/grouped-sneakers-again/">
                    GROUPED
                  </a>
                </li>
                <li className="sublist-item">
                  <a href="https://dunker.qodeinteractive.com/product/dark-blue-bag/">
                    DARK BLUE BAG
                  </a>
                </li>
                <li className="sublist-item">
                  <a href="https://dunker.qodeinteractive.com/product/fixed-info/">
                    ATRACTIVE SNEAKERS
                  </a>
                </li>
                <li className="sublist-item">
                  <a href="https://dunker.qodeinteractive.com/product/sport-shoes/">
                    SPORT SHOES
                  </a>
                </li>
                <li className="sublist-item">
                  <a href="https://dunker.qodeinteractive.com/product/blue-yellow-shoes/">
                    BLUE YELLOW SHOES
                  </a>
                </li>
                <li className="sublist-item">
                  <a href="https://dunker.qodeinteractive.com/product/white-grey-bag/">
                    WHITE GREY BAG
                  </a>
                </li>
              </ul>
              <ul className="sublist">
                <span style={{spanStyle}}>SHOP LISTS</span>
                <li className="sublist-item">
                  <a href="https://dunker.qodeinteractive.com/shop-list-sidebar/">
                    SHOP LIST SIDEBAR
                  </a>
                </li>
                <li className="sublist-item">
                  <a href="https://dunker.qodeinteractive.com/shop-list-filter/">
                    SHOP LIST FILTER
                  </a>
                </li>
                <li className="sublist-item">
                  <a href="https://dunker.qodeinteractive.com/shop-list-categories/">
                    SHOP LIST CATEGORIES
                  </a>
                </li>
                <li className="sublist-item">
                  <a href="https://dunker.qodeinteractive.com/shop-list-top-categories/">
                    SHOP LIST TOP CATEGORIES
                  </a>
                </li>
              </ul>
              <ul className="sublist">
                <span style={{spanStyle}}>SHOP LAYOUTS</span>
                <li className="sublist-item">
                  <a href="https://dunker.qodeinteractive.com/shop-list-sidebar/two-columns/">
                    TWO COLUMNS
                  </a>
                </li>
                <li className="sublist-item">
                  <a href="https://dunker.qodeinteractive.com/shop-list-sidebar/three-columns/">
                    THREE COLUMNS
                  </a>
                </li>
                <li className="sublist-item">
                  <a href="https://dunker.qodeinteractive.com/shop-list-sidebar/four-columns/">
                    FOUR COLUMNS
                  </a>
                </li>
                <li className="sublist-item">
                  <a href="https://dunker.qodeinteractive.com/shop-list-sidebar/five-columns/">
                    FIVE COLUMNS
                  </a>
                </li>
                <li className="sublist-item">
                  <a href="https://dunker.qodeinteractive.com/shop-list-sidebar/six-columns/">
                    SIX COLUMNS
                  </a>
                </li>
              </ul>
              <ul className="sublist">
                <span style={{spanStyle}}>SHOP PAGES</span>
                <li className="sublist-item">
                  <a href="https://dunker.qodeinteractive.com/my-account/">
                    MY ACCOUNT
                  </a>
                </li>
                <li className="sublist-item">
                  <a href="https://dunker.qodeinteractive.com/cart/">CART</a>
                </li>
                <li className="sublist-item">
                  <a href="https://dunker.qodeinteractive.com/wishlist/">
                    WISHLIST
                  </a>
                </li>
                <li className="sublist-item">
                  <a href="https://dunker.qodeinteractive.com/checkout/">
                    CHECKOUT
                  </a>
                </li>
                <li className="sublist-item">
                  <a href="https://dunker.qodeinteractive.com/order-tracking/">
                    ORDER TRACKING
                  </a>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li className="list">
          <span className="list-title">BLOG</span>{" "}
          <i
            className={`fa-regular fa-chevron-right ${showListBlog ? 'rotate':'remove-rotate'} `}
            onClick={handleClickBlog}
          ></i>
          {showListBlog && (
            <ul className="sublist">
              <li className="sublist-item">
                <a href="https://dunker.qodeinteractive.com/right-sidebar/">
                  LEFT SIDEBAR
                </a>
              </li>
              <li className="sublist-item">
                <a href="https://dunker.qodeinteractive.com/left-sidebar/">
                  RIGHT SIDEBAR
                </a>
              </li>
              <li className="sublist-item">
                <a href="https://dunker.qodeinteractive.com/no-sidebar/">
                  NO SIDEBAR
                </a>
              </li>
              <li className="sublist-item">
                <a href="https://dunker.qodeinteractive.com/#">POST FORMATS</a>{" "}
                <i
                  className={`fa-regular fa-chevron-right ${showListFormats ? 'rotate':'remove-rotate'} `}
                  onClick={handleClickFormats}
                ></i>
                {showListFormats && (
                  <ul className="list-sublist">
                    <li className="list-sublist-item">
                      <a href="https://dunker.qodeinteractive.com/ideas-for-action/">
                        STANDART
                      </a>
                    </li>
                    <li className="list-sublist-item">
                      <a href="https://dunker.qodeinteractive.com/find-your-fit/">
                        GALLERY
                      </a>
                    </li>
                    <li className="list-sublist-item">
                      <a href="https://dunker.qodeinteractive.com/a-formula-for-success/">
                        QUOTE
                      </a>
                    </li>
                    <li className="list-sublist-item">
                      <a href="https://dunker.qodeinteractive.com/best-find-for-you/">
                        LINK
                      </a>
                    </li>
                    <li className="list-sublist-item">
                      <a href="https://dunker.qodeinteractive.com/jump-ahead/">
                        AUDIO
                      </a>
                    </li>
                    <li className="list-sublist-item">
                      <a href="https://dunker.qodeinteractive.com/sneaker-style/">
                        VIDEO
                      </a>
                    </li>
                    <li className="list-sublist-item">
                      <a href="https://dunker.qodeinteractive.com/great-mentor/">
                        NO SIDEBAR
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
        <li className="list">
          <span className="list-title">POTFOLIO</span>{" "}
          <i
            className={`fa-regular fa-chevron-right ${showListPortfolio ? 'rotate':'remove-rotate'} `}
            onClick={handleClickPortfolio}
          ></i>
          {showListPortfolio && (
            <ul className="sublist">
              <li className="sublist-item">
                <a href="">PORTFOLIO LIST</a>
              </li>
              <li className="sublist-item">
                <a href="">
                  LAYOUTS{" "}
                  <i
                    className={`fa-regular fa-chevron-right ${showListLayouts ? 'rotate':'remove-rotate'} `}
                    onClick={handleClickLayouts}
                  ></i>
                  {showListLayouts && (
                    <ul className="list-sublist">
                      <li className="list-sublist-item">
                        <a href="https://dunker.qodeinteractive.com/shop-list-sidebar/two-columns/">
                          TWO COLUMNS
                        </a>
                      </li>
                      <li className="list-sublist-item">
                        <a href="https://dunker.qodeinteractive.com/portfolio/two-columns/">
                          TWO COLUMNS
                        </a>
                      </li>
                      <li className="list-sublist-item">
                        <a href="https://dunker.qodeinteractive.com/portfolio/three-columns/">
                          THREE COLUMNS
                        </a>
                      </li>
                      <li className="list-sublist-item">
                        <a href="https://dunker.qodeinteractive.com/portfolio/four-columns/">
                          FOUR COLUMNS
                        </a>
                      </li>
                      <li className="list-sublist-item">
                        <a href="https://dunker.qodeinteractive.com/portfolio/four-columns-wide/">
                          FOUR COLUMNS WIDE
                        </a>
                      </li>
                      <li className="list-sublist-item">
                        <a href="https://dunker.qodeinteractive.com/portfolio/five-columns-wide/">
                          FIVE COLUMNS WIDE
                        </a>
                      </li>
                    </ul>
                  )}
                </a>
              </li>
              <li className="sublist-item">
                <a href="">
                  SINGLE TYPES{" "}
                  <i
                    className={`fa-regular fa-chevron-right ${showListTypes ? 'rotate':'remove-rotate'} `}
                    onClick={handleClickTypes}
                  ></i>
                  {showListTypes && (
                    <ul className="list-sublist">
                      <li className="list-sublist-item">
                        <a href="https://dunker.qodeinteractive.com/portfolio-item/carbon-plate/">
                          IMAGES SMALL
                        </a>
                      </li>
                      <li className="list-sublist-item">
                        <a href="https://dunker.qodeinteractive.com/portfolio-item/run-division/">
                          IMAGES BIG
                        </a>
                      </li>
                      <li className="list-sublist-item">
                        <a href="https://dunker.qodeinteractive.com/portfolio-item/sign-up-to-run/">
                          GALLERY SMALL
                        </a>
                      </li>
                      <li className="list-sublist-item">
                        <a href="https://dunker.qodeinteractive.com/portfolio-item/running-tops/">
                          GALLERY BIG
                        </a>
                      </li>
                      <li className="list-sublist-item">
                        <a href="https://dunker.qodeinteractive.com/portfolio-item/fitness-equipment/">
                          MASONRY SMALL
                        </a>
                      </li>
                      <li className="list-sublist-item">
                        <a href="https://dunker.qodeinteractive.com/portfolio-item/running-shoes/">
                          MASONRY BIG
                        </a>
                      </li>
                      <li className="list-sublist-item">
                        <a href="https://dunker.qodeinteractive.com/portfolio-item/jordan-essentials/">
                          SLIDER SMALL
                        </a>
                      </li>
                      <li className="list-sublist-item">
                        <a href="https://dunker.qodeinteractive.com/portfolio-item/my-point-of-view/">
                          SLIDER BIG
                        </a>
                      </li>
                    </ul>
                  )}
                </a>
              </li>
            </ul>
          )}
        </li>
        <li className="list">
          <a href="https://dunker.qodeinteractive.com/landing/"><span className="list-title">LANDING</span></a>
        </li>
      </ul>
    </div>
  );
}

export default Menubar;
