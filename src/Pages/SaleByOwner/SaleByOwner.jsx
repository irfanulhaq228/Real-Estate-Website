import React, { useEffect } from 'react';

import Section1 from './Section1';
import Section2 from './Section2';

import Navbar from '../../Components/Navbar';

import logo from "../../assets/svg/real-estate-logo.svg";
import Section3 from './Section3';

const SaleByOwner = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <div className="sell-by-owner pt-[40px] bg-[#F3F3F3]">
      <Navbar activeNav={'sellHomeByOwner'} logo={logo} />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  )
}

export default SaleByOwner