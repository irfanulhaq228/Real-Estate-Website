import React, { useEffect, useState } from "react";

import img from "../../assets/img/property-description-sec-5-img-1.png";
import { getAgentRentalHouseById, getAgentSaleHouseById } from "../../Api/api";
import { IMAGE_URL } from "../../URLs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Section3a = ({ id, setSelectedHome, setFilterHomesList }) => {
  const navigate = useNavigate();
  const auth = useSelector(state => state.auth);
  const [rentalHouses, setRentalHouse] = useState([]);
  const [saleHouses, setSaleHouse] = useState([]);
  useEffect(() => {
    const fn_getRent = async () => {
      const result = await getAgentRentalHouseById(id);
      if (result?.status === 200) {
        setRentalHouse(result?.data?.message);
      }
    };
    fn_getRent();
    const fn_getSale = async () => {
      const result = await getAgentSaleHouseById(id);
      if (result?.status === 200) {
        setSaleHouse(result?.data?.message);
      }
    };
    fn_getSale();
  }, []);
  const fn_navigate = (name, item) => {
    if (auth) {
      navigate("/houses-details");
      setSelectedHome(item);
      setFilterHomesList(name);
    } else {
      navigate("/");
      return toast.error("Login to view details");
    }
  };
  return (
    <>
      {/* For Rent */}
      <div className="section-3a mx-[13px] md:mx-[30px] lg:mx-[70px] py-[40px]">
        <p className="text-[20px] sm:text-[30px] font-[700] mb-3">
          For Rent ({rentalHouses?.length})
        </p>
        {rentalHouses?.length !== 0 && (
          <table className="w-full table-fixed">
            <thead>
              <tr className="h-[40px] border-b border-gray-300">
                <td className="w-[50%] px-2 text-[14px] font-[600]">Address</td>
                <td className="px-2 text-[14px] font-[600]">Bed / Bath</td>
                <td className="px-2 text-[14px] font-[600]">Listing price</td>
              </tr>
            </thead>
            <tbody>
              {rentalHouses?.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-300 cursor-pointer hover:bg-gray-200"
                  onClick={() => fn_navigate("forRent", item)}
                >
                  <td className="text-[13px] flex items-center gap-2 p-2">
                    <img
                      src={`${IMAGE_URL}/${item?.images[0]}`}
                      className="w-[90px] h-[55px] rounded object-cover object-center"
                    />
                    <p className="w-[97%] lg:w-[50%]">{item?.address}</p>
                  </td>
                  <td className="text-[13px] gap-2 p-2">
                    <p className="w-[97%] lg:w-[50%]">
                      {item?.bedrooms} Beds, {item?.bathrooms} Bath
                    </p>
                  </td>
                  <td className="text-[13px] gap-2 p-2">
                    <p className="w-[97%] lg:w-[50%]">$ {item?.monthlyPrice}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {/* For Sale */}
      <div className="section-3a mx-[13px] md:mx-[30px] lg:mx-[70px] py-[40px]">
        <p className="text-[20px] sm:text-[30px] font-[700] mb-3">
          For Sale ({saleHouses?.length})
        </p>
        {saleHouses?.length !== 0 && (
          <table className="w-full table-fixed">
            <thead>
              <tr className="h-[40px] border-b border-gray-300">
                <td className="w-[50%] px-2 text-[14px] font-[600]">Address</td>
                <td className="px-2 text-[14px] font-[600]">Bed / Bath</td>
                <td className="px-2 text-[14px] font-[600]">Listing price</td>
              </tr>
            </thead>
            <tbody>
              {saleHouses?.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-300 cursor-pointer hover:bg-gray-200"
                  onClick={() => fn_navigate("forSale", item)}
                >
                  <td className="text-[13px] flex items-center gap-2 p-2">
                    <img
                      src={`${IMAGE_URL}/${item?.images[0]}`}
                      className="w-[90px] h-[55px] rounded object-cover object-center"
                    />
                    <p className="w-[97%] lg:w-[50%]">{item?.address}</p>
                  </td>
                  <td className="text-[13px] gap-2 p-2">
                    <p className="w-[97%] lg:w-[50%]">
                      {item?.bedrooms} Beds, {item?.bathrooms} Bath
                    </p>
                  </td>
                  <td className="text-[13px] gap-2 p-2">
                    <p className="w-[97%] lg:w-[50%]">$ {item?.salePrice}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Section3a;
