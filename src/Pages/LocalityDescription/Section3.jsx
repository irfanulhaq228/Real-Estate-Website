import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { 
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from "chart.js/auto";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

import sign from "../../assets/svg/property-description-sec-1-sign.svg";

const Section3 = () => {
  const [priceAccordingTo, setPriceAccordingTo] = useState("monthly");

  const data = {
    labels: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November" ],
    datasets: [{
        data: [ 13100, 13200, 13400, 13300, 13500, 13600, 13400, 13400, 13500, 13600, 13500 ],
        backgroundColor: "white",
        borderColor: "#12B7B6",
        pointBorderColor: "#12B7B6",
        pointBorderWidth: 4,
        pointRadius: 8,
        borderWidth: 4,
    }]
  }

  const options = {
    plugins: {
        legend: false
    },
    scales: {
        x: {
            grid: {
                display: false,
            }
        },
        y: {
            min: 13000,
            max: 14000,
            ticks: {
                stepSize: 200
            }
        }
    }
  };

  return (
    <div className="section-3 mx-[13px] md:mx-[30px] lg:mx-[70px] py-[120px]">
      <p className="text-[var(--sec-text-color)] text-center md:text-start text-[40px] font-[600]">
        Price Trends
      </p>
      <div className="mt-[50px] flex flex-col md:flex-row gap-[30px] md:gap-0">
        <div className="w-full">
          <p className="text-center text-[23px] text-[var(--main-text-color)] font-[700]">
            Pricing
          </p>
          <div className="w-full flex items-center gap-[20px] justify-center mt-[10px]">
            <img src={sign} width={"20px"} />
            <span className="text-[40px]">14,000/sq.ft.</span>
          </div>
        </div>
        <div className="w-full">
          <p className="text-center text-[23px] text-[var(--main-text-color)] font-[700]">
            Monthly Rent
          </p>
          <div className="w-full flex items-center gap-[20px] justify-center mt-[10px]">
            <img src={sign} width={"20px"} />
            <span className="text-[40px]">289/sq.ft.</span>
          </div>
        </div>
      </div>
      <div className="mt-[50px] flex justify-between flex-col md:flex-row">
        <div className="price-according-to flex gap-[30px] items-center justify-center flex-col sm:flex-row">
          <p className="text-[18px] text-[var(--sec-text-color)] font-[700]">
            Price according to
          </p>
          <div className="flex gap-[20px]">
            <button
              className={`${priceAccordingTo === "monthly" && "active-button"}`}
              onClick={() => setPriceAccordingTo("monthly")}
            >
              Monthly
            </button>
            <button
              className={`${priceAccordingTo === "yearly" && "active-button"}`}
              onClick={() => setPriceAccordingTo("yearly")}
            >
              Yearly
            </button>
          </div>
        </div>
        <div className="hidden md:flex daily-chart gap-[30px] items-center">
          <p className="text-[18px] text-[var(--sec-text-color)] font-[700]">
            Chart
          </p>
          <div className="container">
            <input id="checkbox" name="checkbox" type="checkbox" />
            <label className="label" for="checkbox"></label>
          </div>
        </div>
      </div>
      <div className="mt-[50px] w-[100%] flex justify-center lg:h-[500px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Section3;
