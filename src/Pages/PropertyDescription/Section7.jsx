import React from 'react';

import logo from "../../assets/img/home-sec-2-img-1.png";

import { TfiWorld } from "react-icons/tfi";
import { FiPhoneCall } from "react-icons/fi";

const Section7 = () => {
  return (
    <div className='section-7 w-[100%] flex flex-col md:flex-row justify-center items-center p-[20px] lg:p-[80px] gap-[50px] md:gap-[50px] lg:gap-[80px]'>
        <div className='logo w-[250px] h-[250px] lg:w-[320px] lg:h-[320px] rounded-full bg-[white] flex justify-center items-center p-[20px] lg:p-[35px]'>
            <img src={logo} width={"100%"} className='mt-[-10px]' />
        </div>
        <div className='content lg:w-[300px]'>
            <p className='text-[35px] font-[600] text-[var(--main-text-color)] text-center md:text-start'>Zillow Group</p>
            <p className='text-[20px] text-[white] mt-[10px] text-center md:text-start'>MHRERAGHY2389</p>
            <p className='text-[70px] font-[600] text-[var(--main-text-color)] text-center md:text-start'>35+</p>
            <p className='text-[25px] text-[white] text-center md:text-start'>Years of Experience</p>
            <p className='text-[15px] text-[white] mt-[40px] text-center md:text-start'>Zillow Excellus</p>
            <div className='mt-[40px] flex gap-[30px] justify-center md:justify-start'>
                <p className='text-[var(--main-text-color)] text-[22px]'><TfiWorld /></p>
                <p className='text-[var(--main-text-color)] text-[22px]'><FiPhoneCall /></p>
            </div>
        </div>
    </div>
  )
}

export default Section7