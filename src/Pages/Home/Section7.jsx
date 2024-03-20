import React, { useState } from "react";
import FAQs from "./Section7Dropdown.jsx";

import img from "../../assets/img/home-sec-7-img.png";

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import sendVector from "../../assets/svg/home-sec-7-send.svg";
import { IoIosArrowDown } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";

const Section7 = () => {
  const [clicked, setClicked] = useState("");
  const [paragraph, setParagraph] = useState("");
  const fn_clickArrow = (id) => {
    if (id != clicked) {
      setClicked(id);
      setParagraph(id);
    } else {
      setClicked("");
      setParagraph("");
    }
  };
  return (
    <div className="section-7 flex flex-col md:flex-row">
      <div className="w-[100%] content p-[50px] md:py-[30px] lg:py-[50px] md:px-[80px] lg:px-[100px]">
        <p className="text-[25px] sm:text-[30px] lg:text-[35px] font-[400]">
          About Us
        </p>
        <p className="mt-[40px] md:mt-[60px] text-[20px] font-[300]">
          Key points about company
        </p>
        <p className="font-[300] mt-[25px] md:mt-[35px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
        <div className="dropdowns flex flex-col gap-[15px] mt-[50px]">
          {FAQs?.map((item) => (
            <div
              className={`box cursor-pointer ${
                clicked == item?.id ? "box-large" : "box-small"
              }`}
              onClick={() => fn_clickArrow(item?.id)}
            >
              <div className="flex justify-between items-center h-[50px] border-b border-[var(--sec-text-color)]">
                <p className="capitalize text-[14px] font-[500] flex items-center">
                    <BsThreeDots />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item?.question}
                </p>
                <p
                  className={`arrow-icon ${
                    clicked == item?.id
                      ? "arrow-icon-active"
                      : "arrow-icon-inactive"
                  }`}
                  onClick={() => fn_clickArrow(item?.id)}
                >
                  <IoIosArrowDown />
                </p>
              </div>
              {paragraph == item?.id && (
                <div className="mt-[10px]">
                  <p
                    className="text-[14px] text-[#696969]"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="icons mt-[40px] md:mt-[60px] flex gap-[12px] md:gap-[23px] lg:gap-[30px]">
          <p className="cursor-pointer text-[20px]">
            <FaFacebookF />
          </p>
          <p className="cursor-pointer text-[20px]">
            <FaTwitter />
          </p>
          <p className="cursor-pointer text-[20px]">
            <FaInstagram />
          </p>
          <p className="cursor-pointer text-[20px]">
            <FaYoutube />
          </p>
          <p className="cursor-pointer w-[22px]">
            <img src={sendVector} width={"100%"} />
          </p>
        </div>
      </div>
      <div className="hidden md:block w-[100%] img-box">
        <img src={img} className="img" />
      </div>
    </div>
  );
};

export default Section7;
