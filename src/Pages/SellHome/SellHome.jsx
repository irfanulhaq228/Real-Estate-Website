import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar";

import logo from "../../assets/svg/real-estate-logo.svg";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import LastSection from "./LastSection";

const SellHome = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return <div className="sell-home pt-[40px] bg-[#F3F3F3]">
    <Navbar activeNav={'sellHome'} logo={logo} />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <LastSection />
  </div>;
};

export default SellHome;
