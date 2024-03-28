import "./Signin.css";
import React, { useState } from 'react';
import { Modal, Tabs } from "antd";
import { useFormik } from 'formik';
import { useDispatch } from "react-redux";

import { SigninSchema, SignupSchema } from "../../Schema/Schema";
import { createUser, loginUser } from "../../Api/api";

import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import toast from "react-hot-toast";
import { updateAuth } from "../../Features/Features";

const Signin = ({ showSigninModal, setShowSigninModal }) => {
    const items = [
        {
          key: '1',
          label: 'Sign in',
          children: <SigninTab setShowSigninModal={setShowSigninModal} />,
        },
        {
          key: '2',
          label: 'New Account',
          children: <SignupTab setShowSigninModal={setShowSigninModal} />,
        }
    ];
    return (
        <Modal
            title="Welcome To Real Estate!"
            style={{ top: 20 }}
            open={ showSigninModal }
            onOk={() => setShowSigninModal(false)}
            onCancel={() => setShowSigninModal(false)}
            footer={ null }
        >
            <hr />
            <Tabs defaultActiveKey="1" items={items} />
        </Modal>
  )
};

export default Signin

const SigninTab = ({ setShowSigninModal }) => {
    const [ showPassword, setShowPassword ] = useState(false);
    const dispatch = useDispatch();
    const initialValues = {
        email: "", password: ""
    };
    const Formik = useFormik({
        initialValues: initialValues,
        validationSchema: SigninSchema,
        onSubmit: async(values, { resetForm }) => {
            const result = await loginUser(values);
            if(result?.status === 200){
                localStorage.setItem('user', JSON.stringify(result?.data?.message));
                const token = result?.data?.message?.token;
                document.cookie = `auth=${token}; path=/; max-age=2592000`;
                resetForm();
                setShowSigninModal(false);
                dispatch(updateAuth(true));
                toast.success("User logged in Successfully");
            }else{
                if(result?.response?.status === 400){
                    toast.error(result?.response?.data?.message);
                }else{
                    toast.error("Server Error");
                }
            }
        }
    });
    return(
        <form onSubmit={Formik.handleSubmit} className='auth flex flex-col gap-3'>
            <div className='flex flex-col gap-1'>
                <p className='text-[13px] font-[700]'>Email</p>
                <input autoComplete="off" className='input' name="email" value={Formik.values.email} onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                {Formik.touched.email && <p className="text-[11px] mt-[-3px] text-[red]">{Formik.errors.email}</p>}
            </div>
            <div className='flex flex-col gap-1'>
                <p className='text-[13px] font-[700]'>Password</p>
                <div className="input flex items-center justify-between">
                    <input autoComplete="off" type={showPassword ? "text" : "password"} className="focus:outline-none flex-1" name="password" value={Formik.values.password} onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                    {showPassword ? (
                        <FaRegEye className="cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
                    ) : (
                        <FaRegEyeSlash className="cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
                    )}
                </div>
                {Formik.touched.password && <p className="text-[11px] mt-[-3px] text-[red]">{Formik.errors.password}</p>}
            </div>
            <input type="submit" className="cursor-pointer bg-[var(--main-text-color)] text-white text-[13px] h-[30px] rounded-[5px] font-[600] mt-2 active:scale-[0.995]" />
        </form>
    );
};

const SignupTab = ({ setShowSigninModal }) => {
    const [ showPassword, setShowPassword ] = useState(false);
    const dispatch = useDispatch();
    const initialValues = {
        name: "", email: "", password: ""
    };
    const Formik = useFormik({
        initialValues: initialValues,
        validationSchema: SignupSchema,
        onSubmit: async(values, { resetForm }) => {
            const result = await createUser(values);
            if(result?.status === 200){
                localStorage.setItem('user', JSON.stringify(result?.data));
                const token = result?.data?.token;
                document.cookie = `auth=${token}; path=/; max-age=2592000`;
                resetForm();
                setShowSigninModal(false);
                dispatch(updateAuth(true));
                return toast.success("User Created Successfully");
            }
        }
    });
    return(
        <form onSubmit={Formik.handleSubmit} className='auth flex flex-col gap-3'>
            <div className='flex flex-col gap-1'>
                <p className='text-[13px] font-[700]'>Name</p>
                <input autoComplete="off" className='input' name="name" value={Formik.values.name} onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                {Formik.touched.name && <p className="text-[11px] mt-[-3px] text-[red]">{Formik.errors.name}</p>}
            </div>
            <div className='flex flex-col gap-1'>
                <p className='text-[13px] font-[700]'>Email</p>
                <input autoComplete="off" className='input' name="email" value={Formik.values.email} onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                {Formik.touched.email && <p className="text-[11px] mt-[-3px] text-[red]">{Formik.errors.email}</p>}
            </div>
            <div className='flex flex-col gap-1'>
                <p className='text-[13px] font-[700]'>Password</p>
                <div className="input flex items-center justify-between">
                    <input autoComplete="off" type={showPassword ? "text" : "password"} className="focus:outline-none flex-1" name="password" value={Formik.values.password} onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                    {showPassword ? (
                        <FaRegEye className="cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
                    ) : (
                        <FaRegEyeSlash className="cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
                    )}
                </div>
                {Formik.touched.password && <p className="text-[11px] mt-[-3px] text-[red]">{Formik.errors.password}</p>}
            </div>
            <input type="submit" className="cursor-pointer bg-[var(--main-text-color)] text-white text-[13px] h-[30px] rounded-[5px] font-[600] mt-2 active:scale-[0.995]" />
        </form>
    );
};

