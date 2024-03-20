import React from 'react';

import svg1 from "../../assets/svg/property-description-sec-6-svg-1.svg";
import svg2 from "../../assets/svg/property-description-sec-6-svg-2.svg";
import svg3 from "../../assets/svg/property-description-sec-6-svg-3.svg";
import svg4 from "../../assets/svg/property-description-sec-6-svg-4.svg";
import svg5 from "../../assets/svg/property-description-sec-6-svg-5.svg";
import svg6 from "../../assets/svg/property-description-sec-6-svg-6.svg";
import svg7 from "../../assets/svg/property-description-sec-6-svg-7.svg";
import svg8 from "../../assets/svg/property-description-sec-6-svg-8.svg";

const Section6 = () => {
  return (
    <div className='
            section-6 
            mx-[13px] 
            md:mx-[30px] 
            lg:mx-[70px] 
            pb-[100px] 
            md:grid-cols-2 
            lg:grid-cols-3 
            xl:grid-cols-4 
            items-center 
            justify-center 
            gap-[15px] 
            lg:gap-[40px]
    '>
        <div className='flex flex-col items-center gap-[25px]'>
            <div>
                <img src={svg1} width={"50px"} />
            </div>
            <p className='font-[700] text-[17px] text-[var(--sec-text-color)]'>Home Office</p>
            <p className='text-center w-[220px] font-[500] text-[#909090]'>Lorem ipsum dolor sit amet, consectetur adipis</p>
        </div>
        <div className='flex flex-col items-center gap-[25px]'>
            <div>
                <img src={svg2} width={"50px"} />
            </div>
            <p className='font-[700] text-[17px] text-[var(--sec-text-color)]'>Home Gym</p>
            <p className='text-center w-[220px] font-[500] text-[#909090]'>Lorem ipsum dolor sit amet, consectetur adipis</p>
        </div>
        <div className='flex flex-col items-center gap-[25px]'>
            <div>
                <img src={svg3} width={"50px"} />
            </div>
            <p className='font-[700] text-[17px] text-[var(--sec-text-color)]'>Swimming Pool</p>
            <p className='text-center w-[220px] font-[500] text-[#909090]'>Lorem ipsum dolor sit amet, consectetur adipis</p>
        </div>
        <div className='flex flex-col items-center gap-[25px]'>
            <div>
                <img src={svg4} width={"50px"} />
            </div>
            <p className='font-[700] text-[17px] text-[var(--sec-text-color)]'>Ideal Location</p>
            <p className='text-center w-[220px] font-[500] text-[#909090]'>Lorem ipsum dolor sit amet, consectetur adipis</p>
        </div>
        <div className='flex flex-col items-center gap-[25px]'>
            <div>
                <img src={svg5} width={"50px"} />
            </div>
            <p className='font-[700] text-[17px] text-[var(--sec-text-color)]'>Living Area</p>
            <p className='text-center w-[220px] font-[500] text-[#909090]'>Lorem ipsum dolor sit amet, consectetur adipis</p>
        </div>
        <div className='flex flex-col items-center gap-[25px]'>
            <div>
                <img src={svg6} width={"50px"} />
            </div>
            <p className='font-[700] text-[17px] text-[var(--sec-text-color)]'>Dining Area</p>
            <p className='text-center w-[220px] font-[500] text-[#909090]'>Lorem ipsum dolor sit amet, consectetur adipis</p>
        </div>
        <div className='flex flex-col items-center gap-[25px]'>
            <div>
                <img src={svg7} width={"50px"} />
            </div>
            <p className='font-[700] text-[17px] text-[var(--sec-text-color)]'>Bathrooms</p>
            <p className='text-center w-[220px] font-[500] text-[#909090]'>Lorem ipsum dolor sit amet, consectetur adipis</p>
        </div>
        <div className='flex flex-col items-center gap-[25px]'>
            <div>
                <img src={svg8} width={"50px"} />
            </div>
            <p className='font-[700] text-[17px] text-[var(--sec-text-color)]'>Bedrooms</p>
            <p className='text-center w-[220px] font-[500] text-[#909090]'>Lorem ipsum dolor sit amet, consectetur adipis</p>
        </div>
    </div>
  )
}

export default Section6