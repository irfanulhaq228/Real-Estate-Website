import React from 'react';

import img1 from "../../assets/img/home-sec-5-img-1.png";

const Section5 = () => {
  return (
    <div className='section-5 mx-[13px] md:mx-[30px] lg:mx-[70px] xl:flex xl:flex-col xl:items-center'>
        <p className='text-[25px] sm:text-[30px] lg:text-[35px] font-[500] w-[100%] text-start'>Property Selection Process</p>
        <p className='text-[15px] font-[500] mt-[20px] lg:w-[600px] xl:w-[100%] text-start'>Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod tempor incididunt ut labore et.</p>
        <div className='w-[100%] xl:w-[1200px] px-0 md:px-[20px] lg:px-[40px] xl:px-[80px] mt-[50px]'>
            <img src={img1} />
        </div>
    </div>
  )
}

export default Section5