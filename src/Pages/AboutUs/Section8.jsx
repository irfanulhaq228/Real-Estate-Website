import React from "react";
import Slider from "react-slick";

import svg1 from "../../assets/svg/about-sec-8-svg-1.svg";
import svg2 from "../../assets/svg/about-sec-8-svg-2.svg";
import svg3 from "../../assets/svg/about-sec-8-svg-3.svg";
import svg4 from "../../assets/svg/about-sec-8-svg-4.svg";

const Section8 = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
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
    <div className="section-8 mx-[13px] md:mx-[30px] lg:mx-[70px] py-[100px] pb-[70px]">
      <p className="text-[25px] sm:text-[30px] lg:text-[35px] font-[300]">
        Our Team
      </p>
      <div className="slider-container mt-[30px]">
        <Slider {...settings} className="w-[100%]">
          <div>
            <img src={svg1} width={"100%"} />
          </div>
          <div>
            <img src={svg2} width={"100%"} />
          </div>
          <div>
            <img src={svg3} width={"100%"} />
          </div>
          <div>
            <img src={svg4} width={"100%"} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Section8;
