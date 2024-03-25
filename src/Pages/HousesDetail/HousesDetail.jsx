import "./HousesDetail.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Carousel } from "antd";
import { IMAGE_URL, URL } from '../../URLs';
import { RotatingLines } from 'react-loader-spinner'

import logo from "../../assets/svg/real-estate-logo.svg";
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank, MdLocationPin, MdOutlineSearch } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ViewHouse from '../Home/ViewHouse';

const HousesDetail = ({ selectedHome, filterHomesList, setSelectedHome }) => {
    const navigate = useNavigate();
    const [ loader, setLoader ] = useState(true);
    
    const [ viewHouseInfo, setViewHouseInfo ] = useState(false);
    const [ showListOptions, setShowListOptions ] = useState(false);
    const [ showPriceOptions, setShowPriceOptions ] = useState(false);
    const [ showBedsOptions, setShowBedsOptions ] = useState(false);
    const [ showHomeType, setShowHomeType ] = useState(false);
    const [ showMore, setShowMore ] = useState(false);

    const [ selectedList, setSelectList ] = useState("forRent");
    const [ minPrice, setMinPrice ] = useState("");
    const [ maxPrice, setMaxPrice ] = useState("");
    const [ bedrooms, setBedrooms ] = useState("any");
    const [ bathrooms, setBathrooms ] = useState("any");
    const [ selectedHomeType, setSelectedHomeType ] = useState("all");
    const [ minSqft, setMinSqft ] = useState("any");
    const [ maxSqft, setMaxSqft ] = useState("any");
    const [ minLot, setMinLot ] = useState("any");
    const [ maxLot, setMaxLot ] = useState("any");

    const [ allData, setAllData ] = useState([]);
    const [ allFilteredData, setAllFilteredData ] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, allFilteredData?.length);
    const currentItems = allFilteredData.slice(startIndex, endIndex);
    const hasPrevPage = currentPage > 1;
    const hasNextPage = currentPage < Math.ceil(allFilteredData.length / itemsPerPage);

    const fn_showOptions = (setValue, value) => {
        setShowListOptions(false);
        setShowPriceOptions(false);
        setShowBedsOptions(false);
        setShowHomeType(false);
        setShowMore(false);

        setValue(!value);
    }

    const fn_changeListOptions = (value) => {
        setSelectList(value);
        setShowListOptions(false)
    }

    const fn_applyPriceFilter = () => {
        setShowPriceOptions(false);
        if(document.getElementById("minPrice").value !== ""){
            setMinPrice(document.getElementById("minPrice").value);
        }else{
            setMinPrice("")
        }
        if(document.getElementById("maxPrice").value !== ""){
            setMaxPrice(document.getElementById("maxPrice").value);
        }else{
            setMaxPrice("")
        }
    }

    const fn_applyAccessoriesFilter = () => {
        setShowBedsOptions(false);
        setLoader(true);
    };

    const fn_changeHomeType = (value) => {
        setShowHomeType(false);
        setSelectedHomeType(value);
    };

    const fn_applyMoreFilter = () => {
        setShowMore(false);
        setMinSqft(document.getElementById("min_value_sqft").value);
        setMaxSqft( document.getElementById("max_value_sqft").value);
        setMinLot( document.getElementById("min_value_lot").value);
        setMaxLot( document.getElementById("max_value_lot").value);
    };

    const fn_PrevPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
        setLoader(true);
        window.scroll({ top: 0});
    };

    const fn_NextPage = () => {
        setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(allFilteredData.length / itemsPerPage)));
        setLoader(true);
        window.scroll({ top: 0});
    };

    useEffect(() => {
        axios.get(`${URL}/all-homes`).then((res) => {
            setAllData(res?.data?.message);
        });
        if(Object.keys(selectedHome)?.length > 0){
            setViewHouseInfo(true);
        }
        if(filterHomesList !== ""){
            setSelectList(filterHomesList);
        };
    }, []);

    useEffect(() => {
        if(loader){
            setTimeout(() => {
                setLoader(false)
            }, 700)
        }
    }, [loader]);

    useEffect(() => {
        setLoader(true);
        const data = allData;
        // filtering by list type
        const filterByListType = data?.filter((item) => item?.listType === selectedList);
        // filtering by min-price
        var filterByMinPrice = [];
        if(minPrice !== ""){
            if(selectedList === "forRent"){
                filterByMinPrice = filterByListType?.filter((item) => parseInt(item?.monthlyPrice) >= parseInt(minPrice));
            }else{
                filterByMinPrice = filterByListType?.filter((item) => parseInt(item?.salePrice) >= parseInt(minPrice));
            }
        }else{
            filterByMinPrice = filterByListType;
        }
        // filtering by max-price
        var filterByMaxPrice = [];
        if(maxPrice !== ""){
            if(selectedList === "forRent"){
                filterByMaxPrice = filterByMinPrice?.filter((item) => parseInt(item?.monthlyPrice) <= parseInt(maxPrice));
            }else{
                filterByMaxPrice = filterByMinPrice?.filter((item) => parseInt(item?.salePrice) <= parseInt(maxPrice));
            }
        }else{
            filterByMaxPrice = filterByMinPrice;
        }
        // filtering by bedrooms
        var filterByBedrooms = [];
        if(bedrooms !== "any"){
            filterByBedrooms = filterByMaxPrice?.filter((item) => parseInt(item?.bedrooms) >= parseInt(bedrooms));
        }else{
            filterByBedrooms = filterByMaxPrice;
        }
        // filtering by bathrooms
        var filterByBathrooms = [];
        if(bathrooms !== "any"){
            filterByBathrooms = filterByBedrooms?.filter((item) => parseFloat(item?.bathrooms) >= parseFloat(bathrooms));
        }else{
            filterByBathrooms = filterByBedrooms;
        }
        // filtering by home type
        var filterByHomeType = [];
        if(selectedHomeType !== "all"){
            filterByHomeType = filterByBathrooms?.filter((item) => item?.property === selectedHomeType);
        }else{
            filterByHomeType = filterByBathrooms;
        }
        // filtering by min-sqft
        var filterByMinSqft = [];
        if(minSqft !== "any"){
            filterByMinSqft = filterByHomeType?.filter((item) => item?.property === "appartment" ? parseInt(item?.sizeSqft) >= parseInt(minSqft) : parseInt(item?.lotSqft) >= parseInt(minSqft));
        }else{
            filterByMinSqft = filterByHomeType;
        }
        // filtering by max-sqft
        var filterByMaxSqft = [];
        if(maxSqft !== "any"){
            filterByMaxSqft = filterByMinSqft?.filter((item) => item?.property === "appartment" ? parseInt(item?.sizeSqft) <= parseInt(maxSqft) : parseInt(item?.lotSqft) <= parseInt(maxSqft));
        }else{
            filterByMaxSqft = filterByMinSqft;
        }
        setAllFilteredData(filterByMaxSqft);
    }, [allData, selectedList, minPrice, maxPrice, bedrooms, bathrooms, selectedHomeType, minSqft, maxSqft]);
  return (
    <div className='houses-detail'>
        <ViewHouse viewHouseInfo={viewHouseInfo} setViewHouseInfo={setViewHouseInfo} IMAGE_URL={IMAGE_URL} houseInfo={selectedHome} setSelectedHome={setSelectedHome} />
        <div className='houses-detail-nav mx-[13px] md:mx-[30px] lg:mx-[70px]'>
            <img src={logo} className='h-full p-4 cursor-pointer' onClick={() => navigate("/")} />
        </div>
        <div>
            <div className='search-box mx-[13px] md:mx-[30px] lg:mx-[70px]'>
                <div className='relative z-[999]'>
                    <div className='input w-[170px]' onClick={() => fn_showOptions(setShowListOptions, showListOptions)}>
                        <p className='text-[14px]'>Homes {selectedList === "forRent" ? "For Rent" : "For Sale"}</p>
                        <p className='text-[17px]'>{showListOptions ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</p>
                    </div>
                    {showListOptions && (
                        <div className='input-options w-[170px]'>
                            <div className='flex items-center gap-3 cursor-pointer' onClick={() => { fn_changeListOptions("forRent"); if(selectedList !== "forRent")setLoader(true) }}>
                                {selectedList === "forRent" ? <MdOutlineCheckBox className='text-[17px]' /> : <MdOutlineCheckBoxOutlineBlank className='text-[17px]' />}
                                <p className='text-[14px]'>For Rent</p>
                            </div>
                            <div className='flex items-center gap-3 cursor-pointer' onClick={() => { fn_changeListOptions("forSale"); if(selectedList !== "forSale")setLoader(true) }}>
                                {selectedList === "forSale" ? <MdOutlineCheckBox className='text-[17px]' /> : <MdOutlineCheckBoxOutlineBlank className='text-[17px]' />}
                                <p className='text-[14px]'>For Sale</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className='relative z-[999]'>
                    <div className='input min-w-[150px]' onClick={() => fn_showOptions(setShowPriceOptions, showPriceOptions)}>
                        <p className='text-[14px]'>
                            {(minPrice !== "" && maxPrice === "") ? `$${minPrice}+`
                                : (minPrice === "" && maxPrice !== "") ? `Upto $${maxPrice}`
                                    : (minPrice !== "" && maxPrice !== "") ? `$${minPrice} - $${maxPrice}`
                                        : "Price - Any"
                            }
                        </p>
                        <p className='text-[17px]'>{showPriceOptions ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</p>
                    </div>
                    {showPriceOptions && (
                        <div className='input-options'>
                            <div className='flex items-center gap-1'>
                                <p className='text-[14px] w-[90px]'>Minimum($)</p>
                                <input id='minPrice' type='number' className='input flex-1' defaultValue={minPrice} />
                            </div>
                            <div className='flex items-center gap-1'>
                                <p className='text-[14px] w-[90px]'>Maximum($)</p>
                                <input id='maxPrice' type='number' className='input flex-1' defaultValue={maxPrice} />
                            </div>
                            <button className='rounded h-[30px] mt-2 bg-[var(--main-text-color)] text-white text-[14px] font-[600]' onClick={fn_applyPriceFilter}>
                                Apply
                            </button>
                        </div>
                    )}
                </div>
                <div className='relative z-[999]'>
                    <div className='input w-[150px]' onClick={() => fn_showOptions(setShowBedsOptions, showBedsOptions)}>
                        <p className='text-[14px]'>
                            {(bathrooms === "any" && bedrooms === "any") ? "Beds & Baths" : `${bedrooms} bds, ${bathrooms} bts`}
                        </p>
                        <p className='text-[17px]'>{showBedsOptions ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</p>
                    </div>
                    {showBedsOptions && (
                        <div className='input-options w-[360px]'>
                            <p className='text-[14px] font-[500] mt-2'>Bedrooms</p>
                            <div className='beds-baths-options'>
                                <p className={bedrooms === "any" && 'active'} onClick={() => setBedrooms("any")}>Any</p>
                                <p className={bedrooms === "1" && 'active'} onClick={() => setBedrooms("1")}>1+</p>
                                <p className={bedrooms === "2" && 'active'} onClick={() => setBedrooms("2")}>2+</p>
                                <p className={bedrooms === "3" && 'active'} onClick={() => setBedrooms("3")}>3+</p>
                                <p className={bedrooms === "4" && 'active'} onClick={() => setBedrooms("4")}>4+</p>
                                <p className={bedrooms === "5" && 'active'} onClick={() => setBedrooms("5")}>5+</p>
                                <p className={bedrooms === "6" && 'active'} onClick={() => setBedrooms("6")}>6+</p>
                            </div>  
                            <p className='text-[14px] font-[500] mt-2'>Bathrooms</p>
                            <div className='beds-baths-options mb-2'>
                                <p className={bathrooms === "any" && 'active'} onClick={() => setBathrooms("any")}>Any</p>
                                <p className={bathrooms === "1" && 'active'} onClick={() => setBathrooms("1")}>1+</p>
                                <p className={bathrooms === "1.5" && 'active'} onClick={() => setBathrooms("1.5")}>1.5+</p>
                                <p className={bathrooms === "2" && 'active'} onClick={() => setBathrooms("2")}>2+</p>
                                <p className={bathrooms === "2.5" && 'active'} onClick={() => setBathrooms("2.5")}>2.5+</p>
                                <p className={bathrooms === "3" && 'active'} onClick={() => setBathrooms("3")}>3+</p>
                                <p className={bathrooms === "4" && 'active'} onClick={() => setBathrooms("4")}>4+</p>
                            </div>   
                            <button className='rounded h-[30px] mt-2 bg-[var(--main-text-color)] text-white text-[14px] font-[600]' onClick={fn_applyAccessoriesFilter}>
                                Apply
                            </button>                   
                        </div>
                    )}
                </div>
                <div className='relative z-[999]'>
                    <div className='input w-[240px]' onClick={() => fn_showOptions(setShowHomeType, showHomeType)}>
                        <p className='text-[14px]'>
                            Home Type - {selectedHomeType === "all" ? "All" : selectedHomeType === "house" ? "Houses" : selectedHomeType === "appartment" ? "Appartments": "Condos"}
                        </p>
                        <p className='text-[17px]'>{showHomeType ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</p>
                    </div>
                    {showHomeType && (
                        <div className='input-options w-[240px]'>
                        <div className='flex items-center gap-3 cursor-pointer' onClick={() => fn_changeHomeType("all")}>
                            {selectedHomeType === "all" ? <MdOutlineCheckBox className='text-[17px]' /> : <MdOutlineCheckBoxOutlineBlank className='text-[17px]' />}
                            <p className='text-[14px]'>All</p>
                        </div>
                        <div className='flex items-center gap-3 cursor-pointer' onClick={() => fn_changeHomeType("house")}>
                            {selectedHomeType === "house" ? <MdOutlineCheckBox className='text-[17px]' /> : <MdOutlineCheckBoxOutlineBlank className='text-[17px]' />}
                            <p className='text-[14px]'>Houses</p>
                        </div>
                        <div className='flex items-center gap-3 cursor-pointer' onClick={() => fn_changeHomeType("appartment")}>
                            {selectedHomeType === "appartment" ? <MdOutlineCheckBox className='text-[17px]' /> : <MdOutlineCheckBoxOutlineBlank className='text-[17px]' />}
                            <p className='text-[14px]'>Appartments</p>
                        </div>
                        <div className='flex items-center gap-3 cursor-pointer' onClick={() => fn_changeHomeType("condo")}>
                            {selectedHomeType === "condo" ? <MdOutlineCheckBox className='text-[17px]' /> : <MdOutlineCheckBoxOutlineBlank className='text-[17px]' />}
                            <p className='text-[14px]'>Condos</p>
                        </div>
                    </div>
                    )}
                </div>
                <div className='relative z-[999]'>
                    <div className='input w-[160px]' onClick={() => fn_showOptions(setShowMore, showMore)}>
                        <p className='text-[14px]'>
                            More Searches
                        </p>
                        <p className='text-[17px]'>{showMore ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</p>
                    </div>
                    {showMore && (
                        <div className='input-options w-[280px] md:w-[500px] right-0'>
                            <p className="text-[14px] font-[600]">Square Feet / Acre</p>
                            <div className="flex justify-between gap-3">
                                <div className="flex-1">
                                    <p className="text-[13px]">No. Minimum</p>
                                    <select className="text-[13px] input w-full" id="min_value_sqft">
                                        <option value={"any"} selected={minSqft == "any"}>Any</option>
                                        {Array.from({ length: 29 }, (_, index) => (index + 1) * 250 + 250).map((value, index) => (
                                            <option key={index} selected={minSqft == value} value={value}>{value} sqft</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex-1">
                                    <p className="text-[13px]">No. Maximum</p>
                                    <select className="text-[13px] input w-full" id="max_value_sqft">
                                        <option value={"any"} selected={maxSqft == "any"}>Any</option>
                                        {Array.from({ length: 29 }, (_, index) => (index + 1) * 250 + 250).map((value, index) => (
                                            <option key={index} selected={maxSqft == value} value={value}>{value} sqft</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <p className="text-[14px] font-[600]">Lot Size</p>
                            <div className="flex justify-between gap-3">
                                <div className="flex-1">
                                    <p className="text-[13px]">No. Minimum</p>
                                    <select className="text-[13px] input w-full" id="min_value_lot">
                                        <option value={"any"}>Any</option>
                                        <option value={1000}>1000 sqft</option>
                                        <option value={2000}>2000 sqft</option>
                                        <option value={3000}>3000 sqft</option>
                                        <option value={4000}>4000 sqft</option>
                                        <option value={5000}>5000 sqft</option>
                                        <option value={7500}>7500 sqft</option>
                                        <option value={1/4}>1/4 acre /10,890 sqft</option>
                                        <option value={1/2}>1/2 acre</option>
                                        <option value={1}>1 acre</option>
                                        <option value={2}>2 acre</option>
                                        <option value={5}>5 acre</option>
                                        <option value={10}>10 acre</option>
                                        <option value={20}>20 acre</option>
                                        <option value={50}>50 acre</option>
                                        <option value={100}>100 acre</option>
                                    </select>
                                </div>
                                <div className="flex-1">
                                    <p className="text-[13px]">No. Maximum</p>
                                    <select className="text-[13px] input w-full" id="max_value_lot">
                                        <option value={"any"}>Any</option>
                                        <option value={1000}>1000 sqft</option>
                                        <option value={2000}>2000 sqft</option>
                                        <option value={3000}>3000 sqft</option>
                                        <option value={4000}>4000 sqft</option>
                                        <option value={5000}>5000 sqft</option>
                                        <option value={7500}>7500 sqft</option>
                                        <option value={1/4}>1/4 acre /10,890 sqft</option>
                                        <option value={1/2}>1/2 acre</option>
                                        <option value={1}>1 acre</option>
                                        <option value={2}>2 acre</option>
                                        <option value={5}>5 acre</option>
                                        <option value={10}>10 acre</option>
                                        <option value={20}>20 acre</option>
                                        <option value={50}>50 acre</option>
                                        <option value={100}>100 acre</option>
                                    </select>
                                </div>
                            </div>
                            <button className='rounded h-[30px] mt-2 bg-[var(--main-text-color)] text-white text-[14px] font-[600]' onClick={fn_applyMoreFilter}>
                                Apply
                            </button>  
                        </div>
                    )}
                </div>
            </div>
            {!loader ? (
                <div className='houses-list lg:grid-cols-3 gap-5 mx-[13px] md:mx-[30px] lg:mx-[70px] py-10'>
                {currentItems?.length > 0 ? currentItems?.map((item, index) => (
                    <div key={index} className="rounded-[10px] house-boxes sm:h-[330px]" onClick={() => { setSelectedHome(item); setViewHouseInfo(true) }}>
                        <Carousel
                            autoplay={false}
                            dots={false}
                        >
                            <div className="h-[200px]">
                            <img
                                src={`${IMAGE_URL}/${item?.images[0]}`}
                                className="h-[200px] w-full object-cover object-center rounded-[10px]"
                            />
                            </div>
                        </Carousel>
                        <p className="font-[700] text-[18px] px-3 mt-5">
                            $ {item?.monthlyPrice ? item?.monthlyPrice : item?.salePrice}
                        </p>
                        <p className="flex gap-1 text-[14px] px-3 flex-wrap">
                            <span className="font-[700]">{item?.bedrooms}</span>
                            <span>bds</span>
                            <span>|</span>
                            <span className="font-[700]">{item?.bathrooms}</span>
                            <span>ba</span>
                            <span>|</span>
                            <span className="font-[700]">
                                {item?.lotSqft ? item?.lotSqft : item?.sizeSqft}
                            </span>
                            <span>sqft.</span>
                            <span>|</span>
                            <span>Active</span>
                        </p>
                        <p className="text-[14px] flex gap-1 mt-2 px-3">
                            <MdLocationPin className="text-[20px] ms-[-3px]" />
                            {item?.address}
                        </p>
                    </div>
                )): (
                    <p className='bg-red-200 w-full lg:col-span-3 text-center h-[100px] rounded-[15px] flex items-center justify-center text-[13px]'>No Data Found - Try another Search</p>
                )}
                <div className='lg:col-span-3 flex items-center justify-center gap-10 mt-5'>
                    <p className={`text-[12px] flex gap-1 items-center font-[500] ${hasPrevPage ? 'cursor-pointer hover:underline' : 'cursor-not-allowed text-gray-500'}`} onClick={fn_PrevPage}><IoIosArrowBack className="text-[15px]" />Prev</p>
                    <p className={`text-[12px] flex gap-1 items-center font-[500] ${hasNextPage ? 'cursor-pointer hover:underline' : 'cursor-not-allowed text-gray-500'}`} onClick={fn_NextPage}>Next<IoIosArrowForward className="text-[15px]" /></p>
                </div>
            </div>
            ) : (
                <div className='flex items-center justify-center py-20'>
                    <RotatingLines
                        visible={true}
                        height="70"
                        width="70"
                        color="white"
                        animationDuration="2"
                        ariaLabel="rotating-lines-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        strokeColor='#12B7B6'
                        strokeWidth={3}
                    />
                </div>
            )}
        </div>
    </div>
  )
}

export default HousesDetail