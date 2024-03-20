import React, { useState } from "react";

const Section2 = () => {
  const [nav, setNav] = useState("about");
  return (
    <div className="section-2 py-[30px] pb-[100px]">
      <div className="options-box mx-[0px] md:mx-[30px] lg:mx-[70px] justify-between items-center">
        <button
          className={`w-[100%] border-e-[2px] border-[#C2C2C2] font-[700] ${
            nav === "about"
              ? "text-[var(--main-text-color)]"
              : "text-[var(--sec-text-color)]"
          }`}
          onClick={() => setNav("about")}
        >
          About Us
        </button>
        <button
          className={`w-[100%] border-e-[2px] border-[#C2C2C2] font-[700] ${
            nav === "services"
              ? "text-[var(--main-text-color)]"
              : "text-[var(--sec-text-color)]"
          }`}
          onClick={() => setNav("services")}
        >
          Services
        </button>
        <button
          className={`w-[100%] font-[700] ${
            nav === "pricing"
              ? "text-[var(--main-text-color)]"
              : "text-[var(--sec-text-color)]"
          }`}
          onClick={() => setNav("pricing")}
        >
          Pricings
        </button>
      </div>
      {nav === "about" && <AboutSection />}
      {nav === "services" && <ServicesSection />}
    </div>
  );
};

export default Section2;

const AboutSection = () => {
  return (
    <div className="aboutSection mx-[13px] md:mx-[30px] lg:mx-[70px] lg:px-[100px] pt-[60px]">
      <div>
        <p className="text-[25px] font-[700] text-[var(--main-text-color)]">
          Zillow
        </p>
        <p className="text-[25px] font-[500] text-[var(--sec-text-color)]">
          Real Estate
        </p>
      </div>
      <div>
        <p className="text-[25px] font-[700] text-[var(--main-text-color)]">
          Trulia
        </p>
        <p className="text-[25px] font-[500] text-[var(--sec-text-color)]">
          Great energy or enthusiasm in pursuit of a cause or an objective.
        </p>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <div className="aboutSection mx-[13px] md:mx-[30px] lg:mx-[70px] lg:px-[100px] pt-[60px]">
      <div>
        <p className="text-[25px] font-[700] text-[var(--main-text-color)]">
          Trulia
        </p>
        <p className="text-[25px] font-[500] text-[var(--sec-text-color)]">
          Great energy or enthusiasm in pursuit of a cause or an objective.
        </p>
      </div>
      <div>
        <p className="text-[25px] font-[700] text-[var(--main-text-color)]">
          Zillow
        </p>
        <p className="text-[25px] font-[500] text-[var(--sec-text-color)]">
          Real Estate
        </p>
      </div>
    </div>
  );
};
