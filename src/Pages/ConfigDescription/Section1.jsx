import React from "react";

import img from "../../assets/img/config-description-main.png";
import svg1 from "../../assets/svg/config-description-sec-1-svg-1.svg";
import svg2 from "../../assets/svg/config-description-sec-1-svg-2.svg";
import sign from "../../assets/svg/property-description-sec-1-sign.svg";

const Section1 = () => {
  return (
    <div
      className="section-1 grid grid-cols-2 mt-[30px] pb-[100px]"
      style={{ gridTemplateColumns: "37% 63%" }}
    >
      <div className="ps-[13px] md:ps-[30px] lg:ps-[70px] flex flex-col items-center md:items-start justify-between md:py-[70px] col-span-2 md:col-span-1 gap-[30px]">
        <div>
          <p className="text-[var(--main-text-color)] text-center md:text-start text-[35px] font-[700]">
            Zellow
          </p>
          <p className="text-[var(--sec-text-color)] text-center md:text-start text-[35px] font-[700]">
            Imperial Heights
          </p>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="flex gap-[20px]">
            <img src={svg1} width={"45px"} />
            <span className="text-[35px] text-[var(--sec-text-color)] font-[700]">
                3 BHK
            </span>
          </div>
          <div className="flex gap-[35px]">
            <img src={svg2} width={"32px"} />
            <span className="text-[30px] text-[var(--sec-text-color)] font-[400]">
              1200 Sq. Ft.
            </span>
          </div>
          <div className="flex gap-[50px]">
            <img src={sign} width={"18px"} />
            <span className="text-[30px] text-[var(--sec-text-color)] font-[400]">
              4.5 M
            </span>
          </div>
        </div>
      </div>
      <div className="img-box hidden md:block">
        <img src={img} />
      </div>
    </div>
  );
};

export default Section1;
