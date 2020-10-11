import React from "react";
import { Carousel } from "react-bootstrap";

function Slide() {
  return (
    <Carousel className="carouselSlide" interval={1000}>
      <Carousel.Item>
        <img className="d-block w-100" src="banner.png" alt="Primeiro Slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="banner1.png" alt="Segundo Slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="banner2.png" alt="Terceiro Slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;
