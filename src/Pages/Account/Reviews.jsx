import React from 'react';
import SubNav from './SubNav';

import logo from "../../assets/svg/real-estate-logo.svg";
import Navbar from '../../Components/Navbar';

const Reviews = () => {
  return (
    <div className="account pt-[40px] bg-[#F3F3F3]">
      <Navbar activeNav={"account"} logo={logo} />
      <div className='section-1 mx-[13px] md:mx-[30px] lg:mx-[70px] py-[30px] flex'>
        {/* sub-navbar */}
        <SubNav activeSubNav = {"reviews"} />
        {/* content */}
        <div className='bg-gray-200 flex-1 rounded md:p-5'>
            <p className='text-[15px] font-[700]'>Reviews Information</p>
        </div>
      </div>
    </div>
  );
}

export default Reviews