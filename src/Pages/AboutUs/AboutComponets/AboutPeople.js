import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./aboutus.css";

const AboutPeople = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="h-screen  bg-blue-600">
      <div className="container mx-auto">
        <Slider {...settings}>
          <div className="w-64 h-64 bg-black  text-white">
            <h3>Hello</h3>
          </div>
          <div className="w-64 h-64 bg-black text-white">
            <h3>Hello</h3>
          </div>
          <div className="w-64 h-64 bg-black text-white">
            <h3>Hello</h3>
          </div>
          <div className="w-64 h-64 bg-black text-white">
            <h3>Hello</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default AboutPeople;
