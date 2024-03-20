import React, { useEffect, useState } from "react";

import img1 from "../../assets/img/locality-description-sec-4-img-1.png";
import img2 from "../../assets/img/locality-description-sec-4-img-2.png";
import img3 from "../../assets/img/locality-description-sec-4-img-3.png";

const Section4 = () => {
  const [firstImg, setFirstImg] = useState(img1);
  const [centeredImage, setCenteredImage] = useState(img2);
  const [thirdImage, setThirdImage] = useState(img3);
  const [fadeInLeft, setFadeInLeft] = useState(false);
  const [fadeInRight, setFadeInRight] = useState(false);
  const [fade, setFade] = useState(false);
  const fn_prevButton = () => {
    setFade(true);
    setFadeInRight(true);
    if (firstImg === img1) {
      setFirstImg(img2);
    } else if (firstImg === img2) {
      setFirstImg(img3);
    } else {
      setFirstImg(img1);
    }
    if (centeredImage === img2) {
      setCenteredImage(img3);
    } else if (centeredImage === img3) {
      setCenteredImage(img1);
    } else {
      setCenteredImage(img2);
    }
    if (thirdImage === img3) {
      setThirdImage(img1);
    } else if (thirdImage === img1) {
      setThirdImage(img2);
    } else {
      setThirdImage(img3);
    }
  };
  const fn_nextButton = () => {
    setFadeInLeft(true);
    setFade(true);
    if (firstImg === img1) {
      setFirstImg(img3);
    } else if (firstImg === img3) {
      setFirstImg(img2);
    } else {
      setFirstImg(img1);
    }
    if (centeredImage === img2) {
      setCenteredImage(img1);
    } else if (centeredImage === img1) {
      setCenteredImage(img3);
    } else {
      setCenteredImage(img2);
    }
    if (thirdImage === img3) {
      setThirdImage(img2);
    } else if (thirdImage === img2) {
      setThirdImage(img1);
    } else {
      setThirdImage(img3);
    }
  };
  useEffect(() => {
    if (fadeInLeft === true) {
      setTimeout(() => {
        setFadeInLeft(false);
      }, 500);
    }
  }, [fadeInLeft]);
  useEffect(() => {
    if (fadeInRight === true) {
      setTimeout(() => {
        setFadeInRight(false);
      }, 500);
    }
  }, [fadeInRight]);
  useEffect(() => {
    if (fade === true) {
      setTimeout(() => {
        setFade(false);
      }, 500);
    }
  }, [fade]);
  return (
    <div className="section-4">
      <p className="text-[25px] sm:text-[40px] font-[500] px-[13px] md:px-[30px] lg:px-[70px]">
        Featured Projects
      </p>
      <div className="secondary">
        <div className="slide hi-slide">
          <div className="hi-prev" onClick={fn_prevButton}></div>
          <div className="hi-next" onClick={fn_nextButton}></div>
          <ul>
            <li className={fade ? "img-1 fade" : "img-1"} onClick={fn_nextButton}>
              <img src={firstImg} alt="" />
            </li>
            <li
              className={
                fadeInLeft
                  ? "img-2 fadeInLeft"
                  : fadeInRight
                  ? "img-2 fadeInRight"
                  : "img-2"
              }
            >
              <img src={centeredImage} alt="" />
            </li>
            <li className={fade ? "img-3 fade" : "img-3"} onClick={fn_prevButton}>
              <img src={thirdImage} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section4;
