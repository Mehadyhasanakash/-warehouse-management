import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img height='300px' src='https://i.ibb.co/8XRpCC8/logo01.png' alt="" />
          </div>
          <div>
          <img height='300px' src='https://i.ibb.co/xqPLcbX/image02.png' alt="" />

          </div>
          <div>
          <img height='300px' src='https://i.ibb.co/vLLRHyk/image03.png' alt="" />

          </div>
          <div>
          <img height='300px' src='https://i.ibb.co/1X7qRB5/image04.png' alt="" />

          </div>
          <div>
          <img height='300px' src='https://i.ibb.co/4TzMrTg/image05.png' alt="" />

          </div>
          <div>
          <img height='300px' src='https://i.ibb.co/QKZmCtd/image06.png' alt="" />

          </div>
        </Slider>
      </div>
    );
  }
}

