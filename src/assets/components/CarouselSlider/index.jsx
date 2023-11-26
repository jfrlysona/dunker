import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../Scss/components/_carousel.scss"
import CarouselCard from "../CarouselCard";

function Carousel() {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="carousel_container">
        <Slider {...settings}>
          <div>
            <CarouselCard
              text="NIKE"
              img="https://dunker.qodeinteractive.com/wp-content/uploads/2023/01/main-home-brand-2.jpg"
            />
          </div>
          <div>
            <CarouselCard
              text="NORTH FACE"
              img="https://dunker.qodeinteractive.com/wp-content/uploads/2023/01/main-home-brand-1.jpg"
            />
          </div>
          <div>
            <CarouselCard
              text="PUMA"
              img="https://dunker.qodeinteractive.com/wp-content/uploads/2023/01/main-home-brand-6.jpg"
            />
          </div>
          <div>
            <CarouselCard
              text="ADIDAS"
              img="https://dunker.qodeinteractive.com/wp-content/uploads/2023/01/main-home-brand-3.jpg"
            />
          </div>
          <div>
            <CarouselCard
              text="KICKZ"
              img="https://dunker.qodeinteractive.com/wp-content/uploads/2023/01/main-home-brand-7.jpg"
            />
          </div>
          <div>
            <CarouselCard
              text="NEW BALANCE"
              img="https://dunker.qodeinteractive.com/wp-content/uploads/2023/01/main-home-brand-5.jpg"
            />
          </div>

          <div>
            <CarouselCard
              text="ADIDAS"
              img="https://dunker.qodeinteractive.com/wp-content/uploads/2023/01/main-home-brand-3.jpg"
            />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Carousel;
