import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from "../data/carouselData";
import "../Styles/Slider.css";

const ResourceSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    nextArrow:false,
    prevArrow:false,
    cssEase: "linear",
  };
  return (
    <div>
     <div className="my-5"> <h1 className="res">Resources</h1></div>
      <Slider {...settings}>
        {Data.map((item) => (
          <div className="slider-card my-2">
            <div className="card-top">
              <img src={item.image} alt={item.image} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ResourceSlider;
