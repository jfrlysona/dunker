import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../ExampleCarouselImage";
function CarouselFadeExample() {
  return (
    <Carousel fade data-bs-theme="dark">
      <Carousel.Item>
        <ExampleCarouselImage className="slide1" title='LIMITED EDITION SPORTSWEAR' text='Search the Dunker and find the ideal pieces for you' />
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage className="slide2" title='UV PROTECTIVE CLOTHES' text='Dark or bright colors keep UV  rays from reaching your skin' />
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage className="slide3" title='RUNNING CLOTHES BRANDS' text='Search the Dunker and find the ideal pieces for you' />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
