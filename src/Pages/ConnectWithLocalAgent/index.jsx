import "./index.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";

import { connectWithLocalAgent } from "../../Api/api";

import img1 from "../../assets/img/connect-with-local-agent-img-1.jpg";
import img2 from "../../assets/img/connect-with-local-agent-img-2.jpg";
import toast from "react-hot-toast";

const ConnectWithLocalAgent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const [loader, setLoader] = useState(false);

  const [showEmail, setShowEmail] = useState(true);
  const [showPhone, setShowPhone] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validatePhone = (phoneNumber) => {
    const phoneRegex = /^\d{10,11}$/;
    return phoneRegex.test(phoneNumber);
  };
  const fn_onClickNext = () => {
    if (!validateEmail(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
      setShowEmail(false);
      setShowPhone(true);
    }
  };
  const fn_submit = async () => {
    if (!validatePhone(phone)) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
      setShowPhone(false);
      setShowEmail(false);
      setLoader(true);
      const result = await connectWithLocalAgent({ email, phone });
      if (result?.status === 200) {
        setShowSuccess(true);
        setShowPhone(false);
        return setLoader(false);
      } else {
        setLoader(false);
        return toast.error("Message Sending Failed, Try Again Later!");
      }
    }
  };
  const fn_BackToEmail = () => {
    setShowPhone(false);
    setShowEmail(true);
  };
  return (
    <div className="connect-with-agent min-h-[100vh] flex flex-col justify-center items-center">
      {/* For Email */}
      <div
        className={`flex flex-col justify-center items-center w-[95%] md:w-[80%] gap-5 ${
          !showEmail && "hidden"
        }`}
      >
        <img src={img1} width={"250px"} />
        <p className="text-[30px] font-[700] text-center">
          Beginning is simple
        </p>
        <p className="text-center text-[15px]">
          Please provide your email address below to connect with a nearby
          agent. Rest assured, we will ensure the security of any information
          you provide.
        </p>
        <input
          placeholder="Your Email Address"
          className="border border-gray-200 rounded focus:outline-none focus:border-gray-400 text-[14px] px-2 w-[230px] sm:w-[300px] h-[40px] font-[500]"
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError(false);
          }}
        />
        {emailError && (
          <p className="text-[12px] text-[red] mt-[-17px]">
            Enter Valid Email Address
          </p>
        )}
        <button
          className="bg-[var(--main-text-color)] w-[230px] sm:w-[300px] h-[40px] font-[500] text-[15px] rounded text-white hover:scale-[1.01] active:scale-[0.995]"
          onClick={fn_onClickNext}
        >
          Next
        </button>
      </div>
      {/* Loader */}
      {loader && (
        <>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#12B7B6", "#12B7B6", "#12B7B6", "#12B7B6", "#12B7B6"]}
          />
          <p className="mt-5 text-[13px] font-[700]">Please Wait...</p>
        </>
      )}
      {/* For Phone */}
      <div
        className={`flex flex-col justify-center items-center w-[95%] md:w-[80%] gap-5 ${
          !showPhone && "hidden"
        }`}
      >
        <img src={img2} width={"250px"} />
        <p className="text-[30px] font-[700] text-center">
          Our initial contact will be through text
        </p>
        <p className="text-center text-[15px]">
          Please input your phone number below, and we'll send you a text
          message to arrange a convenient time to connect.
        </p>
        <input
          placeholder="Phone"
          className="border border-gray-200 rounded focus:outline-none focus:border-gray-400 text-[14px] px-2 w-[230px] sm:w-[300px] h-[40px] font-[500]"
          onChange={(e) => {
            setPhone(e.target.value);
            setPhoneError(false);
          }}
        />
        {phoneError && (
          <p className="text-[12px] text-[red] mt-[-17px]">
            Enter Valid Phone Number
          </p>
        )}
        <button
          className="bg-[var(--main-text-color)] w-[230px] sm:w-[300px] h-[40px] font-[500] text-[15px] rounded text-white hover:scale-[1.01] active:scale-[0.995]"
          onClick={fn_submit}
        >
          Submit
        </button>
        <p
          className="text-[red] text-[12px] hover:underline cursor-pointer mt-[-15px]"
          onClick={fn_BackToEmail}
        >
          {"<<"} Back to Email ?
        </p>
      </div>
      {/* Success Message */}
      <div
        className={`flex flex-col justify-center items-center w-[95%] md:w-[80%] gap-5 ${
          !showSuccess && "hidden"
        }`}
      >
        <div className="success-checkmark">
          <div className="check-icon">
            <span className="icon-line line-tip"></span>
            <span className="icon-line line-long"></span>
            <div className="icon-circle"></div>
            <div className="icon-fix"></div>
          </div>
        </div>
        <p className="text-[13px] font-[600] text-center mt-[-30px]">
          Message Forwarded to the Company
        </p>
        <p className="text-[30px] font-[700] text-center">
          We'll send you a text message shortly
        </p>
        <p className="text-center text-[15px]">
          If you're busy, that's ok, just let us know via text when you're
          available to talk.
        </p>
        <button
          className="bg-[var(--main-text-color)] w-[230px] sm:w-[300px] h-[40px] font-[500] text-[15px] rounded text-white hover:scale-[1.01] active:scale-[0.995]"
          onClick={() => navigate("/")}
        >
          Close and continue shopping
        </button>
      </div>
    </div>
  );
};

export default ConnectWithLocalAgent;
