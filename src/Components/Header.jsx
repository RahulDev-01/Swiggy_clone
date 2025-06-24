import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoSearchSharp } from "react-icons/io5";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { LiaBoxOpenSolid } from "react-icons/lia";
import { FaWindowMaximize } from "react-icons/fa";
import { TbBriefcase2 } from "react-icons/tb";

function Header() {
  // Toogle Bar is Created
  // Nav bar is completed
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
  };
  const hideSideMenu = () => {
    setToggle(false);
  };
  // Nav bar rendering
  const links = [
    {
      icon: <TbBriefcase2 />,
      name: "Swiggy Coporate",
    },
    {
      icon: <IoSearchSharp />,
      name: "Search",
    },
    {
      icon: <RiDiscountPercentLine />,
      name: "Offers",
      sup: "New",
    },
    {
      icon: <FaWindowMaximize />,
      name: "Help",
    },
    {
      icon: <IoPersonOutline />,
      name: "Sign In",
    },
    {
      icon: <LiaBoxOpenSolid />,
      name: "Cart",
    },
  ];

  return (
    <>
      <div
        className="black-overlay h-full w-full fixed duration-500"
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
          zIndex: toggle?10:-1
        }}
        onClick={hideSideMenu}
      >
        <div
          className="w-[400px] bg-white h-full  position absolute duration-[400ms] z"
          style={{ left: toggle ? "0%" : "-100%" }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        ></div>
      </div>
      <header className="p-3 shadow-xl sticky top-0 z-[999] bg-white">
        <div className="max-w-[1200px] mx-auto  flex items-center ">
          <div className="w-[100px]  ">
            <img src="Images/logo.png" alt="" className="w-full" />
          </div>
          <div
            className="cursor-pointer   hover:text-[1.01rem] "
            onClick={showSideMenu}
            style={{}}
          >
            <span className="font-bold border-b-2  ">Hyderabad</span>{" "}
            <span className="text-[#686b78]">Telangana, Inda</span>
            <RxCaretDown
              onClick={showSideMenu}
              className="inline text-[1.3rem] text-[#fc8019]  font-bold cursor-pointer "
            />
          </div>
          <nav className="flex list-none gap-10 ml-auto font-semibold text-[18px]">
            {links.map((link, index) => {
              return (
                <li className="cursor-pointer flex hover:text-[#fc8019] items-center gap-2">
                  {link.icon}
                  {link.name}
                  <sup className="text-[#fc8019]">{link.sup}</sup>
                </li>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
