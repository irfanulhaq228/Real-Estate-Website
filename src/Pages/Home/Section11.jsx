import React from "react";

import img from "../../assets/img/home-sec-11-img.png";
import logo from "../../assets/svg/white-logo.svg";

const Section11 = () => {
  return (
    <div className="section-11">
      <div className="img hidden md:block">
        <img src={img} />
      </div>
      <div className="content md:px-[30px] px-[40px] lg:px-[80px] py-[80px] lg:py-[100px]">
        <img src={logo} width={"80px"} />
        <p className="text-[17px] mt-[20px] font-[300] text-[#E0E0E0]">
          Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod
          tempor incididunt ut labore et.
        </p>
        <div className="input-box">
            <input className="input" placeholder="Your Name" />
            <input className="input" placeholder="youremailaddress@mail.com" />
        </div>
        <button className="button">Get in touch with us</button>
      </div>
    </div>
  );
};

export default Section11;
