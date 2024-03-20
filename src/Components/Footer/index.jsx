import React from 'react';
import "./index.css";

import logo from "../../assets/svg/footer-logo.svg";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
  return (
    <div className='footer'>
        <div className='mt-[30px] px-[20px] md:px-[30px] lg:px-[70px] flex justify-between items-center'>
            <div>
                <img src={logo} width={"80px"} />
            </div>
            <div className='flex flex-col sm:flex-row gap-[30px]'>
                <p className='font-[800] cursor-pointer' onClick={() => navigate("/")}>Home</p>
                <p className='font-[800] cursor-pointer' onClick={() => navigate("/about-us")}>About Us</p>
                <p className='font-[800] cursor-pointer'  onClick={() => navigate("/developers")}>Developers</p>
            </div>
        </div>
        <div className='w-[100%] flex justify-center'>
            Copyright by Creative Academy All Right Reserved.
        </div>
    </div>
  )
}

export default Footer