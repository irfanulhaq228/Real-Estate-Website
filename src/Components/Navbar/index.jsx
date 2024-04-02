import "./index.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { HiBars3 } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import Signin from "../Signin/Signin";


const Navbar = ({ logo, activeNav }) => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state?.auth);
  const [ showSigninModal, setShowSigninModal ] = useState(false);
  const items = [
    {
      label: (
        <p style={{fontFamily: "Montserrat"}} onClick={() => navigate("/property-description")} className={`${activeNav === "property" && "bg-[var(--main-text-color-blur)]"} h-[30px] w-[150px] rounded flex justify-center items-center`}>
          Property Description
        </p>
      ),
      key: "1",
    },
    {
      label: (
        <p style={{fontFamily: "Montserrat"}} onClick={() => navigate("/config-description")} className={`${activeNav === "config" && "bg-[var(--main-text-color-blur)]"} h-[30px] w-[150px] rounded flex justify-center items-center`}>
          Config Description
        </p>
      ),
      key: "2",
    },
    {
      label: (
        <p style={{fontFamily: "Montserrat"}} onClick={() => navigate("/agent-description")} className={`${activeNav === "agent" && "bg-[var(--main-text-color-blur)]"} h-[30px] w-[150px] rounded flex justify-center items-center`}>
          Agents Description
        </p>
      ),
      key: "3",
    },
    {
      label: (
        <p style={{fontFamily: "Montserrat"}} onClick={() => navigate("/locality-description")} className={`${activeNav === "locality" && "bg-[var(--main-text-color-blur)]"} h-[30px] w-[150px] rounded flex justify-center items-center`}>
          Locality Description
        </p>
      ),
      key: "4",
    },
  ];
  const [showMenu, setShowMenus] = useState(false);
  return (
    <div className="navbar px-[13px] md:px-[30px] lg:px-[70px]">
      { showSigninModal && <Signin showSigninModal={showSigninModal} setShowSigninModal={setShowSigninModal} /> }
      <div>{logo && <img src={logo} width={"80px"} onClick={() => navigate("/")} />}</div>
      <div className="menus gap-[15px] lg:gap-[30px]">
        <button
          className={`hidden lg:block menu ${
            activeNav === "home" && "menu-active"
          }`}
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <button
          className={`hidden lg:block menu ${
            activeNav === "about" && "menu-active"
          }`}
          onClick={() => navigate("/about-us")}
        >
          About Us
        </button>
        <Dropdown
          menu={{
            items,
          }}
          className={`hidden lg:flex menu cursor-pointer justify-center ${
            activeNav === "property" && "menu-active"
          } ${activeNav === "config" && "menu-active"} ${
            activeNav === "agent" && "menu-active"
          } ${activeNav === "locality" && "menu-active"}`}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space className="font-[600] cursor-pointer">
              Localities
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        <button
          className={`hidden lg:block menu ${
            activeNav === "developers" && "menu-active"
          }`}
          onClick={() => navigate("/developers")}
        >
          Developers
        </button>
        {!auth ? (
          <button
          className={`hidden lg:block menu`}
          onClick={() => setShowSigninModal(!showSigninModal)}
        >
          Sign In
          </button>
        ) : (
          <button
            className={`hidden lg:block menu ${
              activeNav === "account" && "menu-active"
            }`}
            onClick={() => navigate("/account")}
          >
            Account
          </button>
        )}
        <button
          className="flex lg:hidden menubar"
          onClick={() => setShowMenus(!showMenu)}
        >
          <HiBars3 />
        </button>
      </div>
      <div
        className={`${
          showMenu ? "flex" : "hidden"
        } lg:hidden mobile-menus absolute right-[70px] z-[999]`}
      >
        <button
          className={`menu ${activeNav === "home" && "menu-active"}`}
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <Dropdown
          menu={{
            items,
          }}
          className={`flex sm:hidden menu cursor-pointer justify-center p-3 rounded ${
            activeNav === "property" && "menu-active"
          } ${activeNav === "config" && "menu-active "} ${
            activeNav === "agent" && "menu-active"
          } ${activeNav === "locality" && "menu-active"}`}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space className="font-[600] cursor-pointer">
              Localities
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        <button
          className={`menu ${activeNav === "about" && "menu-active"}`}
          onClick={() => navigate("/about-us")}
        >
          About Us
        </button>
        <button className="menu">Localities</button>
        <button
          className={`menu ${activeNav === "developers" && "menu-active"}`}
          onClick={() => navigate("/developers")}
        >
          Developers
        </button>
        {!auth ? (
          <button
          className={`menu ${activeNav === "developers" && "menu-active"}`}
          onClick={() => setShowSigninModal(!showSigninModal)}
        >
          Sign In
          </button>
        ) : (
          <button
            className={`hidden sm:block menu ${
              activeNav === "account" && "menu-active"
            }`}
            onClick={() => navigate("/account")}
          >
            Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
