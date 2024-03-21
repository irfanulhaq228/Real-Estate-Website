import { useEffect, useState } from "react";
import { Modal } from "antd";

import { GoDotFill } from "react-icons/go";

const ViewHouse = ({ viewHouseInfo, setViewHouseInfo, IMAGE_URL, houseInfo, setSelectedHome }) => {
    const [viewImage, setViewImage] = useState();
    useEffect(() => {
        setViewImage(houseInfo?.images?.[0])
    }, [houseInfo, viewHouseInfo])
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
        <div className="flex justify-center gap-5">
            <img src={`${IMAGE_URL}/${viewImage}`} className="rounded-[15px] lg:w-[600px] lg:h-[400px] object-cover" />
            <div className="w-[150px] flex flex-col gap-5 items-center justify-center">
                {houseInfo?.images?.map((item, index) => (
                    <img key={index} onMouseEnter={() => setViewImage(item)} src={`${IMAGE_URL}/${item}`} className="h-[80px] w-[80px] rounded-full object-cover cursor-pointer hover:scale-[1.15] hover:shadow-lg" />
                ))}
            </div>
        </div>
        <div className="flex lg:justify-between lg:px-[100px]">
            <div>
                <p className="font-[700] text-[35px]">$ {houseInfo?.monthlyPrice ? houseInfo?.monthlyPrice : houseInfo?.salePrice}</p>
                {houseInfo?.advancePayment && (
                    <p className="mb-1 text-[16px]">
                        <span>Advance Payment:</span>
                        {" "}
                        <span className="font-[700]">$ {houseInfo?.advancePayment}</span>
                    </p>
                )}
                <p className="font-[500]">{houseInfo?.address}</p>
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
                    <p className="text-[30px] font-[700]">{houseInfo?.sizeSqft ? houseInfo?.sizeSqft : houseInfo?.lotSqft}</p>
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
        </div>
      </div>
      <hr />
    </Modal>
  );
};

export default ViewHouse
