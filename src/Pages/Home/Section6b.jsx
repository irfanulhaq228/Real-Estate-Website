import React from "react";

import img1 from "../../assets/img/home-sec6b-img-1.jpg";
import img2 from "../../assets/img/home-sec6b-img-2.jpg";
import img3 from "../../assets/img/home-sec6b-img-3.jpg";
import { useNavigate } from "react-router-dom";

const Section6b = ({setFilterHomesList}) => {
    const navigate = useNavigate();
  return (
    <div className="section-6b mt-[-50px]">
      <div className="mx-[13px] md:mx-[30px] lg:mx-[70px]">
        <p className="text-[25px] sm:text-[30px] lg:text-[35px] font-[500]">
          Browse Homes
        </p>
      </div>
      <div className="imgs-box flex-col md:flex-row md:justify-evenly xl:justify-center md:gap-[15px] lg:gap-[23px] xl:gap-[50px]">
        {/* box-1 */}
        <div className="mx-[20px] md:mx-0 md:w-[280px] lg:w-[350px] flex flex-col items-center justify-between pb-10 pt-5 bg-white" onClick={() => { navigate("/houses-details"); setFilterHomesList("forSale")}}>
          <div className="h-[200px] w-full flex justify-center mb-2">
            <img src={img1} className="h-[200px]" />
          </div>
          <div className="text-[22px] font-[700] w-full py-2 flex justify-center items-center">
            Browse Homes
          </div>
          <div className="w-full min-h-[100px] flex flex-col items-center py-2">
            <p className="text-center w-[90%] text-[13px]">
              Discover a captivating photo journey with an extensive array of
              listings, showcasing unique offerings you won't encounter
              elsewhere.
            </p>
          </div>
          <div className="mt-4">
            <button className="bg-[var(--main-text-color)] w-[150px] h-[40px] rounded text-white text-[14px] font-[700] hover:scale-[1.01] hover:bg-white hover:border-[2px] hover:border-[var(--main-text-color)] hover:text-[var(--main-text-color)] active:scale-[0.995]">
              Browse homes
            </button>
          </div>
        </div>
        {/* box-2 */}
        <div className="mx-[20px] md:mx-0 md:w-[280px] lg:w-[350px] flex flex-col items-center justify-between pb-10 pt-5 bg-white" onClick={() => { navigate("/houses-details"); setFilterHomesList("forRent")}}>
          <div className="h-[200px] w-full flex justify-center mb-2">
            <img src={img2} className="h-[200px]" />
          </div>
          <div className="text-[22px] font-[700] w-full py-2 flex justify-center items-center">
            Rent a Home
          </div>
          <div className="w-full min-h-[100px] flex flex-col items-center py-2">
            <p className="text-center w-[90%] text-[13px]">
              We're crafting a smooth online journey, spanning from browsing the
              widest rental network, to applying, to managing rent payments
              seamlessly.
            </p>
          </div>
          <div className="mt-4">
          <button className="bg-[var(--main-text-color)] w-[150px] h-[40px] rounded text-white text-[14px] font-[700] hover:scale-[1.01] hover:bg-white hover:border-[2px] hover:border-[var(--main-text-color)] hover:text-[var(--main-text-color)] active:scale-[0.995]">
              Find Rentals
            </button>
          </div>
        </div>
        {/* box-3 */}
        <div className="mx-[20px] md:mx-0 md:w-[280px] lg:w-[350px] flex flex-col items-center justify-between pb-10 pt-5 bg-white" onClick={() => navigate("/sell")}>
          <div className="h-[200px] w-full flex justify-center mb-2">
            <img src={img3} className="h-[200px]" />
          </div>
          <div className="text-[22px] font-[700] w-full py-2 flex justify-center items-center">
            Sell a Home
          </div>
          <div className="w-full min-h-[100px] flex flex-col items-center py-2">
            <p className="text-center w-[90%] text-[13px]">
              Regardless of the route you choose to sell your home, we're here
              to assist you in achieving a successful sale.
            </p>
          </div>
          <div className="mt-4">
          <button className="bg-[var(--main-text-color)] w-[150px] h-[40px] rounded text-white text-[14px] font-[700] hover:scale-[1.01] hover:bg-white hover:border-[2px] hover:border-[var(--main-text-color)] hover:text-[var(--main-text-color)] active:scale-[0.995]">
              See Your Options
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6b;
