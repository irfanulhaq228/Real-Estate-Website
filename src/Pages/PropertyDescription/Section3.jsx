import React from 'react';

import img from "../../assets/img/property-description-sec-3-img.png";

const Section3 = () => {
  return (
    <div className='section-3 px-[20px] md:px-[50px] lg:px-[100px] xl:px-[150px] py-[20px] md:py-[80px] bg-[black] mt-[60px] lg:h-[600px] xl:h-[650px]'>
        <img src={img} width={"100%"} />
    </div>
  )
}

export default Section3