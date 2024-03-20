import React from "react";

import svg from "../../assets/svg/about-sec-10-svg.svg";

import svg1 from "../../assets/svg/property-description-sec-8-svg-1.svg";
import svg2 from "../../assets/svg/property-description-sec-8-svg-2.svg";
import svg3 from "../../assets/svg/property-description-sec-8-svg-3.svg";
import svg4 from "../../assets/svg/property-description-sec-8-svg-4.svg";
import svg5 from "../../assets/svg/property-description-sec-8-svg-5.svg";
import svg6 from "../../assets/svg/property-description-sec-8-svg-6.svg";

const Section8 = () => {
  return (
    <div className="section-8 mx-[13px] md:mx-[30px] lg:mx-[100px] flex flex-col md:flex-row mt-[80px] md:gap-[50px] items-center">
      <div className="content w-[100%]">
        <p className="text-[var(--sec-text-color)] text-center md:text-start text-[25px] sm:text-[30px] lg:text-[35px] font-[600]">
          Zillow USA
        </p>
        <div className="buttons justify-center md:justify-start">
            <button>Online Cabs</button>
            <button>Bus</button>
        </div>
        <div className="icons-box grid grid-cols-2 lg:grid-cols-3 mt-[50px] gap-[20px] md:mb-[20px]">
            <div className="flex flex-col items-center">
                <div className="h-[40px]"><img src={svg1} className="h-[90%]" /></div>
                <p className="text-[20px] font-[600] mt-[15px]">13 Minutes</p>
                <p className="text-[#909090] font-[600] mt-[5px]">Airport</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="h-[40px]"><img src={svg2} className="h-[100%]" /></div>
                <p className="text-[20px] font-[600] mt-[15px]">10 Minutes</p>
                <p className="text-[#909090] font-[600] mt-[5px]">Metro</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="h-[40px] flex items-center"><img src={svg3} className="h-[80%]" /></div>
                <p className="text-[20px] font-[600] mt-[15px]">8 Minutes</p>
                <p className="text-[#909090] font-[600] mt-[5px]">Bus Stand</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="h-[40px] flex items-center"><img src={svg4} className="h-[100%]" /></div>
                <p className="text-[20px] font-[600] mt-[15px]">12 Minutes</p>
                <p className="text-[#909090] font-[600] mt-[5px]">Taxi Stand</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="h-[40px] flex items-center"><img src={svg5} className="h-[90%]" /></div>
                <p className="text-[20px] font-[600] mt-[15px]">5 Minutes</p>
                <p className="text-[#909090] font-[600] mt-[5px]">Cycle Stand</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="h-[40px] flex items-center"><img src={svg6} className="h-[80%]" /></div>
                <p className="text-[20px] font-[600] mt-[15px]">15 Minutes</p>
                <p className="text-[#909090] font-[600] mt-[5px]">Car Rental</p>
            </div>
        </div>
      </div>
      <div className="w-[100%]">
        <img src={svg} width={"100%"} />
      </div>
    </div>
  );
};

export default Section8;
