import React from 'react';

import img from "../../assets/img/about-sec-1-img.png";

const Section1 = () => {
  return (
    <div className='mx-[13px] md:mx-[30px] lg:mx-[70px] md:px-[40px] lg:px-[80px] py-[30px]'>
        <img src={img} width={"100%"} />
    </div>  
  )
}

export default Section1