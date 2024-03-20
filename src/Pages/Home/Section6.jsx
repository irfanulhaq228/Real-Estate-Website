import React from "react";

import img1 from "../../assets/img/home-sec-6-img-1.png";
import img2 from "../../assets/img/home-sec-6-img-2.png";
import img3 from "../../assets/img/home-sec-6-img-3.png";

const Section6 = () => {
  return (
    <div className="section-6">
      <div className="mx-[13px] md:mx-[30px] lg:mx-[70px]">
        <p className="text-[25px] sm:text-[30px] lg:text-[35px] font-[500]">
          Localities
        </p>
        <p className="text-[15px] font-[500] mt-[20px] lg:w-[600px]">
          Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod
          tempor incididunt ut labore et.
        </p>
      </div>
      <div className="imgs-box flex-col md:flex-row md:justify-evenly xl:justify-center md:gap-[15px] lg:gap-[23px] xl:gap-[50px]">
        <div className="mx-[20px] md:mx-0 md:w-[280px] lg:w-[350px] md:h-[260px] lg:h-[300px]">
          <img src={img1} className="img" />
        </div>
        <div className="mx-[20px] md:mx-0 md:w-[280px] lg:w-[350px] md:h-[260px] lg:h-[300px]">
          <img src={img2} className="img" />
        </div>
        <div className="mx-[20px] md:mx-0 md:w-[280px] lg:w-[350px] md:h-[260px] lg:h-[300px]">
            <img src={img3} className="img" />
        </div>
      </div>
    </div>
  );
};

export default Section6;
