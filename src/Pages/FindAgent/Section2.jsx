import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchAgent } from "../../Api/api";

import {
  IoMdSearch,
  IoMdStar,
  IoMdStarHalf,
  IoMdStarOutline,
  IoIosArrowForward,
} from "react-icons/io";

import img from "../../assets/img/empty-user.png";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { updateAgentInfo } from "../../Features/Features";

const Section2 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [searchedData, setSearchedData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const handleClick = async (e) => {
    e.preventDefault();
    const obj = {
      name,
      location,
    };
    const result = await searchAgent(obj);
    if (result?.status === 200) {
      setSearchedData(result?.data?.message);
    } else {
      if (result?.response?.status === 400) {
        setSearchedData([]);
        setErrorMessage(result?.response?.data?.message);
      } else {
        setSearchedData([]);
        setErrorMessage("");
        toast.error("Network Error");
      }
    }
  };
  useEffect(() => {
    if (errorMessage !== "") {
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  }, [errorMessage]);
  const fn_clickShowDetails = (id, item) => {
    dispatch(updateAgentInfo(item));
    navigate(`/agent-description/${id}`);
  };
  console.log(searchedData);
  return (
    <div className="section-1 px-[13px] md:px-[30px] lg:px-[70px] py-[80px]">
      <p className="text-[20px] sm:text-[35px] font-[700]">Find an Agent</p>
      <form
        className="mt-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 p-2 md:p-5 border border-gray-300 gap-2"
        onSubmit={handleClick}
      >
        <div className="flex flex-col gap-1">
          <p className="text-[13px] font-[600]">Location</p>
          <div className="flex items-center bg-white border border-gray-200">
            <input
              className="w-full h-[40px] focus:outline-none px-2 text-[13px]"
              placeholder="City/Zip"
              onChange={(e) => setLocation(e.target.value)}
            />
            <IoMdSearch className="me-2" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[13px] font-[600]">Name</p>
          <div className="flex items-center bg-white border border-gray-200">
            <input
              className="w-full h-[40px] focus:outline-none px-2 text-[13px]"
              placeholder="Agent Name"
              onChange={(e) => setName(e.target.value)}
            />
            <IoMdSearch className="me-2" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[13px] font-[600]">Specialties</p>
          <div className="flex items-center bg-white border border-gray-200 px-2">
            <select className="w-full h-[40px] focus:outline-none text-[13px]">
              <option value={"any"}>Any</option>
              <option>Buyer's Agent</option>
              <option>Listing Agent</option>
              <option>Relocation</option>
              <option>Foreclosure</option>
              <option>Short-Sale</option>
              <option>Consulting</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[13px] font-[600]">Language</p>
          <div className="flex items-center bg-white border border-gray-200 px-2">
            <select className="w-full h-[40px] focus:outline-none text-[13px]">
              <option value={"english"}>English</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-1 px-1 justify-end">
          <input
            type="submit"
            value={"Search"}
            className="cursor-pointer flex gap-1 bg-[var(--main-text-color)] text-white justify-center items-center text-[15px] font-[600] rounded h-[42px] hover:scale-[1.01] active:scale-[0.995]"
          />
        </div>
      </form>
      <div className="mt-10">
        {searchedData?.length > 0 ? (
          <table className="table-fixed w-full">
            <tr className="h-10 border-b border-gray-400">
              <td className="px-3 font-[700]">Agent</td>
              <td className="px-3 font-[700]">Recent Client Review</td>
              <td className="px-3"></td>
            </tr>
            {searchedData?.map((item, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="px-3 py-2">
                  <div className="flex items-center gap-5">
                    <img
                      src={img}
                      className="h-[120px] w-[120px] object-cover object-center shadow rounded-full"
                    />
                    <div>
                      <p className="text-[14px] font-[600] capitalize">
                        {item?.name}
                      </p>
                      <p className="text-[13px]">{item?.phone}</p>
                      {/* <div className="flex items-center gap-1">
                        {[...Array(Math.floor(item?.stars))].map((_, index) => (
                          <IoMdStar key={index} />
                        ))}
                        {item?.stars % 1 !== 0 && <IoMdStarHalf />}
                        {[...Array(5 - Math.ceil(item?.stars))].map(
                          (_, index) => (
                            <IoMdStarOutline key={index} />
                          )
                        )}
                      </div> */}
                      <p className="text-[13px] mt-3">
                        {item?.reviews?.length} reviews
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-2">
                  {item?.reviews?.length === 0 ? (
                    <p>No reviews yet.</p>
                  ) : (
                    <React.Fragment>
                      <p className="text-[13px] font-[600]">
                        Review{" "}
                        {new Date(
                          item?.reviews.slice().reverse()[0].createdAt
                        ).toLocaleDateString()}
                      </p>
                      <div className="flex items-center gap-1">
                        {[
                          ...Array(
                            Math.floor(
                              item?.reviews.slice().reverse()[0]?.actualRating
                            )
                          ),
                        ].map((_, index) => (
                          <IoMdStar className="text-[20px] text-[var(--main-text-color)]" key={index} />
                        ))}
                        {item?.reviews.slice().reverse()[0]?.actualRating %
                          1 !==
                          0 && <IoMdStarHalf className="text-[20px] text-[var(--main-text-color)]" />}
                        {[
                          ...Array(
                            5 -
                              Math.ceil(
                                item?.reviews.slice().reverse()[0]?.actualRating
                              )
                          ),
                        ].map((_, index) => (
                          <IoMdStarOutline className="text-[20px] text-[var(--main-text-color)]" key={index} />
                        ))}
                      </div>
                      <p className="text-[13px] mt-2">
                        {item?.reviews.slice().reverse()[0].description}
                      </p>
                    </React.Fragment>
                  )}
                </td>
                <td className="flex justify-end items-center h-[136px] px-3">
                  <IoIosArrowForward
                    className="text-[var(--main-text-color)] text-[50px] cursor-pointer"
                    onClick={() => fn_clickShowDetails(item?._id, item)}
                  />
                </td>
              </tr>
            ))}
          </table>
        ) : errorMessage === "" ? null : (
          <p className="bg-red-200 rounded-[10px] h-[50px] flex items-center justify-center text-[13px]">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default Section2;
