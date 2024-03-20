import React from "react";

import img from '../../assets/img/home-sec-10-img.png';

const Section10 = () => {
  return (
    <div className="section-10 p-[13px] md:p-[30px] lg:p-[70px] flex-col md:flex-row gap-[30px] pt-[50px]">
      <div className="w-[100%] flex flex-col items-center md:items-start">
        <p className="text-center md:text-start text-[25px] sm:text-[30px] lg:text-[35px] font-[500]">
          Check Our Recent Project
        </p>
        <p className="text-center md:text-start sm:w-[350px] lg:w-[500px] text-[15px] font-[300] pt-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velita.
        </p>
      </div>
      <div className="w-[100%] flex justify-center">
        <img src={img} width={"90%"} />
      </div>
    </div>
  );
};

export default Section10;
