import React from 'react';

import img from "../../assets/img/empty-user.png";

import {
    IoMdStar,
    IoMdStarHalf,
    IoMdStarOutline
  } from "react-icons/io";

const Section3b = () => {
  return (
    <div className='section-3b mx-[13px] md:mx-[30px] lg:mx-[70px] py-[30px]'>
        <p className='text-[20px] sm:text-[30px] font-[700] mb-3'>Ratings & reviews (2)</p>
        <div className='flex py-5 border-b border-gray-300 gap-5'>
            <div className='w-[50px]'>
                <img src={img} width={"100%"} />
            </div>
            <div className='flex-1 flex flex-col'>
                <p className='text-[14px] font-[600]'>Adnan Yousaf</p>
                <p className='text-[12px] text-gray-400 font-[500]'>2 weeks ago</p>
                <div className='flex mt-3 text-[20px]'>
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStarHalf />
                    <IoMdStarOutline />
                </div>
                <p className='text-[14px]'>A review is a survey over a whole subject or division of it, or especially an article making a critical reconsideration and summary of something written: a review of the latest book on Chaucer. A criticism is a judgment, usually in an article, either favorable or unfavorable or both: a criticism of a proposed plan.</p>
            </div>
        </div>
        <div className='flex py-5 border-b border-gray-300 gap-5'>
            <div className='w-[50px]'>
                <img src={img} width={"100%"} />
            </div>
            <div className='flex-1 flex flex-col'>
                <p className='text-[14px] font-[600]'>Adnan Yousaf</p>
                <p className='text-[12px] text-gray-400 font-[500]'>2 weeks ago</p>
                <div className='flex mt-3 text-[20px]'>
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStarHalf />
                    <IoMdStarOutline />
                </div>
                <p className='text-[14px]'>A review is a survey over a whole subject or division of it, or especially an article making a critical reconsideration and summary of something written: a review of the latest book on Chaucer. A criticism is a judgment, usually in an article, either favorable or unfavorable or both: a criticism of a proposed plan.</p>
            </div>
        </div>
    </div>
  )
}

export default Section3b