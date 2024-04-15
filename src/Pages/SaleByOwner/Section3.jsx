import React from "react";

import { BsHouseGear } from "react-icons/bs";
import { AiOutlineSound } from "react-icons/ai";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Section3 = () => {
  return (
    <div className="section-3 px-[13px] md:px-[30px] lg:px-[70px] pb-[100px]">
      <p className="text-center md:text-start text-[20px] font-[700] capitalize">
        What's the purpose of posting on our website?
      </p>
      <div className="mt-5 flex flex-col gap-3">
        <div className="flex items-center gap-3 bg-[var(--main-text-color-blur)] rounded">
          <p className="w-[70px] h-[70px] flex justify-center items-center">
            <BsHouseGear className="text-[40px] text-[var(--main-text-color)]" />
          </p>
          <p className="text-[14px] font-[500]">Create a listing at no cost, featuring videos and unlimited photos.</p>
        </div>
        <div className="flex items-center gap-3 bg-[var(--main-text-color-blur)] rounded">
          <p className="w-[70px] h-[70px] flex justify-center items-center">
            <AiOutlineSound className="text-[40px] text-[var(--main-text-color)]" />
          </p>
          <p className="text-[14px] font-[500]">Your house will be showcased on Zillow and Trulia, connecting with the widest audience of online home seekers.</p>
        </div>
        <div className="flex items-center gap-3 bg-[var(--main-text-color-blur)] rounded">
          <p className="w-[70px] h-[70px] flex justify-center items-center">
            <IoIosCheckmarkCircleOutline className="text-[40px] text-[var(--main-text-color)]" />
          </p>
          <p className="text-[14px] font-[500]">Home buyers get immediate email notifications regarding new listings.</p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
