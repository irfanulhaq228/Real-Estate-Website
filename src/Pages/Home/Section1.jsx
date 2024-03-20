import React from 'react'

import { IoMdSearch } from "react-icons/io";

import img from "../../assets/img/home-main.png";
import logo from "../../assets/svg/real-estate-logo.svg";

const Section1 = () => {
  return (
    <div className='section-1 flex flex-col md:flex-row gap-[30px] mb-[50px]'>
        <div className='flex flex-col items-center md:items-start justify-between lg:w-[37%] md:ps-[30px] lg:ps-[50px] pt-[30px] gap-[30px] md:gap-auto'>
            <div className='w-[75px] lg:w-[90px]'>
                <img src={logo} width={"100%"} />
            </div>
            <div className='heading'>
                <p className='text-[25px] sm:text-[30px] lg:text-[35px] font-[500] text-[#434343] text-center md:text-start'>
                    We Help You Building The Dreams & Bring More Than You Expect
                </p>
            </div>
            <div className='flex items-center search-input-box lg:w-[240px]'>
                <input className='w-[100%] p-[3px] text-[13px] bg-[transparent]' placeholder='Search Properties' />
                <IoMdSearch className='text-[#12B7B6] text-[30px]' />
            </div>
        </div>
        <div className='lg:w-[63%]'>
            <img src={img} width={"100%"} />
        </div>
    </div>
  )
}

export default Section1