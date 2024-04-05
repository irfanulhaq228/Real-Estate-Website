import React from "react";

import img from "../../assets/img/profile-icon-empty.png";
import tickMark from "../../assets/svg/tick-mark.svg";

import { TfiWorld } from "react-icons/tfi";
import { FiPhoneCall } from "react-icons/fi";

const Section4 = ({ agentInfo, setActiveContact }) => {
  return (
    <div className="section-4 w-[100%] flex flex-col md:flex-row justify-center items-center p-[20px] mt-[70px] lg:p-[80px] gap-[50px] md:gap-[50px] lg:gap-[80px]">
      <div className="w-full flex justify-center md:justify-end">
        <img src={img} width={"300px"} />
      </div>
      <div className="content w-full">
        <p className="text-[35px] font-[600] text-[var(--main-text-color)] text-center md:text-start flex items-center gap-[15px] capitalize">
          {agentInfo?.name}
          <img src={tickMark} width={"30px"} />
        </p>
        <p className="text-[20px] text-[white] mt-[10px] text-center md:text-start">
          {agentInfo?._id}
        </p>
        <p className="text-[14px] text-[white] mt-[20px] text-center md:text-start">
          {agentInfo?.address}
        </p>
        <div className="mt-[40px] flex flex-col gap-[30px] justify-center items-center md:items-start md:justify-start">
          <p className="text-[var(--main-text-color)] text-[22px] flex items-center gap-[25px]">
            <FiPhoneCall />
            <span className="text-[14px] text-[white]">{agentInfo?.phone}</span>
          </p>
          <p className="text-[var(--main-text-color)] text-[22px] flex items-center gap-[25px]">
            <TfiWorld />
            <span className="text-[14px] text-[white]">www.website.com</span>
          </p>
        </div>
        <div className="flex justify-center md:justify-start">
          <button className="button" onClick={() => setActiveContact(true)}>Contact Agent</button>
        </div>
      </div>
    </div>
  );
};

export default Section4;
