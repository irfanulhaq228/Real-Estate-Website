import React from 'react';

import img from "../../assets/img/find-agent-sec-1.jpg";

const Section1 = () => {
  return (
    <div className='section-1 px-[13px] md:px-[30px] lg:px-[70px] mt-[10px]'>
        <div style={{backgroundImage: `url(${img})`}} className='h-[470px] bg-cover rounded-[20px]'>
            <div className='h-[470px] w-full flex flex-col justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-[20px] px-[5px] sm:px-[50px]'>
                <p className='text-center text-white text-[30px] sm:text-[35px] font-[600] capitalize mt-8' style={{textShadow: "3px 3px 4px black"}}>An exceptional agent can make a significant impact</p>
                <p className='text-center text-white font-[500] text-gray-200 text-[14px] lg:px-[100px] mt-3' style={{textShadow: "1px 1px 2px black"}}>The fact that 89% of buyers enlisted an agent last year speaks volumes — a local agent possesses invaluable insights into your market and can expertly navigate you through the entire buying process.</p>
                <div className='flex justify-center'><button className='mt-10 bg-[var(--main-text-color)] text-white text-[15px] font-[600] h-[40px] w-[240px] rounded-[5px] hover:scale-[1.01] active:scale-[0.999]'>Connect with a local agent</button></div>
            </div>
        </div>
    </div>
  )
}

export default Section1