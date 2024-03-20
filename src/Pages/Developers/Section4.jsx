import React from 'react';

import img1 from "../../assets/img/developers-sec-4-img-1.png";

const Section4 = () => {
  return (
    <div className='section-4 px-[10px] lg:px-[30px] pb-[100px] grid grid-cols-1 md:grid-cols-2'>
        <div className='left-boxes'>
            <div>
                <img src={img1} width={"100%"} />
            </div>
            <div>
                <img src={img1} width={"100%"} />
            </div>
        </div>
        <div className='right-boxes md:mt-[100px]'>
            <div>
                <img src={img1} width={"100%"} />
            </div>
            <div>
                <img src={img1} width={"100%"} />
            </div>
        </div>
    </div>
  )
}

export default Section4