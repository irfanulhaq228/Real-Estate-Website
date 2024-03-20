import React, { useState } from "react";
import { Slider } from "antd";

import sign from "../../assets/svg/property-description-sec-1-sign.svg";

const Section5 = () => {
  const [loanAmount, setLoanAmount] = useState(75);
  const [interestRate, setInterestRate] = useState(50);
  const [downPayment, setDownPayment] = useState(35);
  const [tenure, setTenure] = useState(10);
  return (
    <div className="section-5 mx-[13px] md:mx-[30px] lg:mx-[70px] flex flex-col lg:flex-row gap-[25px] xl:gap-[50px] pt-[50px] pb-[130px]">
      <div className="w-[100%] lg:mt-[80px]">
        <p className="text-[25px] sm:text-[30px] lg:text-[35px] font-[300]">
          Total Breakdown
        </p>
        <div className="price-boxes grid mt-[50px] grid-cols-2 gap-[20px] md:gap-[30px] xl:gap-[50px]">
          <div className="box col-span-2 sm:col-span-1 h-[120px]">
            <p className="text-[15px] font-[700] text-[var(--main-text-color)]">
              Base Price
            </p>
            <div className="flex gap-[20px] text-[20px] font-[500]">
              <img src={sign} width={"15px"} />
              <p>36,00,000</p>
            </div>
          </div>
          <div className="box col-span-2 sm:col-span-1 h-[120px]">
            <p className="text-[15px] font-[700] text-[var(--main-text-color)]">
              Taxes & Legal Duties
            </p>
            <div className="flex gap-[20px] text-[20px] font-[500]">
              <img src={sign} width={"15px"} />
              <p>40,000</p>
            </div>
          </div>
          <div className="box col-span-2 h-[150px]">
            <p className="text-[18px] font-[700] text-[var(--main-text-color)] w-[100%] text-center">
              Total
            </p>
            <div className="flex gap-[20px] text-[20px] font-[500] justify-center w-full">
              <img src={sign} width={"18px"} />
              <p className="text-[30px]">36,40,000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] range-main-box py-[30px] p-[15px] md:p-[35px] xl:p-[50px]">
        <div>
          <p className="text-[#7A7A7A] font-[700] text-[15px]">Loan Amount</p>
          <div className="range">
            <Slider
              className="range-bar rounded-full"
              defaultValue={loanAmount}
              onChange={(e) => setLoanAmount(e)}
              disabled={false}
            />
          </div>
        </div>
        <div>
          <p className="text-[#7A7A7A] font-[700] text-[15px]">Interest Rate</p>
          <div className="range">
            <Slider
              className="range-bar rounded-full"
              defaultValue={interestRate}
              onChange={(e) => setInterestRate(e)}
              disabled={false}
            />
          </div>
        </div>
        <div>
          <p className="text-[#7A7A7A] font-[700] text-[15px]">Down Payment</p>
          <div className="range">
            <Slider
              className="range-bar rounded-full"
              defaultValue={downPayment}
              onChange={(e) => setDownPayment(e)}
              disabled={false}
            />
          </div>
        </div>
        <div>
          <p className="text-[#7A7A7A] font-[700] text-[15px]">Tenure</p>
          <div className="range">
            <Slider
              className="range-bar rounded-full"
              defaultValue={tenure}
              onChange={(e) => setTenure(e)}
              disabled={false}
            />
          </div>
        </div>
        <hr className="line" />
        <div className="w-full">
          <p className="text-[var(--main-text-color)] font-[700] text-[15px] text-center">
            Monthly Installments
          </p>
          <div className="flex gap-[20px] text-[20px] font-[500] justify-center w-full mt-[15px]">
            <img src={sign} width={"18px"} />
            <p className="text-[35px]">{loanAmount + interestRate + downPayment +tenure}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
