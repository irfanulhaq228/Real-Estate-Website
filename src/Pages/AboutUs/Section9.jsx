import React from "react";

import img from "../../assets/img/about-sec-9-img.png";

const Section9 = () => {
  return (
    <div className="section-9 mx-[13px] md:mx-[30px] lg:mx-[70px]">
      <p className="text-[25px] sm:text-[30px] lg:text-[35px] font-[300]">
        Client Testimony
      </p>
      <div className="pt-[30px] px-[15px] md:px-[30px] lg:px-[70px] xl:px-[100px]">
        <div className="flex flex-col md:flex-row gap-[30px] lg:gap-[50px] xl:gap-[50px] items-center">
          <div className="md:w-[500px] lg:w-[600px] xl:w-[710px]">
            <img src={img} width={"100%"} />
          </div>
          <div className="w-[100%] text-[17px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section9;
