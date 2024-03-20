import React from 'react';

import svg1 from "../../assets/svg/about-sec-4-svg-1.svg";
import svg2 from "../../assets/svg/about-sec-4-svg-2.svg";
import svg3 from "../../assets/svg/about-sec-4-svg-3.svg";

const Section4 = () => {
  return (
    <div className='section-4 mx-[13px] md:mx-[30px] lg:mx-[70px] py-[80px] flex-col md:flex-row gap-[20px] items-center md:items-start xl:justify-center'>
        <div className='sm:w-[400px]'>
            <img src={svg1} width={"100%"} />
        </div>
        <div className='sm:w-[400px]'>
            <img src={svg2} width={"100%"} />
        </div>
        <div className='sm:w-[400px]'>
            <img src={svg3} width={"100%"} />
        </div>
    </div>
  )
}

export default Section4