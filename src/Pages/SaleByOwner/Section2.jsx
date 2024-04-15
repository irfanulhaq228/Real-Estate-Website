import React, { useState } from "react";
import { useFormik } from "formik";

import MapModal from "./MapModal";

import { SellByOwnerSchema } from "../../Schema/Schema";

const Section2 = () => {
  const [ mapModal, setMapModal ] = useState(false);
  const Formik = useFormik({
    initialValues: {
      streetAddress: "",
      unit: "",
      city: "",
      zipCode: "",
    },
    validationSchema: SellByOwnerSchema,
    onSubmit: async (values) => {
      setMapModal(true);
    },
  });
  return (
    <div className="section-2 px-[13px] md:px-[30px] lg:px-[70px] py-[100px]">
      {mapModal && <MapModal mapModal={mapModal} setMapModal={setMapModal} />}
      <p className="text-center md:text-start text-[20px] sm:text-[30px] font-[700] capitalize">
        Post a Home For Sale by Owner Listing
      </p>
      <form className="flex flex-col gap-3 mt-5" onSubmit={Formik.handleSubmit}>
        <div className="flex flex-col gap-1">
          <label className="text-[13px] font-[700]">Street Address</label>
          <input
            className="border border-gray-200 focus:outline-none focus:border-gray-300 rounded h-[40px] text-[13px] px-2 font-[500]"
            placeholder="Street Address"
            name="streetAddress"
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            autoComplete="off"
          />
          {Formik.touched.streetAddress && Formik.errors.streetAddress && <p className="text-[11px] mt-[-3px] text-[red] font-[500]">{Formik.errors.streetAddress}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[13px] font-[700]">Unit (optional)</label>
          <input
            className="border border-gray-200 focus:outline-none focus:border-gray-300 rounded h-[40px] text-[13px] px-2 font-[500]"
            placeholder="Unit"
            name="unit"
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            autoComplete="off"
          />
          {Formik.touched.unit && Formik.errors.unit && <p className="text-[11px] mt-[-3px] text-[red] font-[500]">{Formik.errors.unit}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[13px] font-[700]">City</label>
          <input
            className="border border-gray-200 focus:outline-none focus:border-gray-300 rounded h-[40px] text-[13px] px-2 font-[500]"
            placeholder="City"
            name="city"
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            autoComplete="off"
          />
          {Formik.touched.city && Formik.errors.city && <p className="text-[11px] mt-[-3px] text-[red] font-[500]">{Formik.errors.city}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[13px] font-[700]">Zip Code</label>
          <input
            className="border border-gray-200 focus:outline-none focus:border-gray-300 rounded h-[40px] text-[13px] px-2 font-[500]"
            placeholder="Zip"
            name="zipCode"
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            autoComplete="off"
          />
          {Formik.touched.zipCode && Formik.errors.zipCode && <p className="text-[11px] mt-[-3px] text-[red] font-[500]">{Formik.errors.zipCode}</p>}
        </div>
        <input
          type="submit"
          value={"Continue"}
          className="bg-[var(--main-text-color)] h-[40px] rounded text-white font-[700] text-[14px] cursor-pointer mt-4 hover:scale-[1.005] active:scale-[0.995] w-[150px]"
        />
      </form>
    </div>
  );
};

export default Section2;
