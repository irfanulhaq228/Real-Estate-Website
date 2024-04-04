import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getAgentInfoById } from "../../Api/api";
import logo from "../../assets/svg/real-estate-logo.svg";
import Navbar from "../../Components/Navbar";
import img from "../../assets/img/empty-user.png";

const AgentInfo = () => {
  const { id } = useParams();
  const [ agentInfo, setAgentInfo ] = useState(useSelector(state => state.agentInfo));
  useEffect(() => {
    const fn_callApi = async(id) => {
        const result = await getAgentInfoById(id);
        if(result?.status === 200){
            setAgentInfo(result?.data?.message);
        }
    }
    if(Object.keys(agentInfo).length === 0){
        fn_callApi(id);
    }
  }, [id]);
//   console.log("data use in web ===========> ", agentInfo);
  return <div className="agent-info pt-[40px] bg-[#F3F3F3]">
    <Navbar activeNav={'findAgent'} logo={logo} />
    <div className="px-[13px] md:px-[30px] lg:px-[70px] mt-[10px] flex gap-5">
        <div className="w-[160px]">
            <img src={img} width={"100%"} />
        </div>
        <div className="flex-1 flex justify-center flex-col">
            <p className="text-[15px] font-[600]">John Wick</p>
            <p className="text-[14px]">Johr Town, Lahore, Pakistan</p>
        </div>
    </div>
  </div>;
};

export default AgentInfo;
