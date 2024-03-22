import React, { useEffect, useState } from 'react';
import "./HousesDetail.css";
import { useFetcher, useNavigate } from 'react-router-dom';
import { Carousel } from "antd";
import { getRentalHomes, getSaleHomes } from '../../Api/api';
import { IMAGE_URL } from '../../URLs';
import { RotatingLines } from 'react-loader-spinner'

import logo from "../../assets/svg/real-estate-logo.svg";
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank, MdLocationPin } from "react-icons/md";
import ViewHouse from '../Home/ViewHouse';

const HousesDetail = ({ selectedHome, filterHomesList, setSelectedHome }) => {
    const navigate = useNavigate();
    const [ loader, setLoader ] = useState(true);
    const [viewHouseInfo, setViewHouseInfo] = useState(false);
    const [ showListOptions, setShowListOptions ] = useState(false);
    const [ showPriceOptions, setShowPriceOptions ] = useState(false);
    const [ showBedsOptions, setShowBedsOptions ] = useState(false);
    const [ showHomeType, setShowHomeType ] = useState(false);

    const [ selectedList, setSelectList ] = useState("forRent");
    const [ minPrice, setMinPrice ] = useState("");
    const [ maxPrice, setMaxPrice ] = useState("");
    const [ bedrooms, setBedrooms ] = useState("any");
    const [ bathrooms, setBathrooms ] = useState("any");
    const [ selectedHomeType, setSelectedHomeType ] = useState("all");

    const [ allRentalHomes, setAllRentalHomes ] = useState([]);
    const [ allSaleHomes, setAllSaleHomes ] = useState([]);
    const [ priceFilterRentalHomes, setPriceFilterRentalHomes ] = useState([]);
    const [ priceFilterSaleHomes, setPriceFilterSaleHomes] = useState([]);
    const [ allRentalHomesBackup, setAllRentalHomesBackup ] = useState([]);
    const [ allSaleHomesBackup, setAllSaleHomesBackup ] = useState([]);

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
        if(bedrooms === "any" && bathrooms === "any"){
            if(minPrice === "" && maxPrice === ""){
                setAllRentalHomes(allRentalHomesBackup);
                setAllSaleHomes(allRentalHomesBackup)
            }else if(priceFilterRentalHomes?.length !== 0 || priceFilterSaleHomes?.length !== 0){
                setAllRentalHomes(priceFilterRentalHomes);
                setAllSaleHomes(priceFilterSaleHomes);
            }else{
                setAllRentalHomes(allRentalHomesBackup);
                setAllSaleHomes(allSaleHomesBackup);
            }
        }else if(bedrooms !== "any" && bathrooms === "any"){
            if(priceFilterRentalHomes?.length !== 0 || priceFilterSaleHomes?.length !== 0){
                if(minPrice === "" && maxPrice === ""){
                    setAllRentalHomes(allRentalHomesBackup.filter((item) => parseInt(item?.bedrooms) >= parseInt(bedrooms)));
                    setAllSaleHomes(allSaleHomesBackup.filter((item) => parseInt(item?.bedrooms) >= parseInt(bedrooms)));
                }else{
                    setAllRentalHomes(priceFilterRentalHomes.filter((item) => parseInt(item?.bedrooms) >= parseInt(bedrooms)));
                    setAllSaleHomes(priceFilterSaleHomes.filter((item) => parseInt(item?.bedrooms) >= parseInt(bedrooms)));
                }
            }else{
                setAllRentalHomes(allRentalHomesBackup.filter((item) => parseInt(item?.bedrooms) >= parseInt(bedrooms)));
                setAllSaleHomes(allSaleHomesBackup.filter((item) => parseInt(item?.bedrooms) >= parseInt(bedrooms)));
            }
        }
        if(bathrooms !== "any" && bedrooms === "any"){
            if(priceFilterRentalHomes?.length !== 0 || priceFilterSaleHomes?.length !== 0){
                if(minPrice === "" && maxPrice === ""){
                    setAllRentalHomes(allRentalHomesBackup.filter((item) => parseFloat(item?.bathrooms) >= parseFloat(bathrooms)));
                    setAllSaleHomes(allSaleHomesBackup.filter((item) => parseFloat(item?.bathrooms) >= parseFloat(bathrooms)));
                }else{
                    setAllRentalHomes(priceFilterRentalHomes.filter((item) => parseFloat(item?.bathrooms) >= parseFloat(bathrooms)));
                    setAllSaleHomes(priceFilterSaleHomes.filter((item) => parseFloat(item?.bathrooms) >= parseFloat(bathrooms)));
                }
            }else{
                setAllRentalHomes(allRentalHomesBackup.filter((item) => parseFloat(item?.bathrooms) >= parseFloat(bathrooms)));
                setAllSaleHomes(allSaleHomesBackup.filter((item) => parseFloat(item?.bathrooms) >= parseFloat(bathrooms)));
            }
        }
        if(bathrooms !== "any" && bedrooms !== "any"){
            if(priceFilterRentalHomes?.length !== 0 || priceFilterSaleHomes?.length !== 0){
                if(minPrice === "" && maxPrice === ""){
                    setAllRentalHomes(allRentalHomesBackup.filter((item) => (parseFloat(item?.bathrooms) >= parseFloat(bathrooms) && parseInt(item?.bedrooms) >= parseInt(bedrooms))));
                    setAllSaleHomes(allSaleHomesBackup.filter((item) => (parseFloat(item?.bathrooms) >= parseFloat(bathrooms) && parseInt(item?.bedrooms) >= parseInt(bedrooms))));
                }else{
                    setAllRentalHomes(priceFilterRentalHomes.filter((item) => (parseFloat(item?.bathrooms) >= parseFloat(bathrooms) && parseInt(item?.bedrooms) >= parseInt(bedrooms))));
                    setAllSaleHomes(priceFilterSaleHomes.filter((item) => (parseFloat(item?.bathrooms) >= parseFloat(bathrooms) && parseInt(item?.bedrooms) >= parseInt(bedrooms))));
                }
            }else{
                setAllRentalHomes(allRentalHomesBackup.filter((item) => (parseFloat(item?.bathrooms) >= parseFloat(bathrooms) && parseInt(item?.bedrooms) >= parseInt(bedrooms))));
                setAllSaleHomes(allSaleHomesBackup.filter((item) => (parseFloat(item?.bathrooms) >= parseFloat(bathrooms) && parseInt(item?.bedrooms) >= parseInt(bedrooms))));
            }
        }
    };

    const fn_changeHomeType = (value) => {
        setShowHomeType(false);
        setSelectedHomeType(value);
    }

    const fn_showOptions = (setValue, value) => {
        setShowListOptions(false);
        setShowPriceOptions(false);
        setShowBedsOptions(false);
        setShowHomeType(false);

        setValue(!value);
    }

    const fn_getData = async() => {
        const rentalHomes = await getRentalHomes();
        const saleHomes = await getSaleHomes();
        if(rentalHomes?.status === 200){
            setAllRentalHomes(rentalHomes?.data?.message);
            setAllRentalHomesBackup(rentalHomes?.data?.message);
        }
        if(saleHomes?.status === 200){
            setAllSaleHomes(saleHomes?.data?.message);
            setAllSaleHomesBackup(saleHomes?.data?.message);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
            fn_getData();
        },500);
        if(Object.keys(selectedHome)?.length > 0){
            setViewHouseInfo(true);
        }
        if(filterHomesList !== ""){
            setSelectList(filterHomesList);
        }
    }, []);

    useEffect(() => {
        if(loader){
            setTimeout(() => {
                setLoader(false)
            }, 500)
        }
    }, [loader]);

    useEffect(() => {
        if(minPrice !== "" && maxPrice !== ""){
            setLoader(true);
            setAllRentalHomes(allRentalHomesBackup.filter((item) => (parseInt(item?.monthlyPrice) >= parseInt(minPrice) && parseInt(item?.monthlyPrice) <= parseInt(maxPrice))));
            setAllSaleHomes(allSaleHomesBackup.filter((item) => (parseInt(item?.salePrice) >= parseInt(minPrice) && parseInt(item?.salePrice) <= parseInt(maxPrice))));
            setPriceFilterRentalHomes(allRentalHomesBackup.filter((item) => (parseInt(item?.monthlyPrice) >= parseInt(minPrice) && parseInt(item?.monthlyPrice) <= parseInt(maxPrice))));
            setPriceFilterSaleHomes(allSaleHomesBackup.filter((item) => (parseInt(item?.salePrice) >= parseInt(minPrice) && parseInt(item?.salePrice) <= parseInt(maxPrice))));
        }else if(minPrice === "" && maxPrice !== ""){
            setLoader(true);
            setAllRentalHomes(allRentalHomesBackup.filter((item) => parseInt(item?.monthlyPrice) <= parseInt(maxPrice)));
            setAllSaleHomes(allSaleHomesBackup.filter((item) => parseInt(item?.salePrice) <= parseInt(maxPrice)));
            setPriceFilterRentalHomes(allRentalHomesBackup.filter((item) => parseInt(item?.monthlyPrice) <= parseInt(maxPrice)));
            setPriceFilterSaleHomes(allSaleHomesBackup.filter((item) => parseInt(item?.salePrice) <= parseInt(maxPrice)));
        }else if(minPrice !== "" && maxPrice === ""){
            setLoader(true);
            setAllRentalHomes(allRentalHomesBackup.filter((item) => parseInt(item?.monthlyPrice) >= parseInt(minPrice)));
            setAllSaleHomes(allSaleHomesBackup.filter((item) => parseInt(item?.salePrice) >= parseInt(minPrice)));
            setPriceFilterRentalHomes(allRentalHomesBackup.filter((item) => parseInt(item?.monthlyPrice) >= parseInt(minPrice)));
            setPriceFilterSaleHomes(allSaleHomesBackup.filter((item) => parseInt(item?.salePrice) >= parseInt(minPrice)));
        }else{
            setLoader(true);
            if(bedrooms !== "any"){
                setPriceFilterRentalHomes(allRentalHomesBackup?.filter(item => parseInt(item?.bedrooms) >= parseInt(bedrooms)));
                setPriceFilterSaleHomes(allSaleHomesBackup?.filter(item => parseInt(item?.bedrooms) >= parseInt(bedrooms)));
            }else{
                setPriceFilterRentalHomes([]);
                setPriceFilterSaleHomes([]);
                fn_getData();
            }
        }
    }, [minPrice, maxPrice]);

    useEffect(() => {
        setLoader(true);
        if(minPrice === "" && maxPrice === "" && bedrooms === "any" && bathrooms === "any"){
            if(selectedHomeType === "all"){
                setAllRentalHomes(allRentalHomesBackup);
                setAllSaleHomes(allSaleHomesBackup);
            }else{
                setAllRentalHomes(allRentalHomesBackup?.filter(item => item?.property === selectedHomeType))
                setAllSaleHomesBackup(allSaleHomesBackup?.filter(item => item?.property === selectedHomeType))
            }
        }else{
            if(priceFilterRentalHomes.length !== 0 || priceFilterSaleHomes !== 0){
                if(selectedHomeType === "all"){
                    setAllRentalHomes(priceFilterRentalHomes);
                    setAllSaleHomes(priceFilterSaleHomes);
                }else{
                    setAllRentalHomes(priceFilterRentalHomes?.filter(item => item?.property === selectedHomeType));
                    setAllSaleHomes(priceFilterSaleHomes?.filter(item => item?.property === selectedHomeType));
                }
            }
        }
    }, [selectedHomeType]);

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
            </div>
            {!loader ? (
                <div className='houses-list lg:grid-cols-3 gap-5 mx-[13px] md:mx-[30px] lg:mx-[70px] py-10'>
                {(selectedList == "forRent" ? allRentalHomes : allSaleHomes).map((item, index) => (
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
                ))}
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