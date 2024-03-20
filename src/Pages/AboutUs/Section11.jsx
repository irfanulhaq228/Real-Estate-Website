import React from "react";

import img from "../../assets/img/about-sec-10-img.png";

const Section11 = () => {
  return (
    <div
      className="section-11 py-[100px] grid md:grid-cols-2"
      style={{ gridTemplateColumns: "47% 53%" }}
    >
      <div className="content p-[15px] sm:p-[50px] col-span-2 md:col-span-1">
        <p className="font-[500] text-[22px] text-[17px]">
          Zillow provides a quality, consumer driven Real Estate portal for
          new-home buyers
        </p>
        <p className="text-[17px] font-[300] text-[13px] mt-[40px]">
          Zillow business model is specially designed as a medium for developers
          to sell their inventory through our vast network of real estate
          brokers.
        </p>
        <p className="text-[17px] font-[300] text-[13px] mt-[30px]">
          We help developers reach their potential customers and connect with
          them effectively
        </p>
        <p className="text-[17px] font-[300] text-[13px] mt-[30px]">
          Introducing Zillow 3D a redefined way of interacting with real estate.
          Use Zillow.com for sales presentations in project booking offices
        </p>
        <p className="text-[17px] font-[300] text-[13px] mt-[30px]">
          Investors around the world looking to invest in US real estate can now
          surf through the listings in an innovative way from the most
          distinguished developers in US via a redefined 3D technology.
        </p>
      </div>
      <div className="hidden md:block img-box">
        <img src={img} />
      </div>
    </div>
  );
};

export default Section11;
