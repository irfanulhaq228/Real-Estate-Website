import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from "../../assets/img/sell-home-sec-4.png";

import { TiTick } from "react-icons/ti";

const Section4 = () => {
  const navigate = useNavigate();
  return (
    <div className='section-2 px-[13px] md:px-[30px] lg:px-[70px] py-[80px] flex flex-col md:flex-row items-center'>
        <div className='md:w-[400px] lg:w-[600px]'>
            <p className='text-center md:text-start text-[20px] sm:text-[30px] font-[700] capitalize'>Market your home independently</p>
            <p className='text-center md:text-start text-[15px] pt-2 md:pe-2'>Opting to sell your home independently is known as for-sale-by-owner (FSBO). The FSBO approach mirrors traditional selling, albeit without the assistance of a real estate agent. In this scenario, you're accountable for home preparation, marketing, showings, and negotiations.</p>
            <div className='flex justify-center md:justify-start'>
              <button className='mt-7 bg-[var(--main-text-color)] text-white text-[15px] font-[600] h-[40px] w-[220px] rounded-[5px] hover:scale-[1.01] active:scale-[0.999]' onClick={() => navigate("/for-sale-by-owner")}>List your home for sale</button>
            </div>
            <p className='text-[16px] mt-7 md:pe-2 font-[600]'>Reasons for opting to sell by owner</p>
            <p className='flex items-center gap-2 text-[14px] mt-1'><TiTick className='scale-[1.2] text-[var(--main-text-color)]' />Bypass the need to pay a commission to a listing agent</p>
            <p className='flex items-center gap-2 text-[14px]'><TiTick className='scale-[1.2] text-[var(--main-text-color)]' />Advertise your listing for free online</p>
            <p className='flex items-center gap-2 text-[14px]'><TiTick className='scale-[1.2] text-[var(--main-text-color)]' />Maintain complete control and flexibility throughout the entire process</p>
        </div>
        <div className='flex-1 flex items-center justify-center'>
            <img src={img} className='object-center object-cover w-[370px]' />
        </div>
    </div>
  )
}

export default Section4