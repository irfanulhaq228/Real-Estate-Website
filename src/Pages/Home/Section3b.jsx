import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { IMAGE_URL, URL } from "../../URLs";

import { Carousel } from "antd";
import { MdLocationPin } from "react-icons/md";
import ViewHouse from "./ViewHouse";

const Section3b = () => {
  const [data, setData] = useState([]);
  const [viewHouseInfo, setViewHouseInfo] = useState(false);
  const [ houseInfo, setHouseInfo ] = useState({});
  var settings = {
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
  useEffect(() => {
    axios.get(`${URL}/home-for-rent/approved`).then((res) => {
      if (res?.status === 200) {
        setData(res?.data?.message);
      }
    });
  }, []);
  const fn_viewHouseInfo = (data) => {
    setViewHouseInfo(true);
    setHouseInfo(data);
  }
  return (
    <div className={`${data?.length === 0 && "hidden"} section-8 mx-[13px] md:mx-[30px] lg:mx-[60px] pt-[100px]`}>
      <ViewHouse viewHouseInfo={viewHouseInfo} setViewHouseInfo={setViewHouseInfo} IMAGE_URL={IMAGE_URL} houseInfo={houseInfo} />
      <p className="text-[25px] sm:text-[30px] lg:text-[35px] font-[500] mb-[10px] ms-[15px]">Rental Houses For You</p>
      <div className="slider-container cursor-pointer">
        <Slider {...settings} className="w-[100%]">
          {data?.length > 0 &&
            data?.map((item, index) => (
              <div key={index} className="px-5 py-[25px]" onClick={() => fn_viewHouseInfo(item)}>
                <div className="rounded-[10px] house-boxes sm:h-[330px]">
                  <Carousel
                    autoplay={false}
                    dots={false}
                  >
                    {item?.images?.map((item) => (
                      <div className="h-[200px]">
                        <img
                          src={`${IMAGE_URL}/${item}`}
                          className="h-[200px] w-full object-cover object-center rounded-[10px]"
                        />
                      </div>
                    ))}
                  </Carousel>
                  <p className="font-[700] text-[18px] px-3 mt-5">
                    $ {item?.monthlyPrice}
                  </p>
                  <p className="flex gap-1 text-[14px] px-3 flex-wrap">
                    <span className="font-[700]">{item?.bedrooms}</span>
                    <span>bds</span>
                    <span>|</span>
                    <span className="font-[700]">{item?.bathrooms}</span>
                    <span>ba</span>
                    <span>|</span>
                    <span className="font-[700]">
                      {item?.sizeSqft ? item?.sizeSqft : item?.lotSqft}
                    </span>
                    <span>sqft.</span>
                    <span>|</span>
                    <span>Active</span>
                  </p>
                  <p className="text-[14px] flex gap-1 mt-2 px-3">
                    <MdLocationPin className="text-[20px] ms-[-3px]" />
                    {item?.address}
                  </p>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Section3b;
