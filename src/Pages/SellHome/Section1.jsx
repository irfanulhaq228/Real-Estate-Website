import React from 'react';

import img from "../../assets/img/sell-home-sec-1.jpg";

const Section1 = () => {
  return (
    <div className='section-1 px-[13px] md:px-[30px] lg:px-[70px] mt-[10px]'>
        <div style={{backgroundImage: `url(${img})`}} className='h-[470px] bg-cover bg-center rounded-[20px]'>
            <div className='h-[470px] w-full flex flex-col justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-[20px] px-[5px] sm:px-[50px]'>
                <p className='text-center text-white text-[30px] sm:text-[50px] font-[600]' style={{textShadow: "3px 3px 4px black"}}>Sell Your Home With Assurance</p>
                <p className='text-center font-[500] text-gray-200 text-[14px] sm:text-[18px]' style={{textShadow: "1px 1px 2px black"}}>User can freely sell thier homes and move forward</p>
            </div>
        </div>
    </div>
  )
}

export default Section1