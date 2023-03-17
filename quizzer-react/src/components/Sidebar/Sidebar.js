import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
const Sidebar = () => {
  return (
    <div className="@apply flex-[1] border-r-[0.5px] border-solid border-gray-300 min-h-screen bg-white">
      <div className="h-14 flex justify-center items-center">
        <span className="text-xl text-purple-500">Quizzer</span>
      </div>
      <hr className="h-0 border-[0.5px] border-solid border-gray-300" />
      <div className="pl-3 pr-3">
        <ul>
          <p className="text-xs font-bold mt-3 mb-1 text-gray-300">Main</p>
          <li className="flex items-center cursor-pointer p-1 group">
            <DashboardIcon className="text-lg text-gray-400 group-hover:text-purple-500 duration-300" />
            <span className="text-sm ml-2 font-semibold text-gray-400 group-hover:text-black duration-300">
              Dashboard
            </span>
          </li>
          <p className="text-xs font-bold mt-3 mb-1 text-gray-300">List</p>
          <li>
            <span className="text-sm ml-2 font-semibold">User</span>
          </li>
          <li>
            <span className="text-sm ml-2 font-semibold">Products</span>
          </li>
          <li>
            <span className="text-sm ml-2 font-semibold">Orders</span>
          </li>
          <li>
            <span className="text-sm ml-2 font-semibold">Delivery</span>
          </li>
          <p className="text-xs font-bold mt-3 mb-1 text-gray-300">Useful</p>
          <li>
            <span className="text-sm ml-2 font-semibold">Stats</span>
          </li>
          <li>
            <span className="text-sm ml-2 font-semibold">Notifications</span>
          </li>
          <p className="text-xs font-bold mt-3 mb-1 text-gray-300">Service</p>
          <li>
            <span className="text-sm ml-2 font-semibold">System Health</span>
          </li>
          <li>
            <span className="text-sm ml-2 font-semibold"> Logs</span>
          </li>
          <li>
            <span className="text-sm ml-2 font-semibold">Settings</span>
          </li>
          <p className="text-xs font-bold mt-3 mb-1 text-gray-300">User</p>
          <li>
            <span className="text-sm ml-2 font-semibold">Profile</span>
          </li>
          <li>
            <span className="text-sm ml-2 font-semibold">Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
