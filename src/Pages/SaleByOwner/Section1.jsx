import React from 'react';

import img from "../../assets/img/sell-by-owner.png";

const Section1 = () => {
  return (
    <div className='section-1 px-[13px] md:px-[30px] lg:px-[70px] mt-[10px]'>
        <div style={{backgroundImage: `url(${img})`}} className='h-[470px] bg-cover bg-center rounded-[20px]'></div>
    </div>
  )
}

export default Section1