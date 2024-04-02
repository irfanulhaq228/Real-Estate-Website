import React from 'react';
import img from "../../assets/img/sell-home-sec-3.png";

import { TiTick } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';

const Section3 = () => {
  const navigate = useNavigate();
  return (
    <div className='section-2 px-[13px] md:px-[30px] lg:px-[70px] flex flex-col md:flex-row items-center'>
        <div className='md:w-[400px] lg:w-[600px]'>
            <p className='text-center md:text-start text-[20px] sm:text-[30px] font-[700] capitalize'>Sell your home conventionally with an agent</p>
            <p className='text-center md:text-start text-[15px] pt-2 md:pe-2'>Collaborate with a real estate agent who can assist you throughout the process, from preparing your home to listing and marketing it.</p>
            <div className='flex justify-center md:justify-start'><button className='mt-7 bg-[var(--main-text-color)] text-white text-[15px] font-[600] h-[40px] w-[220px] rounded-[5px] hover:scale-[1.01] active:scale-[0.999]' onClick={() => navigate("/find-agent")}>Find an Agent</button></div>
            <p className='text-[16px] mt-7 md:pe-2 font-[600]'>Reasons for selling in traditional manner</p>
            <p className='flex items-center gap-2 text-[14px] mt-1'><TiTick className='scale-[1.2] text-[var(--main-text-color)]' />Possibility of competitive bidding</p>
            <p className='flex items-center gap-2 text-[14px]'><TiTick className='scale-[1.2] text-[var(--main-text-color)]' />Availability of expert knowledge in the local market</p>
            <p className='flex items-center gap-2 text-[14px]'><TiTick className='scale-[1.2] text-[var(--main-text-color)]' />Receive assistance with negotiation and offer review</p>
            <p className='flex items-center gap-2 text-[14px]'><TiTick className='scale-[1.2] text-[var(--main-text-color)]' />Ease through a challenging process with a committed advisor</p>
            <p className='text-center md:text-start text-[16px] mt-5 md:pe-2 font-[600]'>Selling through traditional methods</p>
            <p className='text-center md:text-start text-[14px] pt-2 md:pe-2'>If you determine that this approach suits your needs, conduct interviews with agents and choose a professional who aligns with your requirements. Your selected agent will then assist you in navigating the process of selling your home.</p>
        </div>
        <div className='flex-1 flex items-center justify-center'>
            <img src={img} className='object-center object-cover w-[370px]' />
        </div>
    </div>
  )
}

export default Section3