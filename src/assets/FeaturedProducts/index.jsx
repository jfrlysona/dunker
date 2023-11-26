//aysel
import React from "react";
import "./style.scss";
import FeaturedProduct from "../FeaturedProduct";

function FeaturedProducts() {
  return (
    <>
      <div className="container">
        <div className="featuredProducts">
          <div className="header">
            <p>DUNKER COLLECTION</p>
            <h2>FEATURED PRODUCTS</h2>
          </div>
          <div className="filter">
            <ul>
              <li className="all">SHOW ALL</li>
              <li>FITNESS</li>
              <li>CYCLING</li>
              <li>WINTER</li>
            </ul>
          </div>
          <div className="products">
            <FeaturedProduct
              img="https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/shop-list-filter-1-800x975.jpg"
              marka="KICKZ"
              name="WHITE SHIRT"
              category="Fitness"
              price="$45"
              like="fa-regular fa-heart"
              shop="fa-sharp fa-regular fa-bag-shopping"
              left="fa-regular fa-angle-left"
              right="fa-regular fa-angle-right"
            />
            <FeaturedProduct
              img="https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/shop-list-sidebar-01-800x975.jpg"
              marka="NEW BALANCE"
              name="BLACK NIKE"
              category="Fitness"
              price="$75"
              like="fa-regular fa-heart"
              shop="fa-sharp fa-regular fa-bag-shopping"
              left="fa-regular fa-angle-left"
              right="fa-regular fa-angle-right"
              // eticet="NEW"
            />
            <FeaturedProduct
              img="https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/grouped-product-photo-3-800x975.jpg"
              marka="RANG"
              name="YELLOW COAT"
              category="Winter"
              price="$120"
              like="fa-regular fa-heart"
              shop="fa-sharp fa-regular fa-bag-shopping"
              left="fa-regular fa-angle-left"
              right="fa-regular fa-angle-right"
            />
            <FeaturedProduct
              img="https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/shop-list-sidebar-6-800x975.jpg"
              marka="ADIDAS"
              name="SPORT BAG"
              category="Cycling"
              price="$95"
              sale="$120"
              like="fa-regular fa-heart"
              shop="fa-sharp fa-regular fa-bag-shopping"
              left="fa-regular fa-angle-left"
              right="fa-regular fa-angle-right"
             
            />
            <FeaturedProduct
              img="https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/shop-list-sidebar-35-800x975.jpg"
              marka="NIKE"
              name="RUNNING JACKET"
              category="Winter"
              price="$85"
              sale="$100"
              like="fa-regular fa-heart"
              shop="fa-sharp fa-regular fa-bag-shopping"
              left="fa-regular fa-angle-left"
              right="fa-regular fa-angle-right"
            />
            <FeaturedProduct
              img="https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/shop-single-3-800x975.jpg"
              marka="ADIDAS"
              name="TRAINING SHIRT"
              category="Fitness"
              price="$50"
              like="fa-regular fa-heart"
              shop="fa-sharp fa-regular fa-bag-shopping"
              left="fa-regular fa-angle-left"
              right="fa-regular fa-angle-right"
            />
            <FeaturedProduct
              img="https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/shop-list-sidebar-12-800x975.jpg"
              marka="KICKZ"
              name="COOL HAT"
              category="Fitness"
              price="$35"
              like="fa-regular fa-heart"
              shop="fa-sharp fa-regular fa-bag-shopping"
              left="fa-regular fa-angle-left"
              right="fa-regular fa-angle-right"
            />
            <FeaturedProduct
              img="https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/shop-list-sidebar-17-800x975.jpg"
              marka="PUMA"
              name="HOODIE"
              category="Winter"
              price="$75"
              like="fa-regular fa-heart"
              shop="fa-sharp fa-regular fa-bag-shopping"
              left="fa-regular fa-angle-left"
              right="fa-regular fa-angle-right"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedProducts;
