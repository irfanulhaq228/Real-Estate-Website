import React from "react";

import { Collapse } from "antd";
import { FAQs } from "./FAQ";

const LastSection = () => {
  return (
    <div className="last-section last-section px-[13px] md:px-[30px] lg:px-[70px] pb-[80px]">
      <p className="text-center text-[35px] font-[700]">
        Frequently Asked Question
      </p>
      <div className="lg:px-[100px] mt-7">
        <div className="w-full">
            <Collapse accordion style={{fontFamily: "Montserrat", border: "none", backgroundColor: "transparent", borderRadius: "none"}} items={FAQs} defaultActiveKey={['1']} />
        </div>
      </div>
    </div>
  );
};

export default LastSection;
