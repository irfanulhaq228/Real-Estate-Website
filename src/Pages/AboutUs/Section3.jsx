import React from 'react';

import svg1 from "../../assets/svg/about-sec-3-svg-1.svg";
import svg2 from "../../assets/svg/about-sec-3-svg-2.svg";
import svg3 from "../../assets/svg/about-sec-3-svg-3.svg";
import svg4 from "../../assets/svg/about-sec-3-svg-4.svg";
import svg5 from "../../assets/svg/about-sec-3-svg-5.svg";

const Section3 = () => {
  return (
    <div className='section-3 px-[13px] md:px-[30px] lg:px-[70px] py-[70px]'>
      <p className='text-[25px] sm:text-[30px] lg:text-[35px] font-[300]'>What does Zillow stand for</p>
      <p className='text-[16px] font-[300] mt-[20px] lg:w-[600px]'>Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod tempor incididunt ut labore et.</p>
      <div className='icons-main flex-col md:flex-row md:justify-between xl:justify-evenly gap-[30px] xl:gap-[50px] items-center'>
        <div className='flex flex-col items-center'>
          <img src={svg1} />
          <p className='mt-[10px] md:mt-[30px] font-[500]'>Ethics</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src={svg2} />
          <p className='mt-[10px] md:mt-[30px] font-[500]'>Innovation</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src={svg3} />
          <p className='mt-[10px] md:mt-[30px] font-[500]'>Collaboration</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src={svg4} />
          <p className='mt-[10px] md:mt-[30px] font-[500]'>Quality & Comfort</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src={svg5} />
          <p className='mt-[10px] md:mt-[30px] font-[500]'>Sustainibility</p>
        </div>
      </div>
    </div>
  )
}

export default Section3