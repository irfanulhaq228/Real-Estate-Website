import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import SubNav from './SubNav';
import logo from "../../assets/svg/real-estate-logo.svg";
import Navbar from '../../Components/Navbar';
import { getFavouriteHousesInfo } from '../../Api/api';
import { IMAGE_URL } from '../../URLs';
import ViewHouse from '../Home/ViewHouse';

const Wishlist = () => {
  const favouriteHouses = useSelector(state => state.favouriteHouses);
  const [ viewHouseInfo, setViewHouseInfo ] = useState(false);
  const [ houseInfo, setHouseInfo ] = useState({});
  const [ houses, setHouses ] = useState([]);
  useEffect(() => {
    const fn_favHouses = async() => {
      const result = await getFavouriteHousesInfo(favouriteHouses);
      if(result?.status === 200){
        setHouses(result?.data?.message);
      }
    }
    fn_favHouses();
  }, []);
  const fn_selectHouse = (item) => {
    setHouseInfo(item);
    setViewHouseInfo(true);
  }
  return (
    <div className="account pt-[40px] bg-[#F3F3F3]">

      <ViewHouse viewHouseInfo={viewHouseInfo} setViewHouseInfo={setViewHouseInfo} IMAGE_URL={IMAGE_URL} houseInfo={houseInfo} setHouseInfo={setHouseInfo} setSelectedHome={setHouseInfo} />
      <Navbar activeNav={"account"} logo={logo} />
      <div className='section-1 mx-[13px] md:mx-[30px] lg:mx-[70px] py-[30px] flex'>
        {/* sub-navbar */}
        <SubNav activeSubNav = {"wishlist"} />
        {/* content */}
        <div className='bg-gray-200 flex-1 rounded md:p-5'>
            <p className='text-[15px] font-[700]'>Wishlist</p>
            <div className="mt-5 grid grid-cols-1 gap-5">
              {houses?.map((item) => (
                <div className='flex' onClick={() => fn_selectHouse(item)}>
                  <div className='h-[70px] w-[100px] rounded'>
                    <img src={`${IMAGE_URL}/${item?.images[0]}`} width={"100px"} className='rounded object-fit' /> 
                  </div>
                  <div className='flex-1 px-3'>
                    <p className='text-[14px] font-[700]'>$ {item?.monthlyPrice ? item?.monthlyPrice : item?.salePrice}</p>
                    <p className='text-[13px]'><b>{item?.bedrooms}</b> bds | <b>{item?.bathrooms}</b> ba | <b>{item?.sqft}</b> sqft</p>
                    <p className='text-[13px]'>{item?.address}</p>
                  </div>
              </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist