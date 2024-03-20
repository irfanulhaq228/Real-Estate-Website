import React, { useEffect } from 'react';
import "./index.css";

import Navbar from '../../Components/Navbar';
import logo from "../../assets/svg/real-estate-logo.svg";
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section9 from '../PropertyDescription/Section9';

const LocalityDescription = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, [])
  return (
    <div className="locality-description pt-[40px] bg-[#F3F3F3]">
        <Navbar logo={logo} activeNav={'locality'} />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section9 />
    </div>
  )
}

export default LocalityDescription