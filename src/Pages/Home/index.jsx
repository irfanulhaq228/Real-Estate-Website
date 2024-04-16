import React, { useEffect } from 'react';
import "./index.css";

import Navbar from '../../Components/Navbar';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Section8 from './Section8';
import Section9 from './Section9';
import Section10 from './Section10';
import Section11 from './Section11';
import Section3b from './Section3b';
import Section6b from './Section6b';

const Home = ({ setSelectedHome, setFilterHomesList }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, []);
  return (
    <div className='home'>
        <Section1 />
        <Navbar activeNav={'home'} />
        <Section2 />
        <Section3 />
        <Section3b setSelectedHome={setSelectedHome} setFilterHomesList={setFilterHomesList} />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section6b setFilterHomesList={setFilterHomesList} />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
        <Section11 />
    </div>
  )
}

export default Home