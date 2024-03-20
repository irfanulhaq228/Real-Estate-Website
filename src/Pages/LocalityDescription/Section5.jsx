import React from "react";

import img from "../../assets/img/locality-description-sec-5-img.png";

const Section5 = () => {
  return (
    <div className="section-5 pt-[100px] pb-[60px]">
      <p className="text-[var(--sec-text-color)] text-center md:text-start text-[40px] font-[600] px-[13px] md:px-[30px] lg:px-[70px]">
        Locality Map
      </p>
      <div className="px-[25px]">
        <img src={img} width={"100%"} />
      </div>
    </div>
  );
};

export default Section5;
