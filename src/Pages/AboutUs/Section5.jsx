import React from 'react';

import svg1 from "../../assets/svg/about-sec-5-svg-1.svg";
import svg2 from "../../assets/svg/about-sec-5-svg-2.svg";
import svg3 from "../../assets/svg/about-sec-5-svg-3.svg";

const Section5 = () => {
  return (
    <div className='section-5 mx-[13px] md:mx-[30px] lg:mx-[70px]'>
        <p className='text-[25px] sm:text-[30px] lg:text-[35px] font-[300]'>Zillow Objectives</p>
        <div className='boxs mt-[50px]'>
            <div className='flex-col md:flex-row mx-[10px] md:mx-[50px] lg:mx-[80px] gap-[20px] md:gap-[40px] lg:gap-[80px] items-center'>
                <div>
                    <img src={svg1} width={"120px"} />
                </div>
                <div className='text-center md:text-start w-[100%]'>Introducing to you a UI & UX focused website with a cutting edge technology as a platform for digital marketing and lead generation.</div>
            </div>
            <div className='flex-col md:flex-row mx-[10px] md:mx-[50px] lg:mx-[80px] gap-[20px] md:gap-[40px] lg:gap-[80px] items-center'>
                <div>
                    <img src={svg2} width={"120px"} />
                </div>
                <div className='text-center md:text-start w-[100%]'>Establishing the first stepping stone in the micro markets of Navi Mumbai, and later leaving footprints as a standard bearer in the micro markets of Mumbai. We strive to always have a dedicated focus on the consumer's requirements and expectations</div>
            </div>
            <div className='flex-col md:flex-row mx-[10px] md:mx-[50px] lg:mx-[80px] gap-[20px] md:gap-[40px] lg:gap-[80px] items-center'>
                <div>
                    <img src={svg3} width={"120px"} />
                </div>
                <div className='text-center md:text-start w-[100%]'>Introducing to you a UI & UX focused website with a cutting edge technology as a platform for digital marketing and lead generation.</div>
            </div>
        </div>
    </div>
  )
}

export default Section5