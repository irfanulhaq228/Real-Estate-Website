import { useFormik } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";
import styled from "styled-components";
import { SellByOwnerHomeSchema } from "../../Schema/Schema";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sellHomeByOwner } from "../../Api/api";
import { updateOwnerHomeInfo } from "../../Features/Features";

const getColor = (props) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isFocused) {
    return "#2196f3";
  }
  return "#eeeeee";
};
const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border-width: 2px;
  border-radius: 10px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: black;
  font-weight: bold;
  font-size: 1.4rem;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

const Section1 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ownerHomeInfo = useSelector((state) => state.ownerHomeInfo);
  const [images, setImages] = useState([]);
  const [sendImages, setSendImages] = useState([]);
  useEffect(() => {
    if (Object.keys(ownerHomeInfo).length === 0) {
      navigate("/for-sale-by-owner");
    }
  }, []);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file, index) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImages((prevState) => [
          ...prevState,
          { id: index, src: e.target.result, detail: file },
        ]);
        setSendImages((prevState) => [
          ...prevState,
          file,
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);
  const Formik = useFormik({
    initialValues: {
      price: "",
      homeType: "",
      lotSize: "",
      lotUnit: "sqft",
      bedrooms: "",
      bathrooms: "",
      description: "",
      relatedWebsite: "",
      phone: "",
    },
    validationSchema: SellByOwnerHomeSchema,
    onSubmit: async (values, { resetForm }) => {
      if (images?.length === 0) {
        return toast.error("Select Home Image");
      }
      const params = new FormData();
      params.append("bathrooms", values?.bathrooms);
      params.append("bedrooms", values?.bedrooms);
      params.append("city", ownerHomeInfo?.city);
      params.append("description", values?.description);
      params.append("homeType", values?.homeType);
      for(let i = 0; i < sendImages.length; i++){
        params.append('images', sendImages[i])
      }
      params.append('location', JSON.stringify({ type: "Point", coordinates: [ownerHomeInfo?.center?.lng, ownerHomeInfo?.center?.lat] }));
      params.append("lotSize", values?.lotSize);
      params.append("lotUnit", values?.lotUnit);
      params.append("phone", values?.phone);
      params.append("price", values?.price);
      params.append("relatedWebsite", values?.relatedWebsite);
      params.append("streetAddress", ownerHomeInfo?.streetAddress);
      params.append("unit", ownerHomeInfo?.unit);
      params.append("zipCode", ownerHomeInfo?.zipCode);
      const result = await sellHomeByOwner(params);
      if(result?.status === 200){
        toast.success("Data Saved Successfully")
        dispatch(updateOwnerHomeInfo({}));
        navigate("/for-sale-by-owner");
      }else{
        toast.error("Network Error")
      }
    },
  });
  return (
    <form
      className="section-1 px-[13px] md:px-[30px] lg:px-[70px] mt-[20px]"
      onSubmit={Formik.handleSubmit}
    >
      <p className="text-[30px] font-[700]">Listing for Sale by Owner</p>
      <p className="mt-2 text-[15px] font-[500]">
        Your Street Address, City, Zip code
      </p>
      <p className="mt-3 mb-8 text-[13px]">
        Post once and your home will be listed, reaching buyers on one of the
        largest real estate networks on the Web. Plus, home shoppers receive
        emails about new homes on the market – including yours.
      </p>
      {/* Establish your price */}
      <div className="flex flex-col gap-2 py-8 border-t border-b border-gray-600">
        <label className="text-[20px] font-[600]">Establish your price</label>
        <div className="border border-gray-300 rounded h-[35px] text-[13px] font-[500] focus:outline-none focus:border-gray-400 px-2 bg-white flex items-center">
          <label className="text-gray-600">$</label>
          <input
            type="number"
            className="flex-1 rounded h-[33px] text-[13px] font-[500] focus:outline-none px-2"
            name="price"
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
          />
        </div>
        {Formik.touched.price && Formik.errors.price && (
          <p className="text-[11px] font-[500] mt-[-7px] text-[red]">
            {Formik.errors.price}
          </p>
        )}
      </div>
      {/* Photos / Home Facts */}
      <div className="py-8 flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <label className="text-[20px] font-[600]">Photos</label>
          <div>
            <DropBox onDrop={onDrop} />
            <ShowImage images={images} />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-[20px] font-[600]">Home Facts</label>
          <div className="flex flex-col gap-1">
            <label className="text-[13px] font-[500]">Home Type</label>
            <select
              className="border border-gray-300 px-2 h-[35px] rounded focus:outline-none text-[13px] font-[500]"
              name="homeType"
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
            >
              <option>---Select Home Type---</option>
              <option>House</option>
              <option>Appartment</option>
              <option>Condo</option>
            </select>
            {Formik.touched.homeType && Formik.errors.homeType && (
              <p className="text-[11px] font-[500] mt-[-4px] text-[red]">
                {Formik.errors.homeType}
              </p>
            )}
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col gap-1 flex-1">
              <label className="text-[13px] font-[500]">Lot Size</label>
              <input
                type="number"
                className="border border-gray-300 px-2 h-[35px] rounded focus:outline-none text-[13px] font-[500]"
                name="lotSize"
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
              />
              {Formik.touched.lotSize && Formik.errors.lotSize && (
                <p className="text-[11px] font-[500] mt-[-4px] text-[red]">
                  {Formik.errors.lotSize}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <label className="text-[13px] font-[500]">&nbsp;</label>
              <select
                className="border border-gray-300 px-2 h-[35px] rounded focus:outline-none text-[13px] font-[500]"
                name="lotUnit"
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
              >
                <option value={"sqft"}>sqft</option>
                <option value={"acre"}>acre</option>
              </select>
              {Formik.touched.lotUnit && Formik.errors.lotUnit && (
                <p className="text-[11px] font-[500] mt-[-4px] text-[red]">
                  {Formik.errors.lotUnit}
                </p>
              )}
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col gap-1 flex-1">
              <label className="text-[13px] font-[500]">Bedrooms</label>
              <input
                className="border border-gray-300 px-2 h-[35px] rounded focus:outline-none text-[13px] font-[500]"
                name="bedrooms"
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
              />
              {Formik.touched.bedrooms && Formik.errors.bedrooms && (
                <p className="text-[11px] font-[500] mt-[-4px] text-[red]">
                  {Formik.errors.bedrooms}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <label className="text-[13px] font-[500]">Bathrooms</label>
              <input
                className="border border-gray-300 px-2 h-[35px] rounded focus:outline-none text-[13px] font-[500]"
                name="bathrooms"
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
              />
              {Formik.touched.bathrooms && Formik.errors.bathrooms && (
                <p className="text-[11px] font-[500] mt-[-4px] text-[red]">
                  {Formik.errors.bathrooms}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[13px] font-[500]">Describe your Home</label>
            <textarea
              className="border border-gray-300 p-2 h-[100px] rounded focus:outline-none text-[13px] font-[500]"
              name="description"
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
            />
            {Formik.touched.description && Formik.errors.description && (
              <p className="text-[11px] font-[500] mt-[-4px] text-[red]">
                {Formik.errors.description}
              </p>
            )}
          </div>
        </div>
      </div>
      {/* Additional Information */}
      <div className="flex flex-col gap-2 py-8 border-t border-b border-gray-600">
        <label className="text-[20px] font-[600]">Additional Information</label>
        <label className="text-[13px] font-[500]">Related Website</label>
        <input
          placeholder="www.sample.com"
          className="border border-gray-300 px-2 h-[35px] rounded focus:outline-none text-[13px] font-[500]"
          name="relatedWebsite"
          onChange={Formik.handleChange}
          onBlur={Formik.handleBlur}
        />
        {Formik.touched.relatedWebsite && Formik.errors.relatedWebsite && (
          <p className="text-[11px] font-[500] mt-[-7px] text-[red]">
            {Formik.errors.relatedWebsite}
          </p>
        )}
      </div>
      {/* Contact Information */}
      <div className="py-8 flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <label className="text-[20px] font-[600]">Contact Information</label>
          <p className="text-[12px] mt-[-10px]">
            Prospective buyers will reach out to you via the email address you
            provide during your registration on Zillow. Additionally, please
            include your phone number in the listing here.
          </p>
          <div className="flex flex-col gap-1">
            <label className="text-[13px] font-[500]">Phone Number</label>
            <input
              type="number"
              placeholder="(555) 555-5555"
              className="border border-gray-300 p-2 h-[35px] rounded focus:outline-none text-[13px] font-[500]"
              name="phone"
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
            />
            {Formik.touched.phone && Formik.errors.phone && (
              <p className="text-[11px] font-[500] mt-[-4px] text-[red]">
                {Formik.errors.phone}
              </p>
            )}
          </div>
        </div>
      </div>
      {/* Button */}
      <input
        type="submit"
        value={"Post for sale by owner"}
        className="bg-[var(--main-text-color)] text-white rounded text-[13px] font-[700] h-[35px] w-[200px] cursor-pointer hover:scale-[1.005] active:scale-[0.995] mb-8"
      />
    </form>
  );
};

export default Section1;

function DropBox({ onDrop }) {
  const {
    getRootProps,
    getInputProps,
    open,
    isDragAccept,
    isFocused,
    isDragReject,
  } = useDropzone({
    accept: "image/*",
    onDrop,
    noClick: true,
    noKeyboard: true,
  });
  return (
    <>
      {" "}
      <section className="dropbox">
        <Container
          className="dropbox"
          {...getRootProps({ isDragAccept, isFocused, isDragReject })}
        >
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here</p>
          <button
            type="button"
            className="btn text-[13px] bg-[var(--main-text-color)] text-white h-[35px] w-[200px] rounded"
            onClick={open}
          >
            Click to select file
          </button>
        </Container>
      </section>
    </>
  );
}

function Image({ image }) {
  return (
    <div>
      <img
        alt=""
        src={image.src}
        className="h-[100px] w-[130px] object-cover rounded"
      />
    </div>
  );
}

const ShowImage = ({ images }) => {
  const show = (image, index) => {
    return <Image key={index} image={image} />;
  };
  return (
    <div className="container flex gap-1 flex-wrap">{images.map(show)}</div>
  );
};
