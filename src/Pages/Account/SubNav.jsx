import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { BsDot } from "react-icons/bs";

const SubNav = ({ activeSubNav }) => {
  const navigate = useNavigate();
  const fn_subNavigate = (navText) => {
    if(navText === "profile"){
        navigate("/account")
    }else{
        navigate(`/account/${navText}`)
    }
  };
  return (
    <div className="lg:w-[200px] md:p-5">
      <p className="text-[15px] font-[700]">Account Info</p>
      <div className="flex flex-col gap-2 mt-3 text-[13px] font-[500]">
        <p
          className={`cursor-pointer h-[28px] flex items-center rounded ${
            activeSubNav === "profile" ? "bg-gray-300" : "hover:bg-gray-200"
          }`}
          onClick={() => fn_subNavigate("profile")}
        >
          <BsDot className="text-[30px]" />
          Profile
        </p>
        <p
          className={`cursor-pointer h-[28px] flex items-center rounded ${
            activeSubNav === "wishlist" ? "bg-gray-300" : "hover:bg-gray-200"
          }`}
          onClick={() => fn_subNavigate("wishlist")}
        >
          <BsDot className="text-[30px]" />
          My Wishlist
        </p>
        <p
          className={`cursor-pointer h-[28px] flex items-center rounded ${
            activeSubNav === "reviews" ? "bg-gray-300" : "hover:bg-gray-200"
          }`}
          onClick={() => fn_subNavigate("reviews")}
        >
          <BsDot className="text-[30px]" />
          My Reviews
        </p>
      </div>
    </div>
  );
};

export default SubNav;
