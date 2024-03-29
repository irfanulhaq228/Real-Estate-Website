import "./index.css"
import React, { useEffect, useState } from 'react';
import SubNav from './SubNav';

import { Modal } from 'antd';

import logo from "../../assets/svg/real-estate-logo.svg";
import Navbar from '../../Components/Navbar';
import { editUserInfo, getUserById } from "../../Api/api";
import toast from "react-hot-toast";

const Profile = () => {
  const [ modalOpen, setModalOpen] = useState(false);
  const [ selectForEdit, setSelectForEdit ] = useState("");
  const [ defaultValue, setDefaultValue ] = useState("");
  const [ userData, setUserData ] = useState({});
  const fn_editInfo = (name, value) => {
    setSelectForEdit(name);
    setModalOpen(true);
    setDefaultValue(value);
  };
  useEffect(() => {
    const fn_user = async() => {
      const result = await getUserById();
      if(result?.status === 200){
        setUserData(result?.data?.message);
      }
    }
    fn_user();
  }, [userData]);
  return (
    <div className="account pt-[40px] bg-[#F3F3F3]">
      <EditModal name={selectForEdit} modalOpen={modalOpen} setModalOpen={setModalOpen} value={defaultValue} setUserData={setUserData} userData={userData} />
      <Navbar activeNav={"account"} logo={logo} />
      <div className='profile mx-[13px] md:mx-[30px] lg:mx-[70px] py-[30px] flex'>
        
        {/* sub-navbar */}
        <SubNav activeSubNav = {"profile"} />

        {/* content */}
        <div className='bg-gray-200 flex-1 rounded md:p-5'>
            <p className='text-[15px] font-[700]'>Profile Information</p>
            <div className="mt-5 grid grid-cols-2 gap-5">
              <div className="text-[13px] flex-1 flex flex-col gap-1">
                <label className="font-[500]">
                  Name
                  &nbsp;
                  -
                  &nbsp;
                  <span className="text-blue-700 hover:underline cursor-pointer" onClick={() => fn_editInfo('Name', userData?.name)}>
                    Edit
                  </span>
                </label>
                <label className="font-[600]">{userData?.name}</label>
              </div>
              <div className="text-[13px] flex-1 flex flex-col gap-1">
              <label className="font-[500]">
                  Email
                  &nbsp;
                  -
                  &nbsp;
                  <span className="text-blue-700 hover:underline cursor-pointer" onClick={() => fn_editInfo('Email', userData?.email)}>
                    Edit
                  </span>
                </label>
                <label className="font-[600]">{userData?.email}</label>
              </div>
              <div className="col-span-2 text-[13px] flex-1 flex flex-col gap-1">
                <p className="h-[30px] bg-gray-300 rounded w-[max-content] px-2 flex items-center font-[500] cursor-pointer" onClick={() => fn_editInfo('Password')}>Change the Password ?</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

const EditModal = ({ name, modalOpen, setModalOpen, value, setUserData, userData }) => {
  const [ updatedField, setUpdatedField ] = useState("");
  const [ prevField, setPrevField ] = useState("");
  useEffect(() => {
    setUpdatedField(value);
  }, [value]);
  const fn_Edit = async() => {
    if(updatedField === ""){
      return toast.error("Field is Empty")
    }
    const sentName = name.toLowerCase();
    if(sentName !== "password"){
      var result = await editUserInfo({ [sentName]:updatedField, editFor: sentName });
    }else{
      var result = await editUserInfo({ [sentName]:updatedField, editFor: sentName, prevPassword: prevField });
    }
    if(result?.status === 200){
      toast.success(`User ${name} Updated`);
      setModalOpen(false);
      localStorage.setItem('user', JSON.stringify(result?.data?.message));
      setUserData(result?.data?.message);
    }else{
      if(result?.response?.status === 400){
        return toast.error(result?.response?.data?.message)
      }else{
        return toast.error("Network Error")
      }
    }
  }
  return(
    <Modal
        title={`Change ${name}`}
        style={{
          top: 20,
          fontFamily: "Montserrat"
        }}
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={null}
    >
        <hr />
        {name !== "Password" ? (
          <input value={updatedField} className="border border-gray-300 rounded h-[26px] px-3 w-full my-5 focus:outline-none text-[13px]" onChange={(e) => setUpdatedField(e.target.value)} />
        ) : (
          <div className="flex flex-col gap-1 my-5">
            <label className="text-[13px] font-[600]">Enter Previous Password</label>
            <input className="border border-gray-300 rounded h-[26px] px-3 w-full focus:outline-none text-[13px]" onChange={(e) => setPrevField(e.target.value)} />
            <label className="text-[13px] font-[600]">Enter New Password</label>
            <input className="border border-gray-300 rounded h-[26px] px-3 w-full focus:outline-none text-[13px]" onChange={(e) => setUpdatedField(e.target.value)} />
          </div>
        )}
        <hr />
        <button className="w-full h-[30px] bg-[var(--main-text-color)] text-white rounded hover:scale-[1.005] active:scale-[0.999] mt-5" onClick={fn_Edit}>Edit</button>
    </Modal>
  )
};


export default Profile;


