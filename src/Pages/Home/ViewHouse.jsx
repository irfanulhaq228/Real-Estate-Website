import { useEffect, useState } from "react";
import { Modal } from "antd";
import { useFormik } from "formik";

import { AgentContactSchema } from "../../Schema/Schema";

import { GoDotFill } from "react-icons/go";
import { BsDot } from "react-icons/bs";
import { contactAgent, getHomeInfoById, requestToTour } from "../../Api/api";
import { MdLocationPin, MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import toast from "react-hot-toast";

const ViewHouse = ({ viewHouseInfo, setViewHouseInfo, IMAGE_URL, houseInfo, setHouseInfo, setSelectedHome }) => {
    const [ contactAgentModal, setContactAgentModal ] = useState(false);
    const [ TourModal, setTourModal ] = useState(false);
    const [viewImage, setViewImage] = useState();
    const [ mapShows, setmapShows ] = useState(); 
    const [ nearbyHouses, setNearbyHouses ] = useState([]);
    const [ loader, setLoader ] = useState(false);
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
    const Formik = useFormik({
        initialValues: { name: "", phone: "", email: "", message: "" },
        validationSchema: AgentContactSchema,
        onSubmit: async(values, { resetForm }) => {
            setLoader(true);
            const result = await contactAgent({ ...values, houseId: houseInfo?._id, houseType: houseInfo?.salePrice ? "sale" : "rent"});
            if(result?.status === 200){
                toast.success("Message Forwarded to the Agent");
                resetForm();
                setContactAgentModal(false);
                setLoader(false);
            }
        }
    });
    // ======================Request a Tour==================
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectTime, setSelectTime] = useState(null);
    const fromTourDate = new Date(houseInfo.fromTourDate);
    const toTourDate = new Date(houseInfo.toTourDate);
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const generateDates = (fromDate, toDate) => {
        const dates = [];
        const currentDate = new Date(fromDate);
    
        while (currentDate <= toDate) {
            const dayOfWeek = daysOfWeek[currentDate.getDay()];
            const month = monthsOfYear[currentDate.getMonth()];
            const date = currentDate.getDate();
    
            dates.push({ day: dayOfWeek, date: `${month} ${date}` });
    
            currentDate.setDate(currentDate.getDate() + 1);
        }
    
        return dates;
    };
    const dates = generateDates(fromTourDate, toTourDate);
    const [startIndex, setStartIndex] = useState(0);
    const handleForward = () => {
        if (startIndex + 4 < dates.length) {
            setStartIndex(startIndex + 4);
        }
    };
    const handleBackward = () => {
        if (startIndex - 4 >= 0) {
            setStartIndex(startIndex - 4);
        }
    };
    const handleDateClick = (date) => {
        setSelectedDate(date);
    };
    const TourFormik = useFormik({
        initialValues: { name: "", email: "", phone: "", message: "" },
        validationSchema: AgentContactSchema,
        onSubmit: async(values, {resetForm} ) => {
            if(selectedDate === null)return toast.error("Select Date For Tour")
            if(selectTime === null)return toast.error("Select Time For Tour")
            setLoader(true);
            const result = await requestToTour({ ...values, selectedDate, selectTime, houseId: houseInfo?._id, houseType: houseInfo?.salePrice ? "sale" : "rent" }); 
            if(result?.status === 200){
                setTourModal(false);
                setSelectedDate(null);
                setSelectTime(null);
                resetForm();
                setStartIndex(0);
                setLoader(false);
                toast.success("Request Message Sent Successfully")
            }else{
                toast.error("Message Failed");
            }
        }
    });
  return (
    <>
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
            <div className="lg:px-[100px] flex gap-5">
                <button className="bg-[var(--main-text-color)] w-[200px] h-[40px] rounded-[5px] text-white font-[15px] font-[600]" onClick={() => setContactAgentModal(true)}>Contact agent</button>
                <button className="bg-[var(--main-text-color)] w-[200px] h-[40px] rounded-[5px] text-white font-[15px] font-[600]" onClick={() => setTourModal(true)}>Request a Tour</button>
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
        <Modal
            title={`Contact Agent`}
            style={{ top: 50, fontFamily: "Montserrat" }}
            open={contactAgentModal}
            onCancel={() => { setContactAgentModal(false); Formik.resetForm(); }}
            width={400}
            footer={null}
        >
            <hr />
            <form className="flex flex-col gap-3 mt-4" onSubmit={Formik.handleSubmit}>
                <div className="flex flex-col gap-1 text-[13px]">
                    <label className="font-[600]">Name</label>
                    <input className="border rounded h-[30px] px-[5px] font-[500] focus:outline-none" autoComplete="off" name="name" value={Formik.values.name} onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                    {Formik.touched.name && Formik.errors.name && <p className="text-[11px] text-[red] mt-[-5px]">{Formik.errors.name}</p>}
                </div>
                <div className="flex flex-col gap-1 text-[13px]">
                    <label className="font-[600]">Phone</label>
                    <input className="border rounded h-[30px] px-[5px] font-[500] focus:outline-none" autoComplete="off" name="phone" value={Formik.values.phone} onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                    {Formik.touched.phone && Formik.errors.phone && <p className="text-[11px] text-[red] mt-[-5px]">{Formik.errors.phone}</p>}
                </div>
                <div className="flex flex-col gap-1 text-[13px]">
                    <label className="font-[600]">Email</label>
                    <input className="border rounded h-[30px] px-[5px] font-[500] focus:outline-none" autoComplete="off" name="email" value={Formik.values.email} onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                    {Formik.touched.email && Formik.errors.email && <p className="text-[11px] text-[red] mt-[-5px]">{Formik.errors.email}</p>}
                </div> 
                <div className="flex flex-col gap-1 text-[13px]">
                    <label className="font-[600]">Message</label>
                    <textarea className="border rounded px-[5px] font-[500] focus:outline-none h-[100px]" autoComplete="off" value={Formik.values.message} name="message" onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                    {Formik.touched.message && Formik.errors.message && <p className="text-[11px] text-[red] mt-[-5px]">{Formik.errors.message}</p>}
                </div>
                <div className="mt-3">
                    {!loader ? (
                        <input type="submit" value={"Contact Agent"} className="w-full bg-[var(--main-text-color)] text-[13px] font-[600] h-[35px] rounded text-white cursor-pointer" />
                    ): (
                        <input type="submit" disabled value={"Loading..."} className="w-full bg-[var(--main-text-color-small-blur)] text-[13px] font-[600] h-[35px] rounded text-white cursor-pointer" />
                    )}
                </div>
            </form>
        </Modal>
        <Modal
            title={`Request a tour`}
            style={{ top: 30, fontFamily: "Montserrat" }}
            open={TourModal}
            onCancel={() => { setTourModal(false); setStartIndex(0) }}
            width={400}
            footer={null}
        >
            <hr />
            <div className="my-4">
                <p className="text-[14px] font-[600]">Pickup date from the list</p>
                <div className="flex gap-1 justify-between my-3">
                    <div className="flex items-center" onClick={handleBackward}><MdArrowBackIos className="scale-[1.2]" style={{ color: startIndex - 4 >= 0 ? 'black' : 'gray', cursor: startIndex - 4 >= 0 ? 'pointer' : 'not-allowed' }} /></div>
                    {dates.slice(startIndex, startIndex + 4).map((date, index) => (
                        <div 
                            key={index} 
                            className={`cursor-pointer w-[80px] h-[90px] border rounded-[5px] flex justify-center items-center flex-col font-[500] ${(selectedDate?.date === date?.date && selectedDate?.day === date?.day) ? 'bg-[var(--main-text-color)] text-white' : 'bg-[var(--main-text-color-blur)]'}`}
                            onClick={() => handleDateClick(date)}
                        >
                            <p className="uppercase">{date.day}</p>
                            <p>{date.date}</p>
                        </div>
                    ))}
                    <div className="flex items-center" onClick={handleForward}><MdArrowForwardIos className="scale-[1.2]" style={{ color: startIndex + 4 < dates.length ? 'black' : 'gray', cursor: startIndex + 4 < dates.length ? 'pointer' : 'not-allowed' }} /></div>
                </div>
                <div className="w-full">
                    <select className="w-full border rounded-[5px] h-[35px] px-[10px] focus:outline-none" onChange={(e) => setSelectTime(e.target.value)}>
                        <option value={""}>---Select---</option>
                        <option>ll:00 am</option>
                        <option>ll:30 am</option>
                        <option>l2:00 pm</option>
                        <option>l2:30 pm</option>
                        <option>0l:00 pm</option>
                        <option>0l:30 pm</option>
                        <option>02:00 pm</option>
                        <option>02:30 pm</option>
                        <option>03:00 pm</option>
                        <option>03:30 pm</option>
                        <option>04:00 pm</option>
                        <option>04:30 pm</option>
                        <option>05:00 pm</option>
                    </select>
                </div>
                <p className="text-[15px] font-[600] mt-5">How can we reach out to confirm the tour?</p>
                <form className="flex flex-col gap-3 my-3" onSubmit={TourFormik.handleSubmit}>
                    <div className="flex flex-col gap-1 text-[13px] font-[500]">
                        <label>Name</label>
                        <input autoComplete="off" className="border rounded h-[30px] px-[5px] focus:outline-none focus:border-gray-400" name="name" value={TourFormik.values.name} onChange={TourFormik.handleChange} />
                        {TourFormik.touched.name && TourFormik.errors.name && <p  className="text-[11px] text-[red] mt-[-5px]">{TourFormik.errors.name}</p>}
                    </div>
                    <div className="flex flex-col gap-1 text-[13px] font-[500]">
                        <label>Email</label>
                        <input autoComplete="off" className="border rounded h-[30px] px-[5px] focus:outline-none focus:border-gray-400" name="email" value={TourFormik.values.email} onChange={TourFormik.handleChange} />
                        {TourFormik.touched.email && TourFormik.errors.email && <p  className="text-[11px] text-[red] mt-[-5px]">{TourFormik.errors.email}</p>}
                    </div>
                    <div className="flex flex-col gap-1 text-[13px] font-[500]">
                        <label>Phone</label>
                        <input autoComplete="off" className="border rounded h-[30px] px-[5px] focus:outline-none focus:border-gray-400" name="phone" value={TourFormik.values.phone} onChange={TourFormik.handleChange} />
                        {TourFormik.touched.phone && TourFormik.errors.phone && <p  className="text-[11px] text-[red] mt-[-5px]">{TourFormik.errors.phone}</p>}
                    </div>
                    <div className="flex flex-col gap-1 text-[13px] font-[500]">
                        <label>Message</label>
                        <textarea className="border rounded h-[100px] px-[5px] focus:outline-none focus:border-gray-400" name="message" value={TourFormik.values.message} onChange={TourFormik.handleChange} />
                        {TourFormik.touched.message && TourFormik.errors.message && <p  className="text-[11px] text-[red] mt-[-5px]">{TourFormik.errors.message}</p>}
                    </div>
                    <div className="mt-3">
                        {!loader ? (
                            <input type="submit" value={"Request tour"} className="w-full bg-[var(--main-text-color)] text-[13px] font-[600] h-[35px] rounded text-white cursor-pointer" />
                        ): (
                            <input type="submit" disabled value={"Loading..."} className="w-full bg-[var(--main-text-color-small-blur)] text-[13px] font-[600] h-[35px] rounded text-white cursor-pointer" />
                        )}
                    </div>
                </form>
            </div>
        </Modal>
    </>
  );
};

export default ViewHouse
