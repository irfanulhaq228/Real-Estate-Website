import React from "react";

import img1 from "../../assets/svg/home-sec-8-svg-1.svg";
import img2 from "../../assets/svg/home-sec-8-svg-2.svg";
import img3 from "../../assets/svg/home-sec-8-svg-3.svg";

const Section6 = () => {
  return (
    <div className="section-6 mx-[13px] md:mx-[30px] lg:mx-[70px] py-[100px]">
      <p className="text-[25px] sm:text-[30px] lg:text-[35px] font-[300]">
        What We Do
      </p>
      <div className="mt-[50px] flex flex-col items-center md:items-start md:flex-row justify-between xl:justify-center gap-[50px] lg:gap-[35px] xl:gap-[50px]">
        <div className="sm:w-[300px] md:w-[350px] flex flex-col justify-between items-center gap-[20px] md:gap-[50px]">
          <div className="px:[20px] md:px-[35px] lg:px-[40px] xl:px-[60px] flex justify-center">
            <img src={img1} width={"100%"} />
          </div>
          <div className="px-[10px] flex flex-col justify-center gap-[5px]">
            <p className="text-[16px] font-[700] text-center">3D Planning</p>
            <p className="text-[15px] font-[400] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>
          </div>
        </div>
        <div className="sm:w-[300px] md:w-[350px] flex flex-col justify-between items-center gap-[20px] md:gap-[50px]">
          <div className="px:[20px] md:px-[35px] lg:px-[40px] xl:px-[60px] flex justify-center">
            <img src={img2} width={"100%"} />
          </div>
          <div className="px-[10px] flex flex-col justify-center gap-[5px]">
            <p className="text-[16px] font-[700] text-center">Web Platform</p>
            <p className="text-[15px] font-[400] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>
          </div>
        </div>
        <div className="sm:w-[300px] md:w-[350px] flex flex-col justify-between items-center gap-[20px] md:gap-[50px]">
          <div className="px:[20px] md:px-[35px] lg:px-[40px] xl:px-[60px] flex justify-center">
            <img src={img3} width={"100%"} />
          </div>
          <div className="px-[10px] flex flex-col justify-center gap-[5px]">
            <p className="text-[16px] font-[700] text-center">Marketing</p>
            <p className="text-[15px] font-[400] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
