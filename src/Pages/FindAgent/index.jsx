import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar';

import logo from "../../assets/svg/real-estate-logo.svg";
import Section1 from './Section1';
import Section2 from './Section2';

const FindAgent = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <div className='findAgent pt-[40px] bg-[#F3F3F3]'>
        <Navbar activeNav={'findAgent'} logo={logo} />
        <Section1 />
        <Section2 />
    </div>
  )
}

export default FindAgent