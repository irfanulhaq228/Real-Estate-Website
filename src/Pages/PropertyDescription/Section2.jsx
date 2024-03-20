import React from "react";
import { Slider } from "antd";

import img from "../../assets/img/home-sec-2-img-1.png";
import img1 from "../../assets/img/property-description-sec-2-img-1.png";
import img2 from "../../assets/img/property-description-sec-2-img-2.png";

const Section2 = () => {
  return (
    <div className="section-2 mx-[13px] md:mx-[30px] lg:mx-[70px] flex flex-col md:flex-row">
      <div className="w-[100%] left-side">
        <div className="w-[100%] flex justify-center md:justify-start mt-[60px]">
          <img src={img} width={"200px"} />
        </div>
        <p className="mt-[20px] font-[700] text-[20px] text-[var(--sec-text-color)] text-center md:text-start">
          Construction Progress
        </p>
        <Slider
          className="progress-bar rounded-full lg:w-[400px]"
          defaultValue={75}
          disabled={false}
        />
      </div>
      <div className="w-[100%] right-side flex justify-end">
        <div>
          <img src={img1} width={"220px"} />
        </div>
        <div>
          <img src={img2} width={"220px"} />
        </div>
      </div>
    </div>
  );
};

export default Section2;
