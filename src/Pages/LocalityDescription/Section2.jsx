import React from 'react';

import img from "../../assets/img/locality-description-sec-2-img.png";

const Section2 = () => {
  return (
    <div className='section-2 px-[20px] md:px-[50px] lg:px-[100px] xl:px-[150px] py-[20px] md:py-[80px] bg-[black] mt-[20px] lg:h-[600px] xl:h-[650px]'>
        <img src={img} width={"100%"} />
    </div>
  )
}

export default Section2