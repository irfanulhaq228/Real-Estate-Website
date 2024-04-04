import React from "react";

import man1 from "../../assets/img/profile-icon-empty.png";
import { IoLocationOutline } from "react-icons/io5";

const Section1 = ({ agentInfo }) => {
  return (
    <div className="section-1 mx-[13px] md:mx-[30px] lg:mx-[100px] pt-[40px] flex flex-col md:flex-row gap-[20px] sm:gap-[30px] lg:gap-[50px] xl:gap-[80px] items-center md:items-start">
      <div className="img-box">
        <img src={man1} width={"100%"} />
        <p className="text-[18px] font-[700] ps-[25px] pt-[20px] capitalize">{agentInfo?.name}</p>
        <p className="text-[18px] font-[400] ps-[25px] mt-[5px]">
          {agentInfo?._id}
        </p>
      </div>
      <div className="flex-1 content-box flex flex-col gap-[20px] justify-items-center">
        <div className="flex gap-5 flex-col lg:flex-row items-center md:items-start">
          <div className="box px-[40px] md:px-[15px] lg:px-[40px]">
            <p className="text-[20px] font-[700] text-[var(--sec-text-color)]">
              Years of Experience
            </p>
            <p className="text-[70px] font-[600] text-[var(--main-text-color)] text-center mt-[-10px]">
              13
            </p>
          </div>
          <div className="box px-[52px] md:px-[28px] lg:px-[50px]">
            <p className="text-[20px] font-[700] text-[var(--sec-text-color)] text-center">
              Year Established
            </p>
            <p className="text-[70px] font-[600] text-[var(--main-text-color)] text-center mt-[-10px]">
              2004
            </p>
          </div>
        </div>
        <div>
          <div className="mt-[30px]">
            <div>
              <p className="flex gap-[10px]">
                <IoLocationOutline className="text-[30px] text-[#C0C0C0]" />
                <span className="text-[22px] font-[500]">{agentInfo?.address}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
