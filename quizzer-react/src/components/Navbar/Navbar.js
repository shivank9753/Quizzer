import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import { CiDark } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsChatDots } from "react-icons/bs";

const Navbar = () => {
  return (
    <div
      id="navbar"
      className="h-14 flex items-center text-sm bg-white rounded-lg shadow-sm"
    >
      <div className="flex items-center justify-between w-full p-5">
        <div
          id="search"
          className="flex items-center p-2 bg-[#f5f5f5] rounded-full"
        >
          <AiOutlineSearch className="text-gray-400 text-xl mr-2" />
          <input
            type="search"
            placeholder="Search"
            className="border-none outline-none bg-transparent"
          />
        </div>
        <div id="items" className="flex items-center">
          <div
            id="item"
            className="flex items-center mr-5 bg-[#f5f5f5] rounded-full p-2 "
          >
            <CiDark className="text-xl" />
          </div>
          <div
            id="item"
            className="relative flex items-center mr-5 bg-[#f5f5f5] rounded-full p-2 group"
          >
            <span className="absolute h-2 w-2 rounded-full bg-red-600 top-0 right-0"></span>
            <IoNotificationsOutline className="text-xl group-hover:text-blue-600 duration-300" />
          </div>
          <div
            id="item"
            className="flex items-center mr-5 bg-[#f5f5f5] rounded-full p-2 relative group"
          >
            <span className="absolute h-2 w-2 rounded-full bg-red-600 top-0 right-0"></span>
            <BsChatDots className="text-xl group-hover:text-green-600 duration-300" />
          </div>
          <div id="item" className="flex items-center mr-5 ">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="avatar"
              className="h-8 w-8 rounded-full bg-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
