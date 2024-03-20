import React, { useEffect } from "react";
import "./index.css";
import Navbar from "../../Components/Navbar";

import logo from "../../assets/svg/real-estate-logo.svg";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";
import Section10 from "./Section10";
import Section11 from "./Section11";
import Section12 from "./Section12";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, [])
  return (
    <div className="about-us pt-[40px] bg-[#F3F3F3]">
      <Navbar activeNav={"about"} logo={logo} />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Section12 />
    </div>
  );
};

export default AboutUs;
