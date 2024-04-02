import React from 'react';
import img from "../../assets/img/sell-home-sec-2.png";

const Section2 = () => {
  return (
    <div className='section-2 px-[13px] md:px-[30px] lg:px-[70px] py-[80px] flex flex-col md:flex-row items-center'>
        <div className='md:w-[400px] lg:w-[600px]'>
            <p className='text-center md:text-start text-[20px] sm:text-[30px] font-[700] capitalize'>Opt for partnering with an agent or receive a cash offer</p>
            <p className='text-center md:text-start text-[15px] pt-2 md:pe-2'>Easily explore your selling options and receive personalized market value estimates for your home, tailored to your preferences. When you're ready, we'll assist you in selecting the best choice for you.</p>
            <p className='text-center md:text-start text-[16px] pt-5 md:pe-2 font-[600]'>Choose to sell your home directly to Opendoor.</p>
            <p className='text-center md:text-start text-[14px] pt-1 md:pe-2'>Receive a cash offer quickly from our reliable partner, Opendoor, to expedite the sale of your home and bypass the inconvenience of showings.</p>
            <p className='text-center md:text-start text-[16px] pt-3 md:pe-2 font-[600]'>Selling by partnering with agent</p>
            <p className='text-center md:text-start text-[14px] pt-1 md:pe-2'>List your home with a premier agent partner to gain local expertise and potentially increase your sales price.    </p>
        </div>
        <div className='flex-1 flex items-center justify-center'>
            <img src={img} className='object-center object-cover w-[370px]' />
        </div>
    </div>
  )
}

export default Section2