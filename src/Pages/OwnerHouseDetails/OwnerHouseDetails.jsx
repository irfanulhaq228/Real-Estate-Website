import React from 'react';

import Navbar from '../../Components/Navbar';
import logo from "../../assets/svg/real-estate-logo.svg";

import Section1 from './Section1';

const OwnerHouseDetails = () => {
  return (
    <div className="owner-house-details pt-[40px] bg-[#F3F3F3]">
        <Navbar activeNav={'OwnerHouseDetails'} logo={logo} />
        <Section1 />
    </div>
  )
}

export default OwnerHouseDetails