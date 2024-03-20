import React, { useState } from "react";

import { FiSearch } from "react-icons/fi";
import { FaMinus, FaPlus, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Section3 = () => {
  const [bedrooms, setBedrooms] = useState(1);
  const [priceSegments, setPriceSegments] = useState("affordable");
  const [advanceSearch, setAdvanceSearch] = useState(false);
  const fn_decreaseBedRoom = () => {
    if (bedrooms === 1) {
      return;
    }
    setBedrooms(bedrooms - 1);
  };
  const fn_increaseBedroom = () => {
    setBedrooms(bedrooms + 1);
  };
  const fn_backPriceSegment = () => {
    if (priceSegments === "cost effective") {
      setPriceSegments("budget friendly");
    }
    if (priceSegments === "budget friendly") {
      setPriceSegments("affordable");
    }
    if (priceSegments === "affordable") {
      setPriceSegments("low cost");
    }
    if (priceSegments === "low cost") {
      setPriceSegments("discounted");
    }
    if (priceSegments === "discounted") {
      setPriceSegments("entry level");
    }
    if (priceSegments === "entry level") {
      return;
    }
  };
  const fn_nextPriceSegment = () => {
    if (priceSegments === "entry level") {
      setPriceSegments("discounted");
    }
    if (priceSegments === "discounted") {
      setPriceSegments("low cost");
    }
    if (priceSegments === "low cost") {
      setPriceSegments("affordable");
    }
    if (priceSegments === "affordable") {
      setPriceSegments("budget friendly");
    }
    if (priceSegments === "budget friendly") {
      setPriceSegments("cost effective");
    }
  };
  return (
    <div className="section-3 mx-[13px] md:mx-[30px] lg:mx-[70px] flex-col lg:flex-row justify-between items-center gap-[20px] lg:gap-[40px] xl:gap-[60px]">
      <div className="all-inputs flex-1 flex flex-col gap-[30px]">
        <div className="input-box w-full flex-col sm:flex-row gap-[25px] lg:gap-[40px]">
          <input
            className="input-search w-[100%]"
            placeholder="Search Property Name, Locally, Developer"
          />
          <div className="bedroom-box">
            <p className="text-[15px] text-[var(--sec-text-color)] font-[700]">
              Bedrooms
            </p>
            <div className="buttons w-[170px]">
              <button className="btn" onClick={fn_decreaseBedRoom}>
                <FaMinus />
              </button>
              <p className="text-[var(--sec-text-color)] font-[500] text-[16px] px-[5px]">
                {bedrooms}
              </p>
              <button className="btn" onClick={fn_increaseBedroom}>
                <FaPlus />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-[25px] lg:gap-[40px]">
          <div className="flex gap-[10px] lg:gap-[20px] items-center">
            <p className="text-[15px] text-[var(--sec-text-color)] font-[700]">
              Price Segment
            </p>
            <div className="buttons w-[250px]">
              <button className="btn" onClick={fn_backPriceSegment}>
                <FaArrowLeft />
              </button>
              <p className="text-[var(--main-text-color)] font-[600] text-[14px] px-[10px] capitalize">
                {priceSegments}
              </p>
              <button className="btn" onClick={fn_nextPriceSegment}>
                <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="flex gap-[10px] lg:gap-[20px] items-center">
            <p className="text-[15px] text-[var(--sec-text-color)] font-[700]">
              Ready to Move
            </p>
            <div className="ready-to-move">
              <input id="checkbox" name="checkbox" type="checkbox" />
              <label class="label" for="checkbox"></label>
            </div>
          </div>
          <button
            className="advance-search"
            onClick={() => setAdvanceSearch(!advanceSearch)}
          >
            Advance Search
          </button>
        </div>
        {advanceSearch && (
          <div className="advance-search-inputs flex flex-col lg:flex-row gap-[25px] lg:gap-[30px] justify-between">
            <div className="flex flex-1 gap-[10px] lg:gap-[20px] items-center">
              <p className="text-[15px] text-[var(--sec-text-color)] font-[700]">
                Country
              </p>
              <div className="buttons px-[15px] w-[100%]">
                <select className="select-box bg-[transparent]">
                  <option>Select Country</option>
                  <option>Country-1</option>
                  <option>Country-2</option>
                </select>
              </div>
            </div>
            <div className="flex flex-1 gap-[10px] lg:gap-[20px] items-center">
              <p className="text-[15px] text-[var(--sec-text-color)] font-[700]">
                State
              </p>
              <div className="buttons px-[15px] w-[100%]">
                <select className="select-box bg-[transparent]">
                  <option>Select State</option>
                  <option>State-1</option>
                  <option>State-2</option>
                </select>
              </div>
            </div>
            <div className="flex flex-1 gap-[10px] lg:gap-[20px] items-center">
              <p className="text-[15px] text-[var(--sec-text-color)] font-[700]">
                City
              </p>
              <div className="buttons px-[15px] w-[100%]">
                <select className="select-box bg-[transparent]">
                  <option>Select City</option>
                  <option>City-1</option>
                  <option>City-2</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="search-box">
        <FiSearch className="search-icon" />
      </div>
    </div>
  );
};

export default Section3;

{
  /* <div className="all-inputs flex flex-col gap-[30px] w-[100%]">
        <div className="input-box w-full flex-col sm:flex-row">
          <input
            className="input-search w-[100%]"
            placeholder="Search Property Name, Locally, Developer"
          />
          <div className="bedroom-box w-[100%] sm:w-[40%]">
            <p className="text-[15px] text-[var(--sec-text-color)] font-[700]">
              Bedrooms
            </p>
            <div className="buttons w-[170px]">
              <button className="btn" onClick={fn_decreaseBedRoom}>
                <FaMinus />
              </button>
              <p className="text-[var(--sec-text-color)] font-[500] text-[16px] px-[5px]">
                {bedrooms}
              </p>
              <button className="btn" onClick={fn_increaseBedroom}>
                <FaPlus />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-[25px] lg:gap-[30px]">
          <div className="flex gap-[10px] lg:gap-[20px] items-center">
            <p className="text-[15px] text-[var(--sec-text-color)] font-[700]">
              Price Segment
            </p>
            <div className="buttons w-[250px]">
              <button className="btn" onClick={fn_backPriceSegment}>
                <FaArrowLeft />
              </button>
              <p className="text-[var(--main-text-color)] font-[600] text-[14px] px-[10px] capitalize">
                {priceSegments}
              </p>
              <button className="btn" onClick={fn_nextPriceSegment}>
                <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="flex gap-[10px] lg:gap-[20px] items-center">
            <p className="text-[15px] text-[var(--sec-text-color)] font-[700]">
              Ready to Move
            </p>
            <div className="ready-to-move">
              <input id="checkbox" name="checkbox" type="checkbox" />
              <label class="label" for="checkbox"></label>
            </div>
          </div>
          <button className="advance-search" onClick={() => setAdvanceSearch(!advanceSearch)}>Advance Search</button>
        </div>
        {advanceSearch && (
            <div className="advance-search-inputs flex flex-col sm:flex-row gap-[25px] lg:gap-[30px] w-[100%]">
            <div className="flex gap-[10px] lg:gap-[20px] items-center">
                <p className="text-[15px] text-[var(--sec-text-color)] font-[700]">
                Country
                </p>
                <div className="buttons px-[15px]">
                <select className="select-box bg-[transparent]">
                    <option>Select Country</option>
                    <option>Country-1</option>
                    <option>Country-2</option>
                </select>
                </div>
            </div>
            <div className="flex gap-[10px] lg:gap-[20px] items-center">
                <p className="text-[15px] text-[var(--sec-text-color)] font-[700]">
                State
                </p>
                <div className="buttons px-[15px]">
                <select className="select-box bg-[transparent]">
                    <option>Select State</option>
                    <option>State-1</option>
                    <option>State-2</option>
                </select>
                </div>
            </div>
            <div className="flex gap-[10px] lg:gap-[20px] items-center">
                <p className="text-[15px] text-[var(--sec-text-color)] font-[700]">
                City
                </p>
                <div className="buttons px-[15px]">
                <select className="select-box bg-[transparent]">
                    <option>Select City</option>
                    <option>City-1</option>
                    <option>City-2</option>
                </select>
                </div>
            </div>
            </div>
        )}
      </div>
      <div className="search-box">
        <FiSearch className="search-icon" />
      </div> */
}
