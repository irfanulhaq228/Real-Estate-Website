import { useEffect, useState } from "react";
import { Modal } from "antd";

import { GoDotFill } from "react-icons/go";
import { BsDot } from "react-icons/bs";
import { getHomeInfoById } from "../../Api/api";
import { MdLocationPin } from "react-icons/md";

const ViewHouse = ({ viewHouseInfo, setViewHouseInfo, IMAGE_URL, houseInfo, setHouseInfo, setSelectedHome }) => {
    const [viewImage, setViewImage] = useState();
    const [ mapShows, setmapShows ] = useState(); 
    const [ nearbyHouses, setNearbyHouses ] = useState([]);
    useEffect(() => {
        var type = "rent";
        setViewImage(houseInfo?.images?.[0]);
        if(houseInfo?.monthlyPrice ? type = "rent" : type = "sale");
        const fn_res = async() => {
            if(Object.keys(houseInfo).length > 0){
                const result = await getHomeInfoById(houseInfo?._id, type);
                if(result?.status === 200){
                    setNearbyHouses(result?.data?.message?.nearbyHouses);
                }
            }
        };
        fn_res();
    }, [houseInfo, viewHouseInfo]);
    const fn_showNearbyHouse = (item) => {
        setHouseInfo(item);
        window.scrollTo({ top: 0 });
        setViewHouseInfo(false);
        setTimeout(() => {
            setViewHouseInfo(true);
        }, 300);
    }
  return (
    <Modal
      title={`${houseInfo?.monthlyPrice ? "For Rental" : "For Sale"} House Detail`}
      style={{ top: 20 }}
      open={viewHouseInfo}
      onOk={() => {setViewHouseInfo(false); setSelectedHome({})}}
      onCancel={() => {setViewHouseInfo(false); setSelectedHome({})}}
      width={1150}
      okButtonProps={{ style: { display: "none" } }}
      cancelButtonProps={{
        style: { backgroundColor: "var(--main-text-color)", color: "white" },
      }}
      cancelText="Close"
    >
      <hr />
      <div className="my-5 flex flex-col gap-10" style={{ fontFamily: "Montserrat" }}>
        <div className="flex flex-col md:flex-row justify-center gap-5">
            <img src={`${IMAGE_URL}/${viewImage}`} className="rounded-[15px] md:w-[600px] md:h-[400px] object-cover" />
            <div className="w-[150px] flex w-full md:w-auto md:flex-col gap-5 items-center justify-center">
                {houseInfo?.images?.map((item, index) => (
                    <img key={index} onMouseEnter={() => setViewImage(item)} src={`${IMAGE_URL}/${item}`} className="h-[80px] w-[80px] rounded-full object-cover cursor-pointer hover:scale-[1.15] hover:shadow-lg" />
                ))}
            </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:px-[100px] gap-5">
            <div>
                <p className="font-[700] text-[35px] text-center lg:text-start">$ {houseInfo?.monthlyPrice ? houseInfo?.monthlyPrice : houseInfo?.salePrice}</p>
                {houseInfo?.advancePayment && (
                    <p className="mb-1 text-[16px] text-center lg:text-start">
                        <span>Advance Payment:</span>
                        {" "}
                        <span className="font-[700]">$ {houseInfo?.advancePayment}</span>
                    </p>
                )}
                <p className="font-[500] text-center lg:text-start">{houseInfo?.address}</p>
            </div>
            <div className="flex gap-5">
                <div className="bg-[var(--main-text-color-blur)] flex flex-col items-center justify-center p-5 rounded-[10px] w-[100px]">
                    <p className="text-[30px] font-[700]">{houseInfo?.bedrooms}</p>
                    <p className="text-[16px] font-[500]">beds</p>
                </div>
                <div className="bg-[var(--main-text-color-blur)] flex flex-col items-center justify-center p-5 rounded-[10px] w-[100px]">
                    <p className="text-[30px] font-[700]">{houseInfo?.bathrooms}</p>
                    <p className="text-[16px] font-[500]">baths</p>
                </div>
                <div className="bg-[var(--main-text-color-blur)] flex flex-col items-center justify-center p-5 rounded-[10px]">
                    <p className="text-[30px] font-[700]">{houseInfo?.sqft}</p>
                    <p className="text-[16px] font-[500]">sqft</p>
                </div>
            </div>
        </div>
        <hr className="lg:mx-[100px]" />
        <div className="lg:px-[100px] flex flex-col gap-2">
            <p className="text-[20px] font-[700]">Detailed Overview</p>
            <p className="text-[15px]">{houseInfo?.overview}</p>
        </div>
        <div className="lg:px-[100px] flex flex-col gap-2">
            <p className="text-[20px] font-[700]">Key Features</p>
            {houseInfo?.keyFeatures?.split(",").map((item) => (
                <p className="flex items-center gap-2"><GoDotFill />{item}</p>
            ))}
        </div>
        <div className="lg:px-[100px] flex flex-col gap-2">
            <p className="text-[20px] font-[700]">Services</p>
            {houseInfo?.services?.split(",").map((item) => (
                <p className="flex items-center gap-2"><GoDotFill />{item}</p>
            ))}
        </div>
        <div className="lg:px-[100px] flex flex-col gap-2">
            <p className="text-[20px] font-[700]">Other Info</p>
            <p>
                <span>Property:</span>
                {" "}
                <span className="font-[600] capitalize">{houseInfo?.property}</span>
            </p>
            <p>
                <span>Posted on:</span>
                {" "}
                <span className="font-[600]">{new Date(houseInfo?.createdAt).toDateString()}</span>
            </p>
            {houseInfo?.lotSqft && (
                <p>
                    <span>Lot Sqft:</span>
                    {" "}
                    <span className="font-[600]">{houseInfo?.lotSqft} sqft.</span>
                </p>
            )}
        </div>
        <div className="lg:px-[100px] flex flex-col gap-2">
            <p className="text-[20px] font-[700]">Nearby Areas</p>
            <div className="flex flex-col gap-2">
                {houseInfo?.nearbyAddresses && houseInfo?.nearbyAddresses?.map((item, index) => (
                    <div className="bg-gray-200 py-2 px-1 rounded-[5px]">
                        <div className="flex items-center">
                            <BsDot className="text-[25px]" />
                            <p className="text-[13px]">{item?.address}</p>
                        </div>
                        <div className="text-right">
                            <button className="text-[12px] font-[600] text-[var(--sidebar-color)] py-1 px-2 rounded mt-1 hover:underline" onClick={() => {if(mapShows === index){setmapShows()}else{setmapShows(index)}}}>{mapShows === index ? "Close Map" : "View on Map"}</button>
                        </div>
                        {mapShows ===index && (
                            <iframe
                                width="100%"
                                height="300"
                                style={{ border: "none", marginTop: "10px", borderRadius: "10px" }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                src={`https://maps.google.com/maps?q=${item?.lat},${item?.lon}&z=${12}&output=embed`}
                                title="google map"
                            >
                            </iframe>
                        )}
                    </div>
                ))}
          </div>
        </div>
        <div className="lg:px-[100px] flex flex-col gap-2">
            <p className="text-[20px] font-[700]">Nearby Houses</p>
            <div className="grid grid-cols-2 mt-2 gap-1">
                {nearbyHouses?.map((item, index) => (
                    <div key={index} className="flex justify-center">
                        <div className="rounded-[10px] house-boxes sm:h-[330px] w-[300px]" onClick={() => fn_showNearbyHouse(item)}>
                            <img src={`${IMAGE_URL}/${item?.images[0]}`} width={300} className="h-[200px] rounded-t-[10px]" />
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
                    </div>
                ))}
            </div>
        </div>
      </div>
      <hr />
    </Modal>
  );
};

export default ViewHouse
