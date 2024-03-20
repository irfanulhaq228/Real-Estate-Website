import React from "react";

const Section2 = () => {
  return (
    <div className="section-2 mx-[13px] md:mx-[30px] lg:mx-[70px] flex flex-col md:flex-row justify-center items-center gap-[50px] md:gap-[100px] xl:gap-[150px]">
      <div>
        <p className="text-[90px] font-[600] text-[var(--main-text-color)] text-center">
          15
        </p>
        <p className="text-[30px] mt-[-10px]">Inventories Sold</p>
      </div>
      <div>
        <p className="text-[90px] font-[600] text-[var(--main-text-color)] text-center">
          6
        </p>
        <p className="text-[30px] mt-[-10px]">Properties Listed</p>
      </div>
      <div>
        <p className="text-[90px] font-[600] text-[var(--main-text-color)] text-center">
          3
        </p>
        <p className="text-[30px] mt-[-10px]">Live Projects</p>
      </div>
    </div>
  );
};

export default Section2;
