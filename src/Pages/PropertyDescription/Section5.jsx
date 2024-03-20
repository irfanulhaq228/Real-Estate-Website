import React, { useState } from 'react';

import img1 from "../../assets/img/property-description-sec-5-img-1.png";
import img2 from "../../assets/img/property-description-sec-5-img-2.png";
import img3 from "../../assets/img/property-description-sec-5-img-3.png";
import img4 from "../../assets/img/property-description-sec-5-img-4.png";
import img5 from "../../assets/img/property-description-sec-5-img-5.png";

const Section5 = () => {
    const [selectedImg, setSelectedImg] = useState(img1);
    const [activeImg, setActiveImg] = useState(1);
    const fn_selectImg = (activeNo, imgAddress) =>{
        setActiveImg(activeNo);
        setSelectedImg(imgAddress);
    }
  return (
    <div className='section-5 mx-[13px] md:mx-[30px] lg:mx-[70px] pb-[100px]'>
        <div className='img-box h-[300px] md:h-[450px] lg:h-[600px] xl:h-[650px] flex justify-center'>
            <img src={selectedImg} className='w-[90%]' />
        </div>
        <div className='img-selector-box gap-[20px] md:gap-[80px] lg:gap-[100px]'>
            <div className={`circle-img ${activeImg === 1 && "active-circle-img"}`} >
                <img src={img1} onClick={() => fn_selectImg(1, img1)} />
            </div>
            <div className={`circle-img ${activeImg === 3 && "active-circle-img"}`}>
                <img src={img3} onClick={() => fn_selectImg(3, img3)} />
            </div>
            <div className={`circle-img ${activeImg === 4 && "active-circle-img"}`}>
                <img src={img4} onClick={() => fn_selectImg(4, img4)} />
            </div>
            <div className={`circle-img ${activeImg === 2 && "active-circle-img"}`}>
                <img src={img2} onClick={() => fn_selectImg(2, img2)} />
            </div>
            {/* <div className='circle-img'>
                <img src={img5} onClick={() => setSelectedImg(img5)} />
            </div> */}
        </div>
    </div>
  )
}

export default Section5