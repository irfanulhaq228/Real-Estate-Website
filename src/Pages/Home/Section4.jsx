import React, { useState } from 'react';

import img1 from "../../assets/img/home-sec-4-img-1.png";
import img2 from "../../assets/img/home-sec-4-img-2.png";
import img3 from "../../assets/img/home-sec-4-img-3.png";

const Section4 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  console.log(hoveredIndex)
  return (
    <div className='section-4 lg:h-[500px]'>
      <div
        className={`${hoveredIndex === 0 ? 'expanded' : ''}`}
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}
        style={{backgroundImage: `url(${img1})`}}
      ></div>
      <div
        className={`${hoveredIndex === 1 ? 'expanded' : ''}`}
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
        style={{backgroundImage: `url(${img2})`}}
      ></div>
      <div
        className={`${hoveredIndex === 2 ? 'expanded' : ''}`}
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
        style={{backgroundImage: `url(${img3})`}}
      ></div>
    </div>
  )
}

export default Section4