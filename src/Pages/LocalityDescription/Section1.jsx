import React from "react";

import img from "../../assets/img/locality-description-main.png";

const Section1 = () => {
  return (
    <div
      className="section-1 grid grid-cols-2 mt-[30px] pb-[100px]"
      style={{ gridTemplateColumns: "37% 63%" }}
    >
      <div className="ps-[13px] md:ps-[30px] lg:ps-[70px] flex flex-col items-center md:items-start justify-center md:py-[70px] col-span-2 md:col-span-1 gap-[30px]">
        <div>
          <p className="text-[var(--sec-text-color)] text-center md:text-start text-[40px] font-[600]">
            Georgia,
          </p>
          <p className="text-[var(--sec-text-color)] text-center md:text-start text-[40px] font-[600]">
            United States
          </p>
          <p className="mt-[15px] px-[10px] md:px-0 lg:w-[90%] xl:w-[80%] text-center md:text-start">
            Lorem ipsum dolor sit amet, consectet adipisc elit, sed do eiusmod
            tempor incididunt ut labore et.
          </p>
        </div>
      </div>
      <div className="img-box hidden md:block">
        <img src={img} />
      </div>
    </div>
  );
};

export default Section1;
