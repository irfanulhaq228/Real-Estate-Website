import React from "react";

import man1 from "../../assets/img/man-1.png";
import { IoLocationOutline } from "react-icons/io5";

const Section1 = () => {
  return (
    <div className="section-1 mx-[13px] md:mx-[30px] lg:mx-[100px] py-[100px] flex flex-col md:flex-row gap-[20px] sm:gap-[30px] lg:gap-[50px] xl:gap-[80px] items-center md:items-start">
      <div className="img-box">
        <img src={man1} width={"100%"} />
        <p className="text-[18px] font-[700] ps-[25px] pt-[20px]">Mark Devon</p>
        <p className="text-[18px] font-[400] ps-[25px] mt-[5px]">
          MHRERAGHY2389
        </p>
      </div>
      <div className="content-box grid grid-cols-2 gap-[20px] justify-items-center items-center">
        <div className="col-span-2 lg:col-span-1 box px-[40px]">
          <p className="text-[20px] font-[700] text-[var(--sec-text-color)]">
            Years of Experience
          </p>
          <p className="text-[70px] font-[600] text-[var(--main-text-color)] text-center mt-[-10px]">
            13
          </p>
        </div>
        <div className="col-span-2 lg:col-span-1 box px-[55px] xl:px-[65px]">
          <p className="text-[20px] font-[700] text-[var(--sec-text-color)] text-center">
            Year Established
          </p>
          <p className="text-[70px] font-[600] text-[var(--main-text-color)] text-center mt-[-10px]">
            2004
          </p>
        </div>
        <div>
          <p className="text-[16px] col-span-3">
            <span className="text-[var(--main-text-color)] font-[700]">
              Market Presence
            </span>{" "}
            in Georgia, USA
          </p>
          <div className="mt-[30px]">
            <div>
              <p className="flex gap-[10px]">
                <IoLocationOutline className="text-[30px] text-[#C0C0C0]" />
                <span className="text-[22px] font-[500]">Narikala</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
