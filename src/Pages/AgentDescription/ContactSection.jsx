import React, { useState } from "react";
import { useFormik } from "formik";

import { IoIosArrowDown } from "react-icons/io";
import { AgentContactSchema } from "../../Schema/Schema";
import { contactAgent } from "../../Api/api";
import toast from "react-hot-toast";

const ContactSection = ({ agentEmail }) => {
  const [loader, setLoader] = useState(false);
  const [activeContact, setActiveContact] = useState(false);
  const fn_activeContact = () => {
    setActiveContact(!activeContact);
  };
  const Formik = useFormik({
    initialValues: { name: "", email: "", phone: "", message: "" },
    validationSchema: AgentContactSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoader(true);
      const result = await contactAgent({ ...values, agentEmail });
      if (result?.status === 200) {
        toast.success("Message Forwarded to the Agent!");
        resetForm();
        setActiveContact(false);
        setLoader(false);
      }
      setLoader(false);
    },
  });
  return (
    <div
      className={!activeContact ? `contact-section` : "contact-section-active"}
    >
      <div className="w-[280px] shadow">
        <div
          className="header text-white bg-[var(--main-text-color)] flex items-center justify-between px-[20px] h-[50px] rounded-t-[10px] gap-5 cursor-pointer"
          onClick={() => fn_activeContact()}
        >
          <p className="text-[14px] font-[600]">Contact to Agent</p>
          <IoIosArrowDown
            className={
              !activeContact
                ? "arrow-icon arrow-icon-inactive"
                : "arrow-icon-active"
            }
          />
        </div>
        <form
          className="bg-white flex flex-col gap-3 px-3 py-5"
          onSubmit={Formik.handleSubmit}
        >
          <div className="flex flex-col gap-1">
            <label className="text-[13px] font-[600]">Name</label>
            <input
              autoComplete="off"
              name="name"
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              className="h-[35px] rounded focus:outline-none px-2 text-[12px] font-[500] bg-gray-200"
            />
            {Formik.touched.name && Formik.errors.name && (
              <p className="text-[11px] text-[red] mt-[-4px]">
                {Formik.errors.name}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[13px] font-[600]">Email</label>
            <input
              autoComplete="off"
              name="email"
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              className="h-[35px] rounded focus:outline-none px-2 text-[12px] font-[500] bg-gray-200"
            />
            {Formik.touched.email && Formik.errors.email && (
              <p className="text-[11px] text-[red] mt-[-4px]">
                {Formik.errors.email}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[13px] font-[600]">Phone Number</label>
            <input
              autoComplete="off"
              name="phone"
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              className="h-[35px] rounded focus:outline-none px-2 text-[12px] font-[500] bg-gray-200"
            />
            {Formik.touched.phone && Formik.errors.phone && (
              <p className="text-[11px] text-[red] mt-[-4px]">
                {Formik.errors.phone}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[13px] font-[600]">Message</label>
            <textarea
              name="message"
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              className="h-[80px] rounded focus:outline-none px-2 text-[12px] font-[500] bg-gray-200"
            />
            {Formik.touched.message && Formik.errors.message && (
              <p className="text-[11px] text-[red] mt-[-4px]">
                {Formik.errors.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            {!loader ? (
              <input
                type="submit"
                value={"Contact"}
                className="cursor-pointer h-[35px] rounded text-[13px] font-[600] bg-[var(--main-text-color)] text-white"
              />
            ) : (
              <input
                type="submit"
                disabled
                value={"Loading..."}
                className="bg-[var(--main-text-color-small-blur)] text-[13px] font-[600] h-[35px] rounded text-white"
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
