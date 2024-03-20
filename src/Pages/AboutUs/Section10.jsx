import React from "react";

import svg from "../../assets/svg/about-sec-10-svg.svg";

import {FaFacebookF, FaInstagram, FaTelegramPlane, FaTwitter, FaYoutube} from "react-icons/fa";

const Section10 = () => {
  return (
    <div className="section-10 mx-[13px] md:mx-[30px] lg:mx-[100px] flex flex-col md:flex-row mt-[30px] md:gap-[50px] items-center">
      <div className="w-[100%]">
        <p className="text-center md:text-start text-[25px] sm:text-[30px] lg:text-[35px] font-[300]">
          Where are we Located?
        </p>
        <p className="text-center md:text-start w-[100%] text-[17px] mt-[40px]">
          Zillow provides a quality, consumer driver platform for new property
          buyers. For the first time, prospective buyers will be able to access
          every listing consisting of New Age Homes or properties with amenities
          and life style features of the 21st century all in one place.
        </p>
        <p className="text-center md:text-start w-[100%] text-[17px] mt-[20px]">
          Let's meet!!
        </p>
        <p className="text-center md:text-start w-[100%] text-[17px] text-[var(--sec-text-color)] mt-[20px] font-[600]">
            Zillow Excelus,
        </p>
        <div className="icons-box mt-[15px] flex gap-[10px] md:gap-[20px] justify-center md:justify-start">
            <p><FaFacebookF /></p>
            <p><FaTwitter /></p>
            <p><FaInstagram /></p>
            <p><FaYoutube /></p>
            <p><FaTelegramPlane /></p>
        </div>
      </div>
      <div className="w-[100%]">
        <img src={svg} width={"100%"} />
      </div>
    </div>
  );
};

export default Section10;
