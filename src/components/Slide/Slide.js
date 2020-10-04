import React from "react";
import { Carousel } from "react-bootstrap";

function Slide() {
  return (
    <Carousel className="carouselSlide">
      <Carousel.Item>
        <img className="d-block w-100" src="banner.png" alt="First slide" />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;
