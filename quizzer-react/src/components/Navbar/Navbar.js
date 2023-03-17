import {
  ChatBubbleOutline,
  DarkModeOutlined,
  LanguageOutlined,
  ListOutlined,
  NotificationsNoneOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import React from "react";

const Navbar = () => {
  return (
    <div
      id="navbar"
      className="h-14 border-b-[0.5px] border-solid border-gray-300 flex items-center text-sm"
    >
      <div className="flex items-center justify-between w-full p-5">
        <div
          id="search"
          className="flex items-center p-1 border-[0.5px] border-solid border-gray-300"
        >
          <input
            type="search"
            placeholder="Search...."
            className="border-none outline-none bg-transparent"
          />
          <SearchOutlined />
        </div>
        <div id="items" className="flex items-center">
          <div id="item" className="flex items-center mr-5">
            <LanguageOutlined />
            English
          </div>
          <div id="item" className="flex items-center mr-5">
            <DarkModeOutlined />
          </div>
          <div id="item" className="flex items-center mr-5">
            <NotificationsNoneOutlined />
          </div>
          <div id="item" className="flex items-center mr-5">
            <ChatBubbleOutline />
          </div>
          <div id="item" className="flex items-center mr-5">
            <ListOutlined />
          </div>
          <div id="item" className="flex items-center mr-5">
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
