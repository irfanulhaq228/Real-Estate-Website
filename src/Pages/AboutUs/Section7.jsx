import React from "react";

import img1 from "../../assets/img/home-sec-2-img-1.png";
import img2 from "../../assets/img/home-sec-2-img-2.png";
import img3 from "../../assets/img/trulia-logo.png";
import img4 from "../../assets/img/redfin-logo.png";

const Section7 = () => {
  return (
    <div className="section-7 mx-[13px] md:mx-[30px] lg:mx-[70px]">
      <p className="text-[25px] sm:text-[30px] lg:text-[35px] font-[300]">
        Our Clients
      </p>
      <div className="flex flex-col md:flex-row gap-[40px] lg:gap-[50px] xl:gap-[100px] items-center md:items-start mt-[50px]">
        <div>
            <img src={img1} width={"200px"} />
        </div>
        <div>
            <img src={img2} width={"220px"} className="md:mt-[15px]" />
        </div>
        <div>
            <img src={img3} width={"160px"} className="md:mt-[5px]" />
        </div>
        <div>
            <img src={img4} width={"140px"} className="md:mt-[10px]"/>
        </div>
      </div>
    </div>
  );
};

export default Section7;
