import React from "react";

const Section2 = () => {
  return (
    <div className="section-2 mx-[13px] md:mx-[30px] lg:mx-[70px] pb-[20px] pt-[70px] flex flex-col md:flex-row justify-center items-center gap-[50px] md:gap-[50px]  xl:gap-[150px]">
      <div>
        <p className="text-[90px] font-[600] text-[var(--main-text-color)] text-center">
          15
        </p>
        <p className="text-[25px] mt-[-10px] text-center font-[500]">Inventories Sold</p>
      </div>
      <div>
        <p className="text-[90px] font-[600] text-[var(--main-text-color)] text-center">
          6
        </p>
        <p className="text-center text-[25px] mt-[-10px] font-[500]">Properties Listed</p>
      </div>
      <div>
        <p className="text-[90px] font-[600] text-[var(--main-text-color)] text-center">
          3
        </p>
        <p className="text-center text-[25px] mt-[-10px] font-[500]">Live Projects</p>
      </div>
    </div>
  );
};

export default Section2;
