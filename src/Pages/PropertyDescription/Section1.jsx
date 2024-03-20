import React from 'react';

import img from "../../assets/img/property-description-main.png";
import sign from "../../assets/svg/property-description-sec-1-sign.svg";

const Section1 = () => {
  return (
    <div className='section-1 grid grid-cols-2 mt-[30px] pb-[100px]' style={{ gridTemplateColumns: '37% 63%' }}>
        <div className='ps-[13px] md:ps-[30px] lg:ps-[70px] flex flex-col items-center md:items-start justify-between md:py-[70px] col-span-2 md:col-span-1 gap-[30px]'>
            <div>
                <p className='text-center md:text-start uppercase text-[20px] text-[var(--main-text-color)] font-[600]'>Zillo Group</p>
                <p className='text-center md:text-start text-[35px] font-[700]'>Imperial Heights</p>
                <p className='text-center md:text-start text-[17px] text-[#9E9E9E] font-[600]'>67, Nerul, Navi Mumbai, Maharashtra</p>
            </div>
            <div className='flex items-center gap-[20px]'>
                <img src={sign} width={"18px"} />
                <span className='text-[30px] text-[var(--sec-text-color)] font-[600]'>4.5 M - 6 M</span>
            </div>
            <div>
                <p className='text-center md:text-start text-[#9E9E9E] font-[600] text-[18px]'>Launching on</p>
                <p className='text-center md:text-start text-[var(--main-text-color)] text-[30px] font-[600]'>27th July 2024</p>
            </div>
        </div>
        <div className='img-box hidden md:block'>
            <img src={img} />
        </div>
    </div>
  )
}

export default Section1