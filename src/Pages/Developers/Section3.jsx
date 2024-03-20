import React from "react";

import img1 from "../../assets/img/home-sec-2-img-1.png";
import img2 from "../../assets/img/home-sec-2-img-2.png";
import img3 from "../../assets/img/trulia-logo.png";
import img4 from "../../assets/img/redfin-logo.png";

const Section3 = () => {
  return (
    <div className="section-3 px-[13px] md:px-[30px] lg:px-[70px] pt-[100px] pb-[60px] flex flex-col md:flex-row justify-between xl:justify-center gap-[30px] xl:gap-[100px] items-center">
      <div>
        <img src={img1} width={"150px"} />
      </div>
      <div>
        <img src={img2} width={"200px"} />
      </div>
      <div>
        <img src={img3} width={"120px"} />
      </div>
      <div>
        <img src={img4} width={"110px"} />
      </div>
    </div>
  );
};

export default Section3;
