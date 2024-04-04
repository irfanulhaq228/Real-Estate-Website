import "./index.css";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

import logo from "../../assets/svg/real-estate-logo.svg";
import Navbar from '../../Components/Navbar';
import { getAgentInfoById } from "../../Api/api";

import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section3b from "./Section3b";
import Section3a from "./Section3a";
import ContactSection from "./ContactSection";

const AgentDescription = ({ setSelectedHome, setFilterHomesList }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, []);
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
  return (
    <div className="agent-description pt-[40px] bg-[#F3F3F3]">
        <Navbar logo={logo} activeNav={'agent'} />
        <Section1 agentInfo={ agentInfo } />
        <Section2 />
        <Section3 />
        <Section3a id={id} setSelectedHome={setSelectedHome} setFilterHomesList={setFilterHomesList} />
        <Section3b />
        <Section4 agentInfo={ agentInfo } />
        <ContactSection agentEmail={ agentInfo.email } />
    </div>
  )
}

export default AgentDescription