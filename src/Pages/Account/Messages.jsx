import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

import { SOCKET_URL } from "../../URLs";

const socket = io(SOCKET_URL);

import SubNav from "./SubNav";
import logo from "../../assets/svg/real-estate-logo.svg";
import Navbar from "../../Components/Navbar";
import {
  getAgentContactsByUser,
  getAgentMessages,
  sendMessage,
} from "../../Api/api";
import toast from "react-hot-toast";

const Messages = () => {
  const [agentsList, setAgentsList] = useState([]);
  const [selectedAgentId, setSelectedAgentId] = useState("");
  const [selectedAgentName, setSelectedAgentName] = useState("");
  const [messages, setMessages] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const textMessage = useRef(null);
  const messagesContainerRef = useRef(null);
  const [newMessage, setNewMessage] = useState([]);
  useEffect(() => {
    async function fn_get() {
      const result = await getAgentContactsByUser(user?._id);
      if (result?.status === 200) {
        setAgentsList(result?.data?.message);
      } else {
        setAgentsList([]);
      }
    }
    fn_get();
  }, []);
  useEffect(() => {
    socket.on("welcome", (data) => {
      console.log("MSG FROM SERVER ==== > ", data);
    });

    return () => {
      socket.off("connection");
    };
  }, []);
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);
  const fn_selectedAgent = async (id, name) => {
    setSelectedAgentId(id);
    setSelectedAgentName(name);
    const result = await getAgentMessages(id, user?._id);
    if (result?.status === 200) {
      setMessages(result?.data?.message?.messagesData);
    } else {
      setMessages([]);
    }
  };
  const fn_sendMessage = async (e) => {
    e.preventDefault();
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const obj = {
      agent: selectedAgentId,
      user: user?._id,
      sender: "user",
      message: textMessage.current.value,
      time: formattedTime,
    };
    const result = await sendMessage(obj);
    if (result?.status === 200) {
      setMessages((prev) => [
        ...prev,
        {
          sender: obj.sender,
          message: obj.message,
          time: obj.time,
        },
      ]);
      textMessage.current.value = "";
      socket.emit("msg", obj);
      return () => {
        socket.off("connection");
      };
    } else {
      toast.error("Message Sending Failed");
    }
    textMessage.current.value = "";
  };
  useEffect(() => {
    const handleMessage = (msg) => {
      setNewMessage((prev) => [...prev, { ...msg }]);
    };
    socket.on("msg", handleMessage);
    return () => {
      socket.off("msg", handleMessage);
    };
  }, [socket]);
  useEffect(() => {
    if (newMessage?.length > 0) {
      const newMsg = newMessage?.[0];
      setMessages((prev) => [...prev, { ...newMsg }]);
      setTimeout(() => {
        setNewMessage([]);
      }, 500);
    }
  }, [newMessage]);
  return (
    <div className="account pt-[40px] bg-[#F3F3F3]">
      <Navbar activeNav={"account"} logo={logo} />
      <div className="section-1 mx-[13px] md:mx-[30px] lg:mx-[70px] py-[30px] flex">
        {/* sub-navbar */}
        <SubNav activeSubNav={"message"} />
        {/* content */}
        <div className="bg-gray-200 flex-1 rounded md:p-5">
          <p className="text-[15px] font-[700]">Messages</p>
          <div className="text-[13px] flex mt-2 gap-1">
            {/* contact names */}
            <div className="w-[140px]">
              {agentsList?.length > 0 ? (
                agentsList?.map((item, index) => (
                  <>
                    <p
                      key={index}
                      className="cursor-pointer leading-7 border-b border-gray-300 hover:bg-gray-300 px-2 capitalize"
                      onClick={() =>
                        fn_selectedAgent(item?.agent?._id, item?.agent?.name)
                      }
                    >
                      {item?.agent.name}
                    </p>
                  </>
                ))
              ) : (
                <p className="text-[11px] text-[red]">No Conversation Found</p>
              )}
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <div>
                <p className="bg-gray-700 leading-10 text-white rounded px-2 text-[15px] font-[600] capitalize">
                  {selectedAgentName}
                </p>
              </div>
              {/* messages */}
              <div
                className="h-[400px] overflow-y-auto w-full flex flex-col gap-1"
                ref={messagesContainerRef}
              >
                {messages?.length > 0
                  ? messages?.map((item, index) =>
                      item?.sender === "agent" ? (
                        <div className="flex justify-start">
                          <p className="bg-black text-white rounded min-w-[170px] max-w-[max-content] p-2">
                            <p className="border-b border-gray-700 text-[9px] capitalize mb-1">{selectedAgentName}</p>
                            <span>{item?.message}</span>
                            <span className="text-[9px] font-[400] flex items-center gap-2 justify-end">
                              {item?.time}
                            </span>
                          </p>
                        </div>
                      ) : (
                        <div className="flex justify-end">
                          <p className="bg-gray-500 rounded min-w-[170px] max-w-[max-content] p-2">
                          <p className="border-b border-gray-700 text-[9px] capitalize mb-1">You</p>
                            <span>{item?.message}</span>
                            <span className="text-[9px] font-[400] flex items-center gap-2 justify-end">
                              {item?.time}
                            </span>
                          </p>
                        </div>
                      )
                    )
                  : null}
              </div>
              {/* text message */}
              <form
                className="flex flex-row gap-2 mt-2"
                onSubmit={(e) => fn_sendMessage(e)}
              >
                <input
                  className="flex-1 focus:outline-none px-3 py-2 font-[13px] rounded"
                  ref={textMessage}
                />
                <input
                  type="submit"
                  value={"Send"}
                  className="bg-black w-[70px] rounded text-white hover:scale-[1.01] cursor-pointer"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
